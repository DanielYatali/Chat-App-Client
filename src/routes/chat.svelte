<!-- <script context="module">
	import { get } from 'svelte/store';
	export async function load({ url, params }) {
		const receiver = params.to;
		console.log(sender.token);
		
		return {
			props: {
				receiver,
				sender
			}
		};
	}
</script> -->
<script>
	import currentUser from '../stores/userDataStore.js';
	import ChatSideBar from '../components/chatSideBar.svelte';
	import ChatBox from '../components/chatbox.svelte';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import Nav from '../components/nav.svelte';
	import CurrentChat from '../stores/currentChatStore';
	import { get } from 'svelte/store';
	import { endpoints } from '$lib/endpoints.js';

	let sender = {};
	let currentChat;
	CurrentChat.subscribe((value) => {
		currentChat = value;
	});
	let chats = [];
	onMount(() => {
		sender = get(currentUser);
		(async () => {
			const rawResponse = await fetch(endpoints.database + '/user/conversations/user_info', {
				method: 'GET',
				headers: {
					Accept: 'application/json',
					Authorization: 'JWT ' + sender.token,
					'Content-Type': 'application/json'
				}
			});
			try {
				let reponse = await rawResponse.json();
				chats = reponse;
				console.log(reponse);
			} catch (error) {
				console.error(error);
			}
		})();
		// if (!sender.login) {
		// 	goto('/no-auth');
		// }
	});
</script>

<!-- <h1>Welcome {sender.username}</h1> -->
<div class="">
	<div class="sticky top-0 w-full">
		<Nav />
	</div>

	<div class="flex flex-no-wrap">
		<div class="fixed z-10">
			<ChatSideBar {chats} />
		</div>
		<div class="mt-0 sm:mt-4 sm:ml-72 md:ml-80 container mx-auto md:w-4/5 w-11/12 px-1">
			<ChatBox {currentChat} {sender} />
		</div>
	</div>
</div>
