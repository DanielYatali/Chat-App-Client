<script>
	import Nav from '../components/nav.svelte';
</script>

<div
	style="height: 100vh; width:100vw"
	class="md:bg-[url('https://i.imgur.com/0CUwW1S.jpeg')] bg-cover bg-no-repeat  bg-[url('https://i.ibb.co/3M25jJq/Promo-Instagram-Instagram-reels.jpg')]"
>
	<div>
		<Nav />
	</div>

	<!-- This example requires Tailwind CSS v2.0+ -->
	<div>
		<!-- <div class="relative overflow-hidden"> -->
		<!--
		Mobile menu, show/hide based on menu open state.
		
		Entering: "duration-150 ease-out"
		From: "opacity-0 scale-95"
		To: "opacity-100 scale-100"
		Leaving: "duration-100 ease-in"
		From: "opacity-100 scale-100"
		To: "opacity-0 scale-95"
	-->

		<main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
			<div class="sm:text-center lg:text-left">
				<h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
					<span class="block xl:inline">For Students ...</span>
					<span class="block text-indigo-600 xl:inline">By Students</span>
				</h1>
				<p
					class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
				>
					Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
					Elit sunt amet fugiat veniam occaecat fugiat aliqua.
				</p>
				<div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
					<div class="rounded-md shadow">
						<a
							href="/login"
							class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
						>
							Login
						</a>
					</div>
					<div class="mt-3 sm:mt-0 sm:ml-3">
						<a
							href="/signup"
							class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
						>
							SignUp
						</a>
					</div>
				</div>
			</div>
		</main>
	</div>
</div>

<svelte:head>
	<style>
	</style>
</svelte:head>
