<script>
	import { goto } from '$app/navigation';

	import { onMount } from 'svelte';
	import { get } from 'svelte/store';

	import currentUser from '../stores/userDataStore.js';
	import PersonalDetails from '../stores/personalDetailsStore';
	import UniversityDetails from '../stores/universityDetailsStore';
	import InterestDetails from '../stores/interestStore';

	import SocialDetails from '../stores/socialStore';
	import { endpoints } from '$lib/endpoints.js';
	const socials = ['Instagram', 'Tik Tok', 'Snapchat', 'Twitter', 'Steam', 'Discord', 'Whatsapp'];
	let currentSocials = {
		Instagram: '',
		'Tik Tok': '',
		Snapchat: '',
		Twitter: '',
		Steam: '',
		Discord: '',
		Whatsapp: ''
	};
	let user = {};
	onMount(() => {
		user = get(currentUser);
		let socialDeatails = get(SocialDetails);
		currentSocials.Instagram = socialDeatails.instagram;
		currentSocials['Tik Tok'] = socialDeatails.instagram;
		currentSocials.Snapchat = socialDeatails.snapChat;
		currentSocials.Twitter = socialDeatails.twitter;
		currentSocials.Steam = socialDeatails.steam;
		currentSocials.Discord = socialDeatails.discord;
		currentSocials.Whatsapp = socialDeatails.whatsapp;
	});
	const saveInfo = () => {
		SocialDetails.set({
			instagram: currentSocials.Instagram,
			tikTok: currentSocials['Tik Tok'],
			snapChat: currentSocials.Snapchat,
			twitter: currentSocials.Twitter,
			steam: currentSocials.Steam,
			discord: currentSocials.Discord,
			whatsapp: currentSocials.Whatsapp
		});
		// console.log(currentSocials);
	};

	const saveAllInfo = (route) => {
		let personalDetails = get(PersonalDetails);
		let universityDetails = get(UniversityDetails);
		let interestDetails = get(InterestDetails);
		let socialDetails = get(SocialDetails);
		console.log(interestDetails);

		let userDetails = {
			user_id: user.id,
			first_name: personalDetails.firstName,
			last_name: personalDetails.lastName,
			email: personalDetails.email,
			country: personalDetails.country,
			city: personalDetails.city,
			about: personalDetails.about,
			university: universityDetails.universityName,
			faculty: universityDetails.faculty,
			major: universityDetails.major,
			photo: 'link',
			movie: interestDetails.movie,
			music: interestDetails.music,
			staying_in: interestDetails.stayingIn,
			sport: interestDetails.sport,
			bot: 'human',
			other_info: {
				socials: {
					instagram: socialDetails.instagram,
					twitter: socialDetails.twitter,
					discord: socialDetails.discord,
					snapchat: socialDetails.snapChat,
					whatsapp: socialDetails.whatsapp,
					steam: socialDetails.steam,
					tiktok: socialDetails.tikTok
				}
			}
		};
		console.log(JSON.stringify(userDetails));
		(async () => {
			const rawResponse = await fetch(endpoints.database + '/user/create/update_info', {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					Authorization: 'JWT ' + user.token,
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(userDetails)
			});
			try {
				let reponse = await rawResponse.json();
				let User = get(currentUser);
				User.newUser = false;
				currentUser.set(User);
				goto(`/${route}`);
			} catch (error) {
				console.error(error);
			}
		})();
	};
</script>

<div class="w-full h-full">
	<div class="mt-0">
		<div class="md:grid md:gap-6">
			<div class="md:col-span-1">
				<div class="px-4 sm:px-0">
					<h3 class="text-lg font-medium leading-6 text-gray-900">Social Details (Optional)</h3>
					<p class="mt-1 text-sm text-gray-600">This information is visible to all users.</p>
				</div>
			</div>
			<div class="mt-5 md:mt-0 md:col-span-2">
				<form action="#" method="POST">
					<div class="shadow overflow-hidden sm:rounded-md">
						<div class="px-4 py-5 bg-white sm:p-6">
							{#each socials as social}
								<!-- content here -->
								<div class="grid grid-cols-3 gap-6">
									<div class="col-span-3 sm:col-span-2">
										<label for="company-website" class="block text-sm font-medium text-gray-700">
											{social}
										</label>
										<div class="mt-1 flex rounded-md shadow-sm">
											<span
												class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm"
											>
												http://
											</span>
											<input
												bind:value={currentSocials[social]}
												type="text"
												name={social}
												id={social}
												class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
												placeholder="www.example.com"
											/>
										</div>
									</div>
								</div>
								<br />
							{/each}
						</div>
						<div class="px-4 py-3 bg-gray-50 text-right sm:px-6 flex justify-end gap-6">
							<button
								on:click|preventDefault={saveInfo}
								type="submit"
								class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
								>Save</button
							>
							{#if !user.newUser}
								<button
									on:click|preventDefault={() => saveAllInfo('dashboard')}
									type="submit"
									class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
									>Update</button
								>
							{/if}
							<button
								on:click|preventDefault={() => saveAllInfo('match')}
								type="submit"
								class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
								>Get Matches</button
							>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
</div>
