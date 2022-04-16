<script>
	import { onMount } from 'svelte';
	import { get } from 'svelte/store';

	import PersonalDetails from '../stores/personalDetailsStore';
	import CurrentUser from '../stores/userDataStore';
	let userInfo = { firstName: '', lastName: '' };
	let photo;
	let user;
	PersonalDetails.subscribe((value) => {
		userInfo = value;
	});
	CurrentUser.subscribe((value) => {
		user = value;
	});
	onMount(() => {
		// user = get(CurrentUser);
		// photo = user.photo;
		if (userInfo.firstName == '') {
			userInfo = { firstName: 'Not Logged', lastName: 'In' };
		}
	});
</script>

<div class="mt-8 text-center">
	<img src={user.photo} alt="" class="w-24 h-24 m-auto rounded-full object-cover lg:w-28 lg:h-28" />
	<h5 class="mt-4 text-xl font-semibold text-gray-600 lg:block">
		{userInfo.firstName}
		&nbsp;
		{userInfo.lastName}
	</h5>
	<!-- <span class="hidden text-gray-400 lg:block">Admin</span> -->
</div>
