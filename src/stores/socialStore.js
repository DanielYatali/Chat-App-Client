import { writable } from 'svelte/store';

const SocialDetails = writable({
	Instagram: '',
	TikTok: '',
	GitHub: '',
	Steam: '',
	Discord: '',
	Whatsapp: '',
	Twitter: ''
});

export default SocialDetails;
