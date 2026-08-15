import { backendFetch } from "../../lib/backend";
import { NextResponse } from "next/server";

export async function GET() {
  const res = await backendFetch("/api/projects");

  const data = await res.json();

  return Response.json(data);
}

export async function POST(request) {
    try {
        const body = await request.json();

        const { ids } = body;

        if (!Array.isArray(ids)) {
            return NextResponse.json(
                {
                    success: false,
                    message: "ids must be an array",
                },
                { status: 400 }
            );
        }

        const response = await backendFetch(
            '/api/projects',
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                  
                },
                body: JSON.stringify({
                    ids,
                }),
                cache: "no-store",
            }
        );

        const result = await response.json();

        if (!response.ok) {
            console.error("Backend error:", result);

            return NextResponse.json(
                {
                    success: false,
                    message: "Backend error",
                    error: result,
                },
                { status: response.status }
            );
        }

        return NextResponse.json(result);

    } catch (error) {
        console.error("API Route error:", error);

        return NextResponse.json(
            {
                success: false,
                message: "Internal server error",
            },
            { status: 500 }
        );
    }
}