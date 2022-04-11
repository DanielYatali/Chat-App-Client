<script>
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte/internal';
	import { io } from 'socket.io-client';
	export let receiver;
	export let sender;
	let messages = [];
	let message;
	let chatScroll;
	let y;
	onMount(() => {
		chatScroll.scrollTop = chatScroll.scrollHeight;
		let data = {};
		data['conversation_name'] = receiver;
		(async () => {
			const rawResponse = await fetch(
				'https://hpofficepaper-database-chatapp.herokuapp.com/conversation/messages',
				{
					method: 'POST',
					headers: {
						Accept: 'application/json',
						Authorization: 'JWT ' + sender.token,
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(data)
				}
			);
			messages = await rawResponse.json();
			console.log(messages);
		})();
	});
	const socket = io('https://hpoffice-paper-chat-app-server.herokuapp.com/');
	// const socket = io('http://localhost:5000/');
	let id;
	//Remember to implent this in an onLoad function
	socket.on('connection', () => {
		console.log(socket.id);
	});
	socket.on('connect', () => {
		id = socket.id;
		console.log(socket.id);
		console.log(receiver);
		socket.emit('join-room', receiver);
		socket.on('receive-message', (msg) => {
			messages = [...messages, msg];
		});
	});

	const handleSubmit = () => {
		let today = new Date();
		// let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
		let time = today.getHours() + ':' + today.getMinutes();
		// let dateTime = date+' '+time;
		if (message != '')
			socket.emit('send-message', {
				conversation_name: receiver,
				sender_name: sender.username,
				content: message,
				datetime: time,
				token: sender.token
			});
		message = '';
	};
</script>

<div style="height: 90vh;" class="flex-1 p:2 sm:p-2 flex flex-col w-full h-full">
	<div class="flex mx-4 sm:items-center justify-between py-3 border-b-2 border-gray-200">
		<div class="relative flex items-center space-x-4">
			<div class="relative">
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/542px-Unknown_person.jpg?20200423155822"
					alt=""
					class="w-10 sm:w-16 h-10 sm:h-16 rounded-full"
				/>
			</div>
			<div class="flex flex-col leading-tight">
				<div class="text-2xl mt-1 flex items-center">
					<span class="text-gray-700 mr-3">{receiver}</span>
				</div>
				<!-- <span class="text-lg text-gray-600">Junior Developer</span> -->
			</div>
		</div>
		<div class="flex items-center space-x-2">
			<!-- search button -->
			<button
				type="button"
				class="inline-flex items-center justify-center rounded-lg border h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					class="h-6 w-6"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
					/>
				</svg>
			</button>
			<!-- heart -->
			<button
				type="button"
				class="inline-flex items-center justify-center rounded-lg border h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					class="h-6 w-6"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
					/>
				</svg>
			</button>
			<!-- bell -->
			<button
				type="button"
				class="inline-flex items-center justify-center rounded-lg border h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					class="h-6 w-6"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
					/>
				</svg>
			</button>
		</div>
	</div>
	<!-- chat box -->
	<div
		bind:this={chatScroll}
		id="messages"
		class="h-screen flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch"
	>
		<div class="chat-message">
			{#each messages as message}
				{#if message.sender_name == sender.username}
					<div class="flex items-end justify-end">
						<div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
							<div class="px-4 py-2 rounded-full flex rounded-br-none blue-msg text-white">
								<pre class="pt-1 mr-3 max-w-xs">{message.content}</pre>
								<span class="time pb-2">{message.datetime}</span>
							</div>
						</div>
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/542px-Unknown_person.jpg?20200423155822"
							alt="My profile"
							class="w-10 h-10 rounded-full order-2"
						/>
					</div>
				{:else}
					<div class="flex items-end">
						<div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
							<div>
								<div class="px-4 py-2 rounded-full flex rounded-bl-none cream-msg text-gray-600">
									<div class="flex flex-col">
										<span class="mr-3">{message.sender_name}</span>
										<pre class="pt-1 mr-3 max-w-xs">{message.content}</pre>
									</div>
									<span class=" time pb-2">{message.datetime}</span>
								</div>
							</div>
						</div>
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/542px-Unknown_person.jpg?20200423155822"
							alt="My profile"
							class="w-10 h-10 rounded-full order-1"
						/>
					</div>
				{/if}
				<br class="line-break" />
			{/each}
		</div>
	</div>
	<div class="sticky bottom-0 border-gray-200 p-2 mb-0">
		<div class="relative flex">
			<span class="absolute inset-y-0 flex items-center">
				<button
					type="button"
					class="inline-flex items-center justify-center rounded-full h-12 w-12 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						class="h-6 w-6 text-gray-600"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
						/>
					</svg>
				</button>
			</span>
			<input
				bind:value={message}
				type="text"
				placeholder="Write your message!"
				class="border-none w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-12 bg-gray-200 rounded-l-full py-3"
			/>
			<div class="relative right-0 items-center inset-y-0 sm:flex bg-gray-200 rounded-r-full">
				<button
					type="button"
					class="hidden sm:inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						class="h-6 w-6 text-gray-600"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
						/>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
						/>
					</svg>
				</button>
				<button
					type="button"
					class="hidden sm:inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						class="h-6 w-6 text-gray-600"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
						/>
					</svg>
				</button>
				<button
					on:click={handleSubmit}
					type="button"
					class="inline-flex items-center justify-center rounded-full px-3 py-3 transition duration-500 ease-in-out text-white bg-blue-500 hover:bg-blue-400 focus:outline-none"
				>
					<!-- <span class="font-bold">Send</span> -->
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 17"
						fill="currentColor"
						class="h-6 w-6 ml-2 transform rotate-90"
					>
						<path
							d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"
						/>
					</svg>
				</button>
			</div>
		</div>
	</div>
</div>

<!-- <h1>Sender : {sender.username} Receiver: {receiver}</h1>
	<div class="container flex flex-col bg-red-500 p-10">
		<div class="h-96 bg-orange-400 overflow-y-scroll">
			{#each messages as message}
			{#if message.sender_name == sender.username}
			<div class="flex flex-col message sent">
				<p class="flex text-gray-500">{message.sender_name}</p>
				<p>{message.content}</p>
				<p class="float-right">{message.datetime}</p>
			</div>
			{:else}
			<div class="flex flex-col message received">
				<p class="flex text-gray-500">{message.sender_name}</p>
				<p>{message.content}</p>
				<p class="float-right">{message.datetime}</p>
			</div>
			{/if}
			{/each}
		</div>
		
		<div class="relative text-gray-700">
			<input
			bind:value={message}
			class="w-full h-10 pl-3 pr-8 text-base placeholder-gray-500 border rounded-lg focus:shadow-outline"
			type="text"
			placeholder="Enter Text"
			/>
			
			<button
			on:click={handleSubmit}
			class="absolute inset-y-0 right-0 flex items-center px-4 font-bold text-white bg-indigo-600 rounded-r-lg hover:bg-indigo-500 focus:bg-indigo-700"
			>Submit</button
			>
		</div>
	</div> -->
<!-- 
	<style>
		
		.message:after {
			position: absolute;
			content: '';
			width: 0;
			height: 0;
			border-style: solid;
		}
		
		.message.received {
			background: #fff;
			border-radius: 0px 5px 5px 5px;
			float: left;
		}
		
		.message.received .metadata {
			padding: 0 0 0 16px;
		}
		
		.message.received:after {
			border-width: 0px 10px 10px 0;
			border-color: transparent #fff transparent transparent;
			top: 0;
			left: -10px;
		}
		
		.message.sent {
			background: #e1ffc7;
			border-radius: 5px 0px 5px 5px;
			float: right;
		}
		
		.message.sent:after {
			border-width: 0px 0 10px 10px;
			border-color: transparent transparent transparent #e1ffc7;
			top: 0;
		right: -10px;
	}
</style> -->

<!-- <script>
	const el = document.getElementById('messages');
	el.scrollTop = el.scrollHeight;
</script> -->
<style>
	.message {
		color: #000;
		clear: both;
		line-height: 18px;
		font-size: 15px;
		padding: 8px;
		position: relative;
		margin: 8px 0;
		width: 25%;
		max-width: 85%;
		word-wrap: break-word;
		/* z-index: -1; */
	}
	.scrollbar-w-2::-webkit-scrollbar {
		width: 0.25rem;
		height: 0.25rem;
	}

	.scrollbar-track-blue-lighter::-webkit-scrollbar-track {
		--bg-opacity: 1;
		background-color: #f7fafc;
		background-color: rgba(247, 250, 252, var(--bg-opacity));
	}

	.scrollbar-thumb-blue::-webkit-scrollbar-thumb {
		--bg-opacity: 1;
		background-color: #edf2f7;
		background-color: rgba(237, 242, 247, var(--bg-opacity));
	}

	.scrollbar-thumb-rounded::-webkit-scrollbar-thumb {
		border-radius: 0.25rem;
	}
	.line-break {
		display: block;
		content: '';
		margin-top: 0.7rem;
	}

	.time {
		font-size: 0.6rem;
	}

	pre {
		word-wrap: break-word; /* IE 5.5-7 */
		white-space: -moz-pre-wrap; /* Firefox 1.0-2.0 */
		white-space: pre-wrap; /* current browsers */
	}
</style>
