// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	// interface Error {}
	interface Locals {
		user: null | {
			uid: string;
			email?: string;
		};
	}
	// interface PageData {}
	// interface Platform {}
}
