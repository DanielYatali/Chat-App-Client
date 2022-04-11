import { writable } from 'svelte/store';

const SocialDetails = writable({
	instagram: '',
	tikTok: '',
	snapChat: '',
	steam: '',
	discord: '',
	whatsapp: '',
	twitter: ''
});

export default SocialDetails;
