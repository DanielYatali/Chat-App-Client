<script>
	import { goto } from '$app/navigation';

	import { form, field } from 'svelte-forms';
	import { required } from 'svelte-forms/validators';
	import currentUser from '../stores/userDataStore';

	import { endpoints } from '$lib/endpoints';
	export let populateStores;

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
			localStorage.setItem('access_token', 'JWT ' + loginResponse.access_token);
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
						photo: UserInfo.photo,
						newUser: newUser
					});
					//Since user has no information send them to answer questions
					if (newUser) {
						$currentUser.photo = 'https://i.ibb.co/f0rM4vQ/person.jpg';
						goto('/questions');
					} else {
						populateStores(UserInfo);
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
