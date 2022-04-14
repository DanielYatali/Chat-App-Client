<script>
	import { goto } from '$app/navigation';

	import { form, field } from 'svelte-forms';
	import { required } from 'svelte-forms/validators';
	import { get } from 'svelte/store';
	import currentUser from '../stores/userDataStore';

	import PersonalDetails from '../stores/personalDetailsStore';
	import UniversityDetails from '../stores/universityDetailsStore';
	import InterestDetails from '../stores/interestStore';
	import SocialDetails from '../stores/socialStore';
	import { endpoints } from '$lib/endpoints';

	const setPersonalDetails = (UserInfo) => {
		PersonalDetails.set({
			firstName: UserInfo.first_name,
			lastName: UserInfo.last_name,
			email: UserInfo.email,
			country: UserInfo.country,
			city: UserInfo.city,
			about: UserInfo.about
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
		let instagram = '';
		let tikTok = '';
		let snapChat = '';
		let steam = '';
		let discord = '';
		let whatsapp = '';
		let twitter = '';

		if (socials.hasOwnProperty('instagram')) {
			instagram = socials.instagram;
		}
		if (socials.hasOwnProperty('twitter')) {
			twitter = socials.twitter;
		}
		if (socials.hasOwnProperty('tikTok')) {
			tikTok = socials.tikTok;
		}
		if (socials.hasOwnProperty('snapChat')) {
			snapChat = socials.snapChat;
		}
		if (socials.hasOwnProperty('steam')) {
			steam = socials.steam;
		}
		if (socials.hasOwnProperty('discord')) {
			discord = socials.discord;
		}
		if (socials.hasOwnProperty('whatsapp')) {
			whatsapp = socials.whatsapp;
		}

		SocialDetails.set({
			instagram: instagram,
			tikTok: tikTok,
			snapChat: snapChat,
			steam: steam,
			discord: discord,
			whatsapp: whatsapp,
			twitter: twitter
		});
	};

	//Creating form fields
	const name = field('name', '', [required()], {
		validateOnChange: false
	});
	const password = field('password', '', [required()], {
		validateOnChange: false
	});

	const myForm = form(name, password);

	let loginResponse = {};
	let error = false;
	//Validates the user input when button is clicked

	function validate() {
		name.validate();
		password.validate();
		const user = {
			username: $name.value,
			password: $password.value
		};
		(async () => {
			const rawResponse = await fetch(endpoints.database + '/auth', {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(user)
			});
			const content = await rawResponse.json();
			loginResponse = content;
			console.log(loginResponse);
			if (loginResponse.hasOwnProperty('access_token')) {
				const Response = await fetch(endpoints.database + '/user/info', {
					method: 'GET',
					headers: {
						Accept: 'application/json',
						Authorization: 'JWT ' + loginResponse.access_token,
						'Content-Type': 'application/json'
					}
				});
				try {
					let response = await Response.json();
					let UserInfo = response;
					let newUser = false;
					if (UserInfo.hasOwnProperty('message')) {
						newUser = true;
					}

					console.log(response);
					currentUser.set({
						id: UserInfo.user_id,
						username: user.username,
						token: loginResponse.access_token,
						loggedIn: true,
						photo: 'https://i.ibb.co/f0rM4vQ/person.jpg',
						newUser: newUser
					});
					//Since user has no information send them to answer questions
					if (newUser) {
						goto('/questions');
					} else {
						setPersonalDetails(UserInfo);
						setUniversityDetails(UserInfo);
						setInterestDetails(UserInfo);
						setSocialDetails(UserInfo);
						goto('/dashboard');
					}
				} catch (error) {
					console.error(error);
				}
			} else {
				error = true;
			}
		})();
	}
</script>

<!-- conditional rendering -->
<div class="card">
	<h3 class="font-semibold text-3xl">Login</h3>
	<input class="input" type="text" bind:value={$name.value} placeholder="Enter Name" />
	{#if $myForm.hasError('name.required')}
		<div class="error">Name is required</div>
	{/if}
	<input class="input" type="password" bind:value={$password.value} placeholder="Password" />
	{#if $myForm.hasError('password.required')}
		<div class="error">Password is required</div>
	{/if}
	{#if error}
		<p>Invalid Credentials</p>
	{/if}
	<button class="action-btn" on:click={validate}>Login</button>
</div>

<style>
</style>
