<script lang="ts">
	import { goto } from '$app/navigation';

	let email = '';
	let message = '';

	function formSubmit(event: any) {
		event.preventDefault();
		fetch('/api/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ email })
		})
			.then((response) => {
				if (response.ok) {
					return response.json();
				}
				message = 'Invalid credential';
				throw new Error('Network response was not ok.');
			})
			.then((data) => {
				localStorage.setItem('token', data.token);
				goto('/');
			});
	}
</script>

<div>
	<form method="post" on:submit={formSubmit}>
		<fieldset>
			<label>
				Email
				<input
					type="email"
					bind:value={email}
					name="email"
					placeholder="Email"
					autocomplete="email"
				/>
				<p style="color: red">{message}</p>
			</label>
		</fieldset>

		<input type="submit" value="Login" />
	</form>
</div>
