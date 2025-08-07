import { db } from "$lib/server/db";
import { posts } from "$lib/server/db/schema";
import { json, type RequestHandler } from "@sveltejs/kit"
import { eq } from "drizzle-orm";

export const POST: RequestHandler = async ({ request }) => {
  const { id } = await request.json();

  await db.delete(posts).where(eq(posts.id, id));

  return json({ success: true }, { status: 200 });
}
