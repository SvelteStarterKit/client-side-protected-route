<script lang="ts">
	import { clearUserToken } from '$lib/auth';
</script>

<div>
	<h2>PROTECTED ROUTE</h2>
	<br />
	<button on:click={clearUserToken}>Logout</button>
</div>
