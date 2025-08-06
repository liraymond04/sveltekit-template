// TODO
//
// This is backend page load for a dynamic route (see https://svelte.dev/docs/kit/routing)
//
// What might we want to use a dynamic route for?
//
import { json } from "@sveltejs/kit"
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params }) => {
  const id = parseInt(params?.id || '0');

  return {
    id,
  }
}
