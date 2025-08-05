import { json, type RequestHandler } from "@sveltejs/kit"

export const GET: RequestHandler = async ({ params }) => {
  const id = parseInt(params?.id || '0');
  return json({ success: true }, { status: 200 })
}
