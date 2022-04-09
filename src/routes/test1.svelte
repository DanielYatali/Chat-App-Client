<div id="holder" class="bg-red-500">
	<header>.....</header>
	<div id="body">....</div>
	<footer>....</footer>
</div>

<svelte:head>
	<style>
		html,
		body {
			height: 100%;
		}
	</style>
</svelte:head>

<style>
	#holder {
		min-height: 100%;
		position: relative;
	}

	#body {
		padding-bottom: 100px; /* height of footer */
	}

	footer {
		height: 100px;
		width: 100%;
		position: absolute;
		left: 0;
		bottom: 0;
	}
</style>
