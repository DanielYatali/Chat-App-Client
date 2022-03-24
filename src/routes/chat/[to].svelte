<script context="module">
	import { get } from 'svelte/store';
	import currentUser from '../../stores/userDataStore.js';
	export async function load({ url, params }) {
		const receiver = params.to;
		const sender = get(currentUser);

		return {
			props: {
				receiver,
				sender
			}
		};
	}
</script>

<script>
	import ChatBox from '../../components/chatbox.svelte';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	export let receiver;
	export let sender;
	onMount(() => {
		// if (!sender.login) {
		// 	goto('/no-auth');
		// }
	});
</script>

<h1>Welcome {sender.username}</h1>
<div>
	<ChatBox {receiver} {sender} />
</div>
