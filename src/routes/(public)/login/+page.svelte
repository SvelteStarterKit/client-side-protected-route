<script lang="ts">
	import { goto } from '$app/navigation';

	let email = $state('');
	let password = $state('');
	let message = $state('');

	function formSubmit(event: any) {
		event.preventDefault();
		fetch('/api/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ email, password })
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
	<form method="post" onsubmit={formSubmit}>
		<fieldset>
			<label>
				Email
				<input
					type="email"
					bind:value={email}
					name="email"
					placeholder="admin@example.com"
					autocomplete="email"
				/>
				<p style="color: red">{message}</p>
			</label>

			<label>
				Password
				<input type="password" bind:value={password} name="password" placeholder="password" />
				<p style="color: red">{message}</p>
			</label>
		</fieldset>

		<input type="submit" value="Login" />
	</form>
</div>
