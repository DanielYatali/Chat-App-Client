<script context="module">
	import ChatSideBar from '../../components/chatSideBar.svelte';
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
	import Nav from '../../components/nav.svelte';
	export let receiver;
	export let sender;
	onMount(() => {
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
			<ChatSideBar />
		</div>
		<div class="mt-0 sm:mt-4 sm:ml-72 md:ml-80 container mx-auto md:w-4/5 w-11/12 px-1">
			<ChatBox {receiver} {sender} />
		</div>
	</div>
</div>
