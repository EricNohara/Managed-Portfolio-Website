import { IUserData } from "@/app/interfaces/IUserData";
import { NextRequest, NextResponse } from "next/server";

const apiUrl: string = process.env.NEXT_PUBLIC_PORTFOLIO_API_URL;
const apiKey: string = `Bearer ${process.env.PORTFOLIO_PRIVATE_API_KEY}`;

// used to retrieve user data from the portfolio manager
export async function GET(_req: NextRequest) {
  if (!apiUrl || !apiKey) {
    return NextResponse.json(
      { message: "Missing required env variables" },
      { status: 500 }
    );
  }

  try {
    const res = await fetch(apiUrl, {
      method: "GET",
      headers: { Authorization: apiKey },
    });

    const data = await res.json();

    if (!res.ok || !data.userInfo) {
      throw new Error(data.message || "Error loading user data");
    }

    const userData: IUserData = data.userInfo;

    return NextResponse.json({ userData: userData }, { status: 200 });
  } catch (error) {
    const err = error as Error;
    return NextResponse.json({ message: err.message }, { status: 400 });
  }
}
