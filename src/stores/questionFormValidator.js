import { writable } from 'svelte/store';

const QuestionFormValidator = writable({
	personalDetails: false,
	universityDetails: false,
	interests: false
});

export default QuestionFormValidator;
