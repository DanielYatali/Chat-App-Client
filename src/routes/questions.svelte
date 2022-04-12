<script>
	import Nav from '../components/nav.svelte';
	import SideBar from '../components/sideBar.svelte';
	import PersonalDetails from '../components/personalDetails.svelte';
	import UniversityDetails from '../components/universityDetails.svelte';
	import Interests from '../components/interests.svelte';
	import Socials from '../components/socials.svelte';
	import Search from '../components/search.svelte';
	import CurrentQuestion from '../stores/questionStore';
	import { get } from 'svelte/store';
	import PersonalDetailsStore from '../stores/personalDetailsStore';
	let currentQuestions;

	CurrentQuestion.subscribe((value) => {
		currentQuestions = value;
	});

	let userInfo;
</script>

<div class="sticky top-0 w-full">
	<Nav />
</div>

<div class="flex flex-no-wrap">
	<div class="fixed">
		<SideBar />
	</div>
	<div
		style="min-height: 93vh;"
		class="sm:ml-64 container mx-auto py-10 md:w-4/5 w-11/12 px-6 overflow--y-scroll "
	>
		<!-- {userInfo.personalDetails.firstName} -->
		{#if currentQuestions == 'Socials'}
			<Socials />
		{:else if currentQuestions == 'University Details'}
			<UniversityDetails />
		{:else if currentQuestions == 'Interests'}
			<Interests />
		{:else}
			<PersonalDetails />
		{/if}
	</div>
</div>
