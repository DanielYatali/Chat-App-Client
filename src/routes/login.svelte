<script>
	import { endpoints } from '$lib/endpoints';

	import { onMount } from 'svelte';

	import LoginForm from '../components/loginForm.svelte';
	import PersonalDetails from '../stores/personalDetailsStore';
	import InterestDetails from '../stores/interestStore';
	import UniversityDetails from '../stores/universityDetailsStore';
	import SocialDetails from '../stores/socialStore';
	import { goto } from '$app/navigation';
	import CurrentUser from '../stores/userDataStore';

	const setPersonalDetails = (UserInfo) => {
		PersonalDetails.set({
			firstName: UserInfo.first_name,
			lastName: UserInfo.last_name,
			email: UserInfo.email,
			country: UserInfo.country,
			city: UserInfo.city,
			about: UserInfo.about,
			photo: UserInfo.photo
		});
	};

	const setInterestDetails = (UserInfo) => {
		InterestDetails.set({
			stayingIn: UserInfo.staying_in,
			sport: UserInfo.sport,
			movie: UserInfo.movie,
			music: UserInfo.music
		});
	};

	const setUniversityDetails = (UserInfo) => {
		UniversityDetails.set({
			universityName: UserInfo.university,
			faculty: UserInfo.faculty,
			major: UserInfo.major
		});
	};

	const setSocialDetails = (UserInfo) => {
		let socials = UserInfo.other_info.socials;

		if (socials.hasOwnProperty('instagram')) {
			$SocialDetails.Instagram = socials.instagram;
		}
		if (socials.hasOwnProperty('twitter')) {
			$SocialDetails.Twitter = socials.twitter;
		}
		if (socials.hasOwnProperty('tikTok')) {
			$SocialDetails.TikTok = socials.tikTok;
		}
		if (socials.hasOwnProperty('github')) {
			$SocialDetails.GitHub = socials.github;
		}
		if (socials.hasOwnProperty('steam')) {
			$SocialDetails.Steam = socials.steam;
		}
		if (socials.hasOwnProperty('discord')) {
			$SocialDetails.Discord = socials.discord;
		}
		if (socials.hasOwnProperty('whatsapp')) {
			$SocialDetails.Whatsapp = socials.whatsapp;
		}
	};
	const populateStores = (UserInfo) => {
		setPersonalDetails(UserInfo);
		setUniversityDetails(UserInfo);
		setInterestDetails(UserInfo);
		setSocialDetails(UserInfo);
		goto('/dashboard');
	};

	onMount(async () => {
		if (localStorage.getItem('access_token')) {
			try {
				const Response = await fetch(endpoints.database + '/user/info', {
					method: 'GET',
					headers: {
						Accept: 'application/json',
						Authorization: 'JWT ' + localStorage.getItem('access_token'),
						'Content-Type': 'application/json'
					}
				});
				let UserInfo = await Response.json();
				let newUser = false;
				if (UserInfo.hasOwnProperty('message')) {
					newUser = true;
				}
				CurrentUser.set({
					id: UserInfo.user_id,
					username: UserInfo.username,
					token: localStorage.getItem('access_token'),
					loggedIn: true,
					photo: UserInfo.photo,
					newUser: newUser
				});
				console.log(localStorage.getItem('access_token'));
				//Since user has no information send them to answer questions
				if (newUser) {
					$CurrentUser.photo = 'https://i.ibb.co/f0rM4vQ/person.jpg';
					goto('/questions');
				} else {
					populateStores(UserInfo);
					goto('/dashboard');
				}
			} catch (error) {
				console.error(error);
			}
		}
	});
</script>

<!-- <div class="form-container"> -->
<div
	style="height: 100vh; width:100vw"
	class="md:bg-[url('https://i.imgur.com/0CUwW1S.jpeg')] bg-cover bg-no-repeat  bg-[url('https://i.ibb.co/3M25jJq/Promo-Instagram-Instagram-reels.jpg')] "
>
	<div class="backdrop-blur-sm">
		<LoginForm {populateStores} />
	</div>
</div>

<style>
</style>
