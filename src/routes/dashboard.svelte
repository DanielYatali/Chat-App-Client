<script>
	import Nav from '../components/nav.svelte';
	import DashboardSideBar from '../components/dashboardSideBar.svelte';
	import GroupCard from '../components/groupCard.svelte';
	import CarouselGroupCard from '../components/carouselGroupCard.svelte';
	import CurrentUser from '../stores/userDataStore';
	import { onMount } from 'svelte/internal';
	import { goto } from '$app/navigation';

	onMount(() => {
		if (!$CurrentUser.loggedIn) {
			goto('/login');
		}
	});
</script>

<div class="sticky top-0 w-full z-40">
	<Nav />
</div>

<div class="flex flex-no-wrap">
	<div class="fixed z-30">
		<DashboardSideBar />
	</div>
	<div
		style="min-height: 93vh;"
		class="md:ml-64 xl:ml-80 container mx-auto py-2 sm:py-10 md:w-4/5 w-11/12 px-6 overflow--y-scroll "
	>
		<!-- <div class="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]"> -->
		<div class="">
			<div class="sm:px-6 2xl:container">
				<div class="grid gap-6 xl:grid-cols-3">
					<!-- card 1 -->
					<div>
						<CarouselGroupCard name={'Popular Groups'} />
					</div>
					<div>
						<CarouselGroupCard name={'Suggested Groups'} />
					</div>
					<div>
						<CarouselGroupCard name={'Some other listing'} />
					</div>
					<!-- card 2 -->
				</div>
			</div>
		</div>
	</div>
</div>
