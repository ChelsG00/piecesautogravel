import { NextResponse } from "next/server";

export async function GET(req) {
    console.log("Checking authentication...");

    const cookies = req.headers.get("cookie") || "";
    console.log("Cookies:", cookies);

    const authCookie = cookies
        .split("; ")
        .find((row) => row.startsWith("auth_token="))
        ?.split("=")[1];

    console.log("Auth Token:", authCookie);

    if (authCookie === "authenticated") {
        return NextResponse.json({ authenticated: true }, { status: 200 });
    }

    return NextResponse.json({ authenticated: false }, { status: 401 });
}



