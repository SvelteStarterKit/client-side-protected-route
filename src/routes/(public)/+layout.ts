import { userAuth } from '$lib/auth.svelte.js';
import type { LayoutLoad } from './$types';

export const ssr = false;

export const load: LayoutLoad = async ({ fetch }) => {
	if (userAuth.token) {
		fetch('/api/user', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${userAuth.token}`
			}
		})
			.then((response) => {
				if (!response.ok) {
					userAuth.clear();
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
	return {};
};
