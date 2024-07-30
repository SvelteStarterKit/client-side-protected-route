import { goto } from '$app/navigation';
import { clearUserToken } from '$lib/auth';
import type { LayoutLoad } from './$types';

export const ssr = false;

export const load: LayoutLoad = async ({ fetch }) => {
	const token = localStorage.getItem('token');
	if (!token) {
		goto('/login');
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
	return {};
};
