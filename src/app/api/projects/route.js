import { backendFetch } from "../../lib/backend";

export async function GET() {
  const res = await backendFetch("/projects");

  const data = await res.json();

  return Response.json(data);
}