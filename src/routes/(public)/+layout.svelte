<script lang="ts">
	import { page } from '$app/stores';
	import { onDestroy, onMount } from 'svelte';
	import { updateUserToken, userToken } from '$lib/auth';

	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();

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

{@render children?.()}
