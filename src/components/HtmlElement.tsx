'use client'

import { useTheme } from "@/providers/ThemeProvider";
import * as React from 'react'
import { SupportedTheme } from "@/types";
import { usePathname } from "next/navigation";

interface Props {
    initialTheme: SupportedTheme
}

export const HtmlElement = (props: React.PropsWithChildren<Props>) => {
    const { theme } = useTheme()
    const pathname = usePathname()
    const isBlogRoute = pathname === "/blog"
    const isSlugRoute = pathname.startsWith("/blog/")

    return (
        <html
            lang="en"
            className={convertSupportedThemeToClassName(theme, isBlogRoute, isSlugRoute)}
        >
            {props.children}
        </html>
    )
}

const convertSupportedThemeToClassName = (
    theme: SupportedTheme,
    onBlogRoute: boolean,
    onSlugRoute: boolean
): string => {

    if (theme === SupportedTheme.LIGHT) {
        if (!onBlogRoute && !onSlugRoute) {
            return 'light-theme';
        } else if (onBlogRoute) {
            return 'light-theme light-theme-blog';
        } else if (onSlugRoute) {
            return 'light-theme light-theme-blog';
        }
    } else {
        if (!onBlogRoute && !onSlugRoute) {
            return 'dark-theme';
        } else if (onBlogRoute) {
            return 'dark-theme dark-theme-blog';
        } else if (onSlugRoute) {
            return 'dark-theme dark-theme-slug';
        }
    }
    return 'dark-theme'; 
};

