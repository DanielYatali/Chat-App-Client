<script>
	export let chat;
</script>

<li
	class="flex justify-between items-center bg-white mt-2 p-2 hover:shadow-lg rounded cursor-pointer transition"
>
	<div class="flex ml-2">
		<img src={chat.photo} width="40" height="40" class="rounded-full" alt="profile" />
		<div class="flex flex-col ml-2">
			<span class="font-medium text-black">{chat.name}</span>
			<span class="text-sm text-gray-400 truncate w-32">{chat.lastMessage.content}</span>
		</div>
	</div>
	<div class="flex flex-col items-center">
		<span class="text-gray-300">{chat.lastMessage.time}</span>
		<i class="fa fa-star text-green-400" />
	</div>
</li>
