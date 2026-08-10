import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    const { slug } = await params;

    try {
        const response = await fetch(
            `${process.env.BACKEND_API_URL}/projects/${slug}`,
            {
                headers: {
                    Authorization: `Bearer ${process.env.BACKEND_API_KEY}`,
                },
                cache: "no-store",
            }
        );

        if (!response.ok) {
            return NextResponse.json(
                { success: false, message: "Backend error" },
                { status: response.status }
            );
        }

        const result = await response.json();

        return NextResponse.json(result);

    } catch (error) {
        console.error(error);

        return NextResponse.json(
            {
                success: false,
                message: "Internal server error",
            },
            { status: 500 }
        );
    }
}