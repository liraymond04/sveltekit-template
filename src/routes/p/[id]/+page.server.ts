import { db } from "$lib/server/db";
import { posts } from "$lib/server/db/schema";
import { eq } from "drizzle-orm";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params }) => {
  const id = parseInt(params?.id || '0');

  const result = await db.select().from(posts).where(eq(posts.id, id))

  return {
    post: result[0]
  }
}
