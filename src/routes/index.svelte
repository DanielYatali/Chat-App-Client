<script>
	import { endpoints } from '$lib/endpoints';
	console.log(endpoints);
</script>

<div class="grid place-items-center">
	<h1>{endpoints.database}</h1>
	<h1>This is the home page</h1>

	<form action="/login">
		<input class="hover:cursor-pointer bg-red-400 p-2 rounded-lg" type="submit" value="Login" />
	</form>
	<form action="/signup">
		<input class="hover:cursor-pointer bg-red-400 p-2 rounded-lg" type="submit" value="Signup" />
	</form>
</div>
