import { SESSION_COOKIE_NAME } from '$lib/constants';
import type { RequestHandler } from '@sveltejs/kit';
import cookie from 'cookie';

export const POST = (async () => {
	return new Response('', {
		headers: {
			'set-cookie': cookie.serialize(SESSION_COOKIE_NAME, '', {
				path: '/',
				httpOnly: true,
				maxAge: -1
			})
		}
	});
}) satisfies RequestHandler;
