import { json, error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ request }) => {
	const auth_header = request.headers.get('authorization');
	if (auth_header === 'Bearer dummy-auth-token') {
		return json({
			firstName: 'Admin',
			lastName: 'User',
			email: 'admin@example.com'
		});
	}

	error(401, 'Unauthorized');
};

// curl --request GET \
//   --url http://localhost:5175/api/user \
//   --header 'Authorization: Bearer dummy-auth-token' \
//   --data '{
//   "email": "admin@example.com"
// }'
