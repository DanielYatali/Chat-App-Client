<script>
	let name = "";
    // your script goes here
</script>

    <!-- myelinking logo -->
    <!-- <img src="https://i.ibb.co/LZqx3jx/image.png" class="mr-3 h-9 sm:h-12" alt="logo" /> -->
<div class = "background">
	
	<div class="bg-grey-lighter min-h-screen flex flex-col blur-none">
		<div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
			<div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
				<h1 class="mb-8 text-3xl text-center">Sign Up</h1>
				<input bind:value = {name}
				type="text"
				class="block border border-grey-light w-full p-3 rounded mb-4"
				name="fullname"
				placeholder="Full Name"
				/>
				
				<input
				type="text"
				class="block border border-grey-light w-full p-3 rounded mb-4"
				name="email"
				placeholder="Email"
				/>
				
				<input
				type="password"
				class="block border border-grey-light w-full p-3 rounded mb-4"
				name="password"
				placeholder="Password"
			/>
			<input
			type="password"
			class="block border border-grey-light w-full p-3 rounded mb-4"
			name="confirm_password"
			placeholder="Confirm Password"
			/>
			
			<button
			type="submit"
			class="w-full text-center py-3 rounded bg-blue-500 text-white hover:bg-blue-dark focus:outline-none my-1"
			>Create Account</button
			>
			
			<div class="text-center text-sm text-grey-dark mt-4">
				By signing up, you agree to the
				<a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
					Terms of Service
				</a>
				and
				<a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
					Privacy Policy
				</a>
			</div>
		</div>
		
		<div class="text-grey-dark mt-6">
			Already have an account?
			<a class="no-underline border-b border-blue text-blue" href="/login/"> Log in </a>.
		</div>
	</div>
</div>
</div> 
<!-- <svelte:head> -->
	<!-- <style> -->
		<!-- body { -->
			<!-- /* background: #dce7cc; */ -->
            <!-- /* background-image: url("https://i.ibb.co/LdtX6cG/unknown.png"); */ -->
			<!-- /* background-image: url("https://i.ibb.co/wKr4QVm/logo.png"); */ -->
            <!-- /* background-repeat: no-repeat, repeat; */ -->
            <!-- /* background-attachment: fixed; */ -->
            <!-- /* background-position: center; */ -->
			<!-- /* opacity: 0.5; */ -->
			<!-- /* background-size: contain, cover; */ -->
		<!-- /* } */ -->
<!--  -->
	<!-- /* </style> */ -->
<!-- </svelte:head> -->

<style>
	.background{
		background-image: url("https://i.ibb.co/LdtX6cG/unknown.png");
		background-repeat: no-repeat, repeat;
		background-attachment: fixed;
		background-position: center;
		/* filter: blur(8px);  */
  /*-webkit-filter: blur(8px); */
  
  /* opacity: 0.5; */
	}

    /* your styles go here */
    
</style>
