import { db } from "$lib/server/db";
import { posts } from "$lib/server/db/schema";
import { json, type RequestHandler } from "@sveltejs/kit"

export const POST: RequestHandler = async ({ request }) => {
  const { title, content } = await request.json();

  await db.insert(posts).values({ title, content });

  return json({ success: true }, { status: 200 });
}
