import { writable } from 'svelte/store';
import PersonalDetails from './personalDetailsStore';
import SocialDetails from './socialStore';
import InterestDetails from './interestStore';
import UniversityDetails from './universityDetailsStore';

let university, interest, social, personal;

PersonalDetails.subscribe((value) => {
	personal = value;
});

SocialDetails.subscribe((value) => {
	social = value;
});

InterestDetails.subscribe((value) => {
	interest = value;
});
UniversityDetails.subscribe((value) => {
	university = value;
});
const UserInfo = writable({
	personalDetails: personal,
	universityDetails: university,
	interests: interest,
	socials: social
});

export default UserInfo;
