import { clearUserToken } from '$lib/auth';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	const response = await fetch('/api/401');
	if (response.status === 401) {
		clearUserToken();
	}
	return {};
};
