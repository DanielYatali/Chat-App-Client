<script>
	import CurrentChat from '../stores/currentChatStore';
	import Messages from '../stores/messagesStore';
	import CurrentUser from '../stores/userDataStore';
	import { onMount } from 'svelte';
	import { get } from 'svelte/store';
	import { endpoints } from '$lib/endpoints';
	import ChatMessages from '../stores/chatMessages';
	import UnReadChatMessages from '../stores/unReadChatMessages';
	export let chat;
	let user = {};
	let allChatMessages = {};
	let lastMessage = { content: '', datetime: '' };
	let unReadChatMessages = {};
	UnReadChatMessages.subscribe((value) => {
		unReadChatMessages = value;
	});
	ChatMessages.subscribe((value) => {
		let messages = value[chat.conversation_name];
		lastMessage = messages[messages.length - 1];
		allChatMessages = value;
	});

	onMount(() => {
		lastMessage = { content: '', datetime: '' };
		user = get(CurrentUser);
		(async () => {
			const rawResponse = await fetch(endpoints.database + chat.conversation_id + '/messages', {
				method: 'GET',
				headers: {
					Accept: 'application/json',
					Authorization: 'JWT ' + user.token,
					'Content-Type': 'application/json'
				}
			});
			let messages = await rawResponse.json();
			if (messages != []) {
				lastMessage = messages[messages.length - 1];
			}
			allChatMessages = get(ChatMessages);
			allChatMessages[chat.conversation_name] = messages;
			ChatMessages.set(allChatMessages);

			// console.log(messages);
		})();
	});
	const showChat = () => {
		unReadChatMessages = get(UnReadChatMessages);
		if (unReadChatMessages.hasOwnProperty(chat.conversation_name)) {
			delete unReadChatMessages[chat.conversation_name];
			UnReadChatMessages.set(unReadChatMessages);
		}
		if (chat.private) {
			CurrentChat.set({
				conversation_id: chat.conversation_id,
				conversation_name: chat.conversation_name,
				private: chat.private,
				receiver_id: chat.user_id,
				receiver_username: chat.username,
				bot: chat.bot,
				photo: chat.photo
			});
		} else {
			CurrentChat.set({
				conversation_id: chat.conversation_id,
				conversation_name: chat.conversation_name,
				private: chat.private,
				receiver_id: '',
				receiver_username: '',
				bot: '',
				photo: chat.photo
			});
		}
		// Messages.set(allChatMessages[chat.conversation_name]);
		//Fix this
		// (async () => {
		// 	const rawResponse = await fetch(endpoints.database + chat.conversation_id + '/messages', {
		// 		method: 'GET',
		// 		headers: {
		// 			Accept: 'application/json',
		// 			Authorization: 'JWT ' + user.token,
		// 			'Content-Type': 'application/json'
		// 		}
		// 	});
		// 	let messages = await rawResponse.json();
		// 	lastMessage = messages[0];
		// 	Messages.set(messages);
		// 	allChatMessages = get(ChatMessages);
		// 	allChatMessages[chat.conversation_name] = messages;
		// 	ChatMessages.set(allChatMessages);

		// 	console.log(messages);
		// })();
	};
</script>

<li
	on:click={showChat}
	class="flex justify-between items-center bg-white mt-2 p-2 hover:shadow-lg rounded cursor-pointer transition"
>
	<div class="flex ml-2">
		<img src={chat.photo} class="rounded-full w-10 h-10" alt="profile-img" />
		<div class="flex flex-col ml-2">
			{#if chat.private}
				<span class="font-medium text-black">{chat.username}</span>
			{:else}
				<span class="font-medium text-black">{chat.conversation_name}</span>
			{/if}
			<span class="text-sm text-gray-400 truncate w-32">
				{#if lastMessage}
					{lastMessage['content']}
				{/if}
				<!-- {chat.lastMessage.content} -->
			</span>
		</div>
	</div>
	<div class="flex flex-col items-center">
		<span class="text-gray-300">
			{#if lastMessage}
				<!-- content here -->
				{lastMessage['datetime']}
			{/if}
			<!-- {chat.lastMessage.time} -->
		</span>
		{#if unReadChatMessages.hasOwnProperty(chat.conversation_name)}
			<div class="bg-green-400 w-5 h-5 rounded-full">
				<p class="text-center fa fa text-sm text-gray-200">
					{unReadChatMessages[chat.conversation_name]}
				</p>
			</div>
			<!-- content here -->
		{/if}
	</div>
</li>
