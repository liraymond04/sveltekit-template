// TODO
//
// This is backend page load for a dynamic route (see https://svelte.dev/docs/kit/routing)
//
// What might we want to use a dynamic route for?
//
import { json, type RequestHandler } from "@sveltejs/kit"

export const GET: RequestHandler = async ({ params }) => {
  const id = parseInt(params?.id || '0');
  return json({ success: true }, { status: 200 })
}
