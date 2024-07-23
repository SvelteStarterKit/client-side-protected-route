import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export const userToken = writable<string | null>(null);

export const updateUserToken = () => {
	browser && userToken.update((_) => localStorage.getItem('token') || null);
};

export const clearUserToken = () => {
	userToken.set(null);
	if (browser) {
		localStorage.removeItem('token');
		window.location.href = '/login';
	}
};
