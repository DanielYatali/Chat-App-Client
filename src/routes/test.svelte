<script>
	let hidden = 'none';
	const toggle = () => {
		hidden = hidden === 'none' ? 'block' : 'none';
	};
</script>

<button
	on:click={toggle}
	type="button"
	class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
	aria-controls="mobile-menu"
	aria-expanded="false"
>
	<span class="sr-only">Open main menu</span>
	<!--
            Icon when menu is closed.

            Heroicon name: outline/menu

            Menu open: "hidden", Menu closed: "block"
          -->
	<svg
		class="block h-6 w-6"
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		stroke="currentColor"
		aria-hidden="true"
	>
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			d="M4 6h16M4 12h16M4 18h16"
		/>
	</svg>
	<!--
            Icon when menu is open.

            Heroicon name: outline/x

            Menu open: "block", Menu closed: "hidden"
          -->
	<svg
		class="hidden h-6 w-6"
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		stroke="currentColor"
		aria-hidden="true"
	>
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			d="M6 18L18 6M6 6l12 12"
		/>
	</svg>
</button>

<div class="hidden sm:block sm:ml-6">
	<div class="flex space-x-4">
		<!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
		<a
			href="#"
			class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
			aria-current="page">Dashboard</a
		>

		<a
			href="#"
			class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
			>Team</a
		>

		<a
			href="#"
			class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
			>Projects</a
		>

		<a
			href="#"
			class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
			>Calendar</a
		>
	</div>
</div>

<div style="display: {hidden};">
	<div class="px-2 pt-2 pb-3 space-y-1">
		<!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
		<a
			href="#"
			class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
			aria-current="page">Dashboard</a
		>

		<a
			href="#"
			class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
			>Team</a
		>

		<a
			href="#"
			class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
			>Projects</a
		>

		<a
			href="#"
			class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
			>Calendar</a
		>
	</div>
</div>

<style></style>
