import { FIREBASE_ADMIN_SDK_KEY } from '$env/static/private';
import admin from 'firebase-admin';
import type { DecodedIdToken } from 'firebase-admin/lib/auth/token-verifier';

const initializeFirebase = () => {
	if (!admin.apps.length) {
		const serviceAccount = JSON.parse(FIREBASE_ADMIN_SDK_KEY);
		admin.initializeApp({
			credential: admin.credential.cert(serviceAccount)
		});
	}
};

export async function decodeToken(token: string): Promise<DecodedIdToken | null> {
	if (!token) {
		return null;
	}

	try {
		initializeFirebase();

		return await admin.auth().verifyIdToken(token);
	} catch (err) {
		console.error('An error occurred validating token', (err as Error).message);
		return null;
	}
}
