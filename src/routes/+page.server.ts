import type { PageServerLoad } from "./p/[id]/$types";

export const load: PageServerLoad = async ({ fetch }) => {
	const response = await fetch('/api/posts');
	const json = await response.json();

	return {
		posts: json.posts
	}
}
