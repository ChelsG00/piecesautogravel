import { NextResponse } from "next/server";

const USERNAME = process.env.NEXT_PUBLIC_LOGIN_USER 
const PASSWORD = process.env.NEXT_PUBLIC_LOGIN_PIN 

export async function POST(req) {
    try {
        const { username, password } = await req.json();

        if (username === USERNAME && password === PASSWORD) {
            // Set an HTTP-only cookie to store authentication status
            const response = NextResponse.json({ success: true });
            response.cookies.set("auth_token", "authenticated", {
                httpOnly: true, 
                // secure: process.env.NODE_ENV === "production",
                minAge: 60 * 60 * 24,
                maxAge: 60 * 60 * 24, // 1 day
                path: "/"
            });
            return response;
        } else {
            return NextResponse.json({ success: false, error: "Invalid credentials" }, { status: 401 });
        }
    } catch (error) {
        return NextResponse.json({ success: false, error: "Server error" }, { status: 500 });
    }
}
