import { writable } from 'svelte/store';

const UniversityDetails = writable({
	universityName: '',
	faculty: '',
	major: ''
});

export default UniversityDetails;
