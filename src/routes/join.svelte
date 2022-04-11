<script>
	import { goto } from '$app/navigation';

	import { onMount } from 'svelte';

	import { get } from 'svelte/store';
	import currentUser from '../stores/userDataStore';

	import PersonalDetails from '../stores/personalDetailsStore';
	import UniversityDetails from '../stores/universityDetailsStore';
	import InterestDetails from '../stores/interestStore';
	import SocialDetails from '../stores/socialStore';

	let User = {};
	onMount(() => {
		User = get(currentUser);
		//enable this after testing
		// if (!User.loggedIn) {
		// 	goto('/');
		// }
	});
	const Rooms = ['Room-1', 'Room-2', 'Room-3', 'Room-4'];
	let selected = 'Room-1';
	const handleSelect = () => {
		goto(`/chat/${selected}`);
	};
	let userDetails = {
		personalDetails: get(PersonalDetails),
		universityDetails: get(UniversityDetails),
		interestDetails: get(InterestDetails),
		socialDetails: get(SocialDetails)
	};
</script>

<h1>Welcome {User.username}</h1>
<h2>Tell us about yourself {User.username}</h2>
<select bind:value={selected} on:change={handleSelect}>
	{#each Rooms as room}
		<!-- content here -->
		<option value={room}>
			{room}
		</option>
	{/each}
</select>
<br />
<br />
<h1>Selected room is : {selected}</h1>
<!-- <h1>{userDetails}</h1> -->
<h1>{JSON.stringify(userDetails, null, '\t')}</h1>

<a class="text-4xl hover:text-5xl text-red-500" href="/questions">Go to Questions</a>
