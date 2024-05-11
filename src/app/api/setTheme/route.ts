import { isTheme, THEME_KEY } from "@/utils/theming";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { theme } = await request.json();

  if (!isTheme(theme)) {
    return NextResponse.json(
      {
        success: false,
        message: `theme value of ${theme} is not a valid theme`
      },
      { status: 400 }
    );
  }

  const response = NextResponse.json({ success: true });
  cookies().set(THEME_KEY, theme);

  return response;
}

export async function GET(request: Request) {
  return NextResponse.json(
    { success: false, message: "Not found" },
    { status: 404 }
  );
}
