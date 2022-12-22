import { writable } from 'svelte/store';

type User = {
	uid: string;
	email: string | null;
};

export const auth = writable<User | null>(null);
