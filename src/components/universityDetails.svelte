<script>
	const faculties = [
		'Engineering',
		'Food & Agriculture',
		'Humanities and Education',
		'Law',
		'Medical Sciences',
		'Science & Technology',
		'Social Sciences'
	];
	const majors = ['Computer Science', 'Information Technology', 'Mathematics'];
</script>

<div class="sm:mt-0">
	<div class="md:grid md:gap-6">
		<div class="md:col-span-1">
			<div class="px-4 sm:px-0">
				<h3 class="text-lg font-medium leading-6 text-gray-900">University Details</h3>
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
									>What University do you attend?</legend
								>
							</div>
							<div class="col-span-6 sm:col-span-3">
								<label for="first-name" class="block text-sm font-medium text-gray-700"
									>University name</label
								>
								<input
									type="text"
									name="first-name"
									id="first-name"
									autocomplete="given-name"
									class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
								/>
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
									>What faculty do you belong to?</legend
								>
							</div>
							<div class="mt-4 space-y-4">
								{#each faculties as faculty}
									<div class="flex items-center">
										<input
											id="push-everything"
											name="push-notifications"
											type="radio"
											class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
										/>
										<label
											for="push-everything"
											class="ml-3 block text-sm font-medium text-gray-700"
										>
											{faculty}
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
									>What Major are you pursuing?</legend
								>
							</div>
							<div class="mt-4 space-y-4">
								<div class="col-span-6 sm:col-span-3">
									<label for="country" class="block text-sm font-medium text-gray-700"
										>Major in:</label
									>
									<select
										id="Major"
										name="Major"
										autocomplete="Major-name"
										class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
									>
										{#each majors as major}
											<option>{major}</option>
										{/each}
									</select>
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
			</form>
		</div>
	</div>
</div>
