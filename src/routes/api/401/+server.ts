import type { RequestHandler } from './$types';
import { error } from '@sveltejs/kit';

export const GET: RequestHandler = async ({}) => {
	error(401, 'Unauthorized');
};
