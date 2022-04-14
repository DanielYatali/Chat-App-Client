<script>
	import CurrentChat from '../stores/currentChatStore';
	import Messages from '../stores/messagesStore';
	import CurrentUser from '../stores/userDataStore';
	import { onMount } from 'svelte';
	import { get } from 'svelte/store';
	import endpoints from '$lib/endpoints';

	let user;
	onMount(() => {
		user = get(CurrentUser);
	});
	export let chat;
	const showChat = () => {
		if (chat.private) {
			CurrentChat.set({
				conversation_id: chat.conversation_id,
				conversation_name: chat.conversation_name,
				private: chat.private,
				receiver_id: chat.user_id,
				receiver_username: chat.username,
				bot: chat.bot
			});
		} else {
			CurrentChat.set({
				conversation_id: chat.conversation_id,
				conversation_name: chat.conversation_name,
				private: chat.private,
				receiver_id: '',
				receiver_username: '',
				bot: ''
			});
		}
		//Fix this
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
			Messages.set(messages);
			console.log(messages);
		})();
	};
</script>

<li
	on:click={showChat}
	class="flex justify-between items-center bg-white mt-2 p-2 hover:shadow-lg rounded cursor-pointer transition"
>
	<div class="flex ml-2">
		<img src={chat.photo} width="40" height="40" class="rounded-full" alt="profile" />
		<div class="flex flex-col ml-2">
			{#if chat.private}
				<span class="font-medium text-black">{chat.username}</span>
			{:else}
				<span class="font-medium text-black">{chat.conversation_name}</span>
			{/if}
			<span class="text-sm text-gray-400 truncate w-32">
				last msg
				<!-- {chat.lastMessage.content} -->
			</span>
		</div>
	</div>
	<div class="flex flex-col items-center">
		<span class="text-gray-300">
			10:10
			<!-- {chat.lastMessage.time} -->
		</span>
		<i class="fa fa-star text-green-400" />
	</div>
</li>
