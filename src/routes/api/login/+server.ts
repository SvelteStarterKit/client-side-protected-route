import { json, error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request }) => {
	const body = await request.json();

	if (body.email === 'admin@example.com' && body.password === 'password') {
		return json({ token: 'dummy-auth-token' });
	}

	error(401, 'Unauthorized');
};

// curl --request POST \
//   --url http://localhost:5175/api/login \
//   --data '{
//   "email": "admin@example.com",
//   "password": "password"
// }'
