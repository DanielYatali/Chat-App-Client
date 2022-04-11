import { writable } from 'svelte/store';

const PersonalDetails = writable({
	firstName: '',
	lastName: '',
	email: '',
	country: '',
	city: '',
	about: ''
});

export default PersonalDetails;
