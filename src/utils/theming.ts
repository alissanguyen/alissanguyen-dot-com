import { SupportedTheme } from "@/types";
import { z } from "zod";

export const THEME_KEY = "alissa_nguyen_com_theme";
export const ThemeSchema = z.enum([SupportedTheme.DARK, SupportedTheme.LIGHT]);
export const isTheme = (maybeTheme: string) =>
  !!ThemeSchema.safeParse(maybeTheme).data;
