// Import the functions you need from the SDKs you need
import { memoize } from 'lodash';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyC_UMni0U3jBJJ4VZEZtuGhHveffKbQDyA',
	authDomain: 'svelte-examples.firebaseapp.com',
	projectId: 'svelte-examples',
	storageBucket: 'svelte-examples.appspot.com',
	messagingSenderId: '918304336401',
	appId: '1:918304336401:web:aa984db8c26e706eb0dfb0',
	measurementId: 'G-K2FDD80558'
};

// Initialize Firebase
export const initFirebase = memoize(() => {
	const app = initializeApp(firebaseConfig);
	const analytics = getAnalytics(app);
	const auth = getAuth(app);

	return { app, analytics, auth };
});
