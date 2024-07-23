<script lang="ts">
	import { page } from '$app/stores';
	import { clearUserToken, updateUserToken, userToken } from '$lib/auth';
	import { onDestroy, onMount } from 'svelte';

	const unsubPage = page.subscribe((_) => {
		updateUserToken();
	});

	onMount(() => {
		return userToken.subscribe((token) => {
			if (token === null) {
				clearUserToken();
			} else {
				fetch('/api/user', {
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${token}`
					}
				})
					.then((response) => {
						if (!response.ok) {
							clearUserToken();
						}
						return response.json();
					})
					.then((data) => {
						console.log(data);
					})
					.catch((error) => {
						console.error(error);
					});
			}
		});
	});

	onDestroy(() => {
		unsubPage();
	});
</script>

{#if $userToken}
	<slot />
{/if}
