import { redirect as svelteRedirect } from '@sveltejs/kit';

export function load() {
    throw svelteRedirect(307, '/app/home');
}