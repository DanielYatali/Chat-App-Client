<script>
	import GroupCard from './groupCard.svelte';
	export let name;
</script>

<div class="md:col-span-1 lg:col-span-1">
	<div class="h-full py-3 sm:py-8 sm:px-6 rounded-xl  bg-white">
		<div class="bg-gray-300 p-3 shadow-lg rounded-t-lg">
			<h5 class="text-xl text-gray-600 text-center">{name}</h5>
		</div>

		<div>
			<div id="controls-carousel" class="relative" data-carousel="static">
				<div>
					<GroupCard />
					<!-- <div
											class="duration-700 ease-in-out absolute inset-0 transition-all transform -translate-x-full z-10"
											data-carousel-item=""
										>
											<img
												src="/docs/images/carousel/carousel-1.svg"
												class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
												alt="..."
											/>
										</div> -->
				</div>

				<button
					type="button"
					class="flex absolute top-0 left-0 z-20 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
					data-carousel-prev=""
				>
					<span
						class="inline-flex justify-center items-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
					>
						<svg
							class="w-6 h-6 text-white dark:text-gray-800"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
							><path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M15 19l-7-7 7-7"
							/></svg
						>
						<span class="hidden">Previous</span>
					</span>
				</button>
				<button
					type="button"
					class="flex absolute top-0 right-0 z-20 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
					data-carousel-next=""
				>
					<span
						class="inline-flex justify-center items-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
					>
						<svg
							class="w-6 h-6 text-white dark:text-gray-800"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
							><path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M9 5l7 7-7 7"
							/></svg
						>
						<span class="hidden">Next</span>
					</span>
				</button>
			</div>
		</div>
	</div>
</div>
