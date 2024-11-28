import { userAuth } from '$lib/auth.svelte.js';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	const response = await fetch('/api/401');
	if (response.status === 401) {
		userAuth.clear();
	}
	return {};
};
