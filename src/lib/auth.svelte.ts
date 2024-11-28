function authToken() {
	return {
		get token(): string | null {
			return localStorage.getItem('token') || null;
		},
		set token(value: string) {
			localStorage.setItem('token', value);
		},
		clear() {
			localStorage.removeItem('token');
			window.location.href = '/login';
		}
	};
}

export const userAuth = authToken();
