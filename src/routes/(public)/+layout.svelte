<script lang="ts">
	import { page } from '$app/stores';
	import { onDestroy, onMount } from 'svelte';
	import { updateUserToken, userToken } from '$lib/auth';

	const unsubPage = page.subscribe((_) => {
		updateUserToken();
	});

	onMount(() => {
		return userToken.subscribe((value) => {
			if (value !== null) {
				window.location.href = '/';
			}
		});
	});

	onDestroy(() => {
		unsubPage();
	});
</script>

<slot />
