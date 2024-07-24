<script lang="ts">
	import { clearUserToken } from '$lib/auth';
</script>

<div>
	<h2>PROTECTED ROUTE</h2>
	<br />
	<p><a href="/unauthorized">This page give 401</a></p>
	<br />
	<button on:click={clearUserToken}>Logout</button>
</div>
