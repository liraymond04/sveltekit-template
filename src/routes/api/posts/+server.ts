import { db } from "$lib/server/db";
import { posts } from "$lib/server/db/schema";
import { json, type RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = async () => {
  const result = await db
    .select()
    .from(posts)

  return json({ posts: result }, { status: 200 })
}
