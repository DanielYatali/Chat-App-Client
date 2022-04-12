import { writable } from 'svelte/store';

const currentUser = writable({
	id: '',
	username: '',
	token: '',
	loggedIn: false
});

export default currentUser;
