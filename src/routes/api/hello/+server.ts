// TODO
//
// This is an example backend API route
//
// What kind of services might we want an API route for?
//
// Do we need our route to take in any extra parameters?
//
// Is there a difference between a GET and POST RequestHandler
// for our use cases?
//
import type { RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = async () => {
  return new Response('Hello from the API!');
}
