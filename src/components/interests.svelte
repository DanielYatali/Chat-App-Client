<script>
	const sports = [
		'Football',
		'Cricket',
		'BasketBall',
		'Tennis',
		'I do not like sports',
		'My sport is not here'
	];
	const movies = ['Horror', 'Action', 'Romance', 'Comdey', 'Animation'];
	const musics = ['Dancehall', 'Soca', 'Pop', 'Clasical', 'I like everything', 'I hate music'];
</script>

<div class="sm:mt-0">
	<div class="md:grid md:gap-6">
		<div class="md:col-span-1">
			<div class="px-4 sm:px-0">
				<h3 class="text-lg font-medium leading-6 text-gray-900">Interests Details</h3>
				<p class="mt-1 text-sm text-gray-600">This information will be visible to all users</p>
			</div>
		</div>
		<div class="mt-5 md:mt-0 md:col-span-2">
			<form action="#" method="POST">
				<div class="shadow overflow-hidden sm:rounded-md">
					<div class="px-4 py-5 bg-white space-y-6 sm:p-6">
						<fieldset>
							<div>
								<legend class="text-base font-medium text-gray-900"
									>Do you prefer out or staying in?</legend
								>
							</div>
							<div class="mt-4 space-y-4">
								<div class="flex items-center">
									<input
										id="staying-in"
										name="staying-in"
										type="radio"
										class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
									/>
									<label for="staying-in" class="ml-3 block text-sm font-medium text-gray-700"
										>Yes
									</label>
								</div>

								<div class="flex items-center">
									<input
										id="staying-in"
										name="staying-in"
										type="radio"
										class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
									/>
									<label for="staying-in" class="ml-3 block text-sm font-medium text-gray-700"
										>No
									</label>
								</div>
							</div>
						</fieldset>
					</div>
					<div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
						<button
							type="submit"
							class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
							>Save</button
						>
					</div>
				</div>
				<div class="hidden sm:block" aria-hidden="true">
					<div class="py-5">
						<div class="border-t border-gray-200" />
					</div>
				</div>

				<div class="shadow overflow-hidden sm:rounded-md">
					<div class="px-4 py-5 bg-white space-y-6 sm:p-6">
						<fieldset>
							<div>
								<legend class="text-base font-medium text-gray-900"
									>Does any sport interest you?</legend
								>
							</div>
							<div class="mt-4 space-y-4">
								{#each sports as sport}
									<div class="flex items-center">
										<input
											id="sport"
											name="sport"
											type="radio"
											class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
										/>
										<label for="sport" class="ml-3 block text-sm font-medium text-gray-700">
											{sport}
										</label>
									</div>
								{/each}
							</div>
						</fieldset>
					</div>
					<div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
						<button
							type="submit"
							class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
							>Save</button
						>
					</div>
				</div>
				<div class="hidden sm:block" aria-hidden="true">
					<div class="py-5">
						<div class="border-t border-gray-200" />
					</div>
				</div>

				<div class="shadow overflow-hidden sm:rounded-md">
					<div class="px-4 py-5 bg-white space-y-6 sm:p-6">
						<fieldset>
							<div>
								<legend class="text-base font-medium text-gray-900"
									>What type of movies/Tv shows do you like to watch?</legend
								>
							</div>
							<div class="mt-4 space-y-4">
								{#each movies as movie}
									<div class="flex items-center">
										<input
											id="movie"
											name="movie"
											type="radio"
											class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
										/>
										<label for="movie" class="ml-3 block text-sm font-medium text-gray-700">
											{movie}
										</label>
									</div>
								{/each}
							</div>
						</fieldset>
					</div>
					<div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
						<button
							type="submit"
							class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
							>Save</button
						>
					</div>
				</div>
				<div class="hidden sm:block" aria-hidden="true">
					<div class="py-5">
						<div class="border-t border-gray-200" />
					</div>
				</div>

				<div class="shadow overflow-hidden sm:rounded-md">
					<div class="px-4 py-5 bg-white space-y-6 sm:p-6">
						<fieldset>
							<div>
								<legend class="text-base font-medium text-gray-900"
									>What type of music do you listen to?</legend
								>
							</div>
							<div class="mt-4 space-y-4">
								{#each musics as music}
									<div class="flex items-center">
										<input
											id="music"
											name="music"
											type="radio"
											class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
										/>
										<label for="music" class="ml-3 block text-sm font-medium text-gray-700">
											{music}
										</label>
									</div>
								{/each}
							</div>
						</fieldset>
					</div>
					<div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
						<button
							type="submit"
							class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
							>Save</button
						>
					</div>
				</div>
			</form>
		</div>
	</div>
</div>
