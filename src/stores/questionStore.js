//Stores the current question state
import { writable } from 'svelte/store';

const CurrentQuestion = writable('personal details');

export default CurrentQuestion;
