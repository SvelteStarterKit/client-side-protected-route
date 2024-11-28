<script lang="ts">
	import { userAuth } from '$lib/auth.svelte.js';

	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<div>
	<h2>PROTECTED ROUTE</h2>
	<br />
	<p><a href="/">Home</a></p>
	<br />
	<p><a href="/page2">Page2</a></p>
	<br />
	<p><a href="/unauthorized">This page give 401</a></p>
	<br />
	<button onclick={userAuth.clear}>Logout</button>
</div>

{@render children?.()}
