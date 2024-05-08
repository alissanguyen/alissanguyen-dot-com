import { SupportedTheme } from "@/types";

const THEME_KEY = "alissa_nguyen_com_theme";

const sessionKey = process.env.NEXT_PUBLIC_SESSION_KEY;
if (!sessionKey) {
  throw new Error("SESSION_KEY must be set");
}

export function getTheme(): SupportedTheme {
  if (typeof window !== "undefined") {
    const storedTheme = localStorage.getItem(THEME_KEY);
    if (isTheme(storedTheme)) {
      return storedTheme;
    }
  }
  return SupportedTheme.LIGHT;
}

export function setTheme(theme: SupportedTheme): void {
  if (typeof window !== "undefined") {
    localStorage.setItem(THEME_KEY, theme);
  }
}

export function isTheme(maybeTheme: unknown): maybeTheme is SupportedTheme {
  return (
    maybeTheme === SupportedTheme.DARK || maybeTheme === SupportedTheme.LIGHT
  );
}
