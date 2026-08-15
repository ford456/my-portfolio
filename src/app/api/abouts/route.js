import { backendFetch } from "../../lib/backend";

export async function GET() {
  const res = await backendFetch("/api/about");

  const data = await res.json();

  return Response.json(data);
}
