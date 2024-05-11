'use client'

import { useTheme } from "@/providers/ThemeProvider";
import * as React from 'react'
import { SupportedTheme } from "@/types";

interface Props {
    initialTheme: SupportedTheme
}

export const HtmlElement = (props: React.PropsWithChildren<Props>) => {
    const { theme } = useTheme()

    return (
        <html
            lang="en"
            className={convertSupportedThemeToClassName(theme, true)}
        >
            {props.children}
        </html>
    )
}

const convertSupportedThemeToClassName = (
    theme: SupportedTheme,
    onBlogRoute: boolean
): string => {
    if (theme === SupportedTheme.LIGHT) {
        if (onBlogRoute) {
            return 'light-theme light-theme-blog';
        }
        return 'light-theme';
    } else {
        if (onBlogRoute) {
            return 'dark-theme dark-theme-blog';
        }
        return 'dark-theme';
    }
};