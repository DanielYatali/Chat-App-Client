<script>
	import { goto } from '$app/navigation';

	import { onMount } from 'svelte';

	const questions = {
		0: {
			question: 'What Faculty do you belong too?',
			answers: [
				'Engineering',
				'Food & Agriculture',
				'Humanities and Education',
				'Law',
				'Medical Sciences',
				'Science & Technology',
				'Social Sciences'
			]
		},
		1: {
			question: 'What is you Major?',
			answers: [
				'IT/Computer Science',
				'Mathematics',
				'Bio/Chem/Physics',
				'Law',
				'Phycology',
				'Business',
				'Physical Education'
			]
		},
		2: {
			question: 'What type of movies/Tv shows do you like to watch?',
			answers: ['Horror', 'Action', 'Romance', 'Comedy', 'Animation']
		},
		3: {
			question: 'What type of music do you like?',
			answers: ['Dancehall', 'Soca', 'Pop', 'Classical', 'I like everything', 'I hate music']
		},
		4: {
			question: 'What are Hobbies?'
		},
		5: {
			question: 'Socials?',
			answers: ['Facebook', 'Twitter', 'Instagram', 'Discord', 'TikTok', 'Steam']
		}
	};
	let question = {};
	let answers = [];
	let questionNumber = 1;
	let choice = '';
	let interest = {};
	onMount(() => {
		question = questions[0].question;
		answers = questions[0].answers;
	});
	const nextQuestion = () => {
		if (questionNumber == 6) {
			goto('/join');
		}
		question = questions[questionNumber].question;
		answers = questions[questionNumber].answers;
		questionNumber += 1;
	};
</script>

<p>{question}</p>
{#if question == questions[4].question}
	<input bind:value={choice} type="text" placeholder="enter your hobbies" />
	<button on:click|preventDefault={nextQuestion}>Submit</button>
{:else}
	<!-- else content here -->
	{#each answers as answer}
		<button on:click|preventDefault={nextQuestion}>{answer} </button>
		<br />
	{/each}
{/if}

<!-- {#each { length: 3 } as _, i} -->
<!-- <li>{i + 1}</li> -->
<!-- {/each} -->
<!-- <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded cream-msg">
	<div class="container flex flex-wrap justify-between items-center mx-auto">
		<a href="/" class="flex items-center">
			<img src="https://i.ibb.co/LZqx3jx/image.png" class="mr-3 h-9 sm:h-12" alt="logo" />
		</a>
		<button
			data-collapse-toggle="mobile-menu"
			type="button"
			class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
			aria-controls="mobile-menu"
			aria-expanded="false"
		>
			<span class="sr-only">Open main menu</span>
			<svg
				class="w-6 h-6"
				fill="currentColor"
				viewBox="0 0 20 20"
				xmlns="http://www.w3.org/2000/svg"
				><path
					fill-rule="evenodd"
					d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
					clip-rule="evenodd"
				/></svg
			>
			<svg
				class="hidden w-6 h-6"
				fill="currentColor"
				viewBox="0 0 20 20"
				xmlns="http://www.w3.org/2000/svg"
				><path
					fill-rule="evenodd"
					d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
					clip-rule="evenodd"
				/></svg
			>
		</button>
		<div class="hidden w-full md:block md:w-auto" id="mobile-menu">
			<ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
				<li>
					<a
						href=".login"
						class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
						aria-current="page">Login</a
					>
				</li>
				<li>
					<a
						href="/signup"
						class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
						>Sign Up</a
					>
				</li>
				<li>
					<a
						href="/about"
						class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
						>About</a
					>
				</li>
			</ul>
		</div>
	</div>
</nav> -->

<!-- 
	<div class="w-screen p-6">
		<div
		class=" flex flex-col md:flex-row p-4 rounded-3xl bg-white drop-shadow-2xl shadow-slate-700 h-auto"
		>
		<div class=" bg-red-500 w-full p-2">
			<img
				class="h-full object-fill"
				src="https://images.unsplash.com/photo-1513258496099-48168024aec0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
				alt="student"
			/>
		</div>
		<!-- <div class="flex flex-row gap-3 text-2xl">
			<h1>←</h1>
			<div>Tell us about yourself</div>
			<h1 class="underline">Interests</h1>
		</div> -->
<!-- <div class="h-80 bg-green-200">
			<div class="question text-center text-2xl">What is your hobby?</div>
			<div class="grid grid-cols-2 gap-5 p-5">
				<div class="bg-green-100 text-green-500 text-lg font-bold text-center p-10 rounded-lg">
					Eating
				</div>
				<div class="bg-green-100 text-green-500 text-lg font-bold text-center p-10 rounded-lg">
					Eating
				</div>
				<div class="bg-green-100 text-green-500 text-lg font-bold text-center p-10 rounded-lg">
					Eating
				</div>
				<div class="bg-green-100 text-green-500 text-lg font-bold text-center p-10 rounded-lg">
					Eating
				</div>
			</div>
		</div>
	</div>
</div> -->

<svelte:head>
	<style>
		body {
			background: #dce7cc;
		}
	</style>
</svelte:head>

<style>
</style>
