import Footer from '@/components/Footer/Footer';
import { HtmlElement } from '@/components/HtmlElement';
import NavBar from '@/components/NavBar/NavBar';
import { ModalContextProvider } from '@/providers/ModalProvider';
import { Metadata } from 'next';
import React from 'react';
import "../styles/globals.css";
import { cookies } from 'next/headers';
import { THEME_KEY, ThemeSchema } from '@/utils/theming';
import { SupportedTheme } from '@/types';
import { ThemeContextProvider } from '@/providers/ThemeProvider';

export const WEBSITE_KEYWORDS =
  "Learn Remix, React, JavaScript, Typescript, Alissa Nguyen Blog, Alissa Nguyen, Software Development, Software Engineer, Modern Programing, Frontend Engineer, Web Developer, AlissaNguyen, Seattle, Full-stack developer, Web development, Software engineering, Programming languages, Responsive web design, User experience (UX), User interface (UI), Front-end development, Back-end development, Web applications, Mobile-friendly websites.";

const WEBSITE_DESCRIPTION =
  "Hi, I'm Alissa. I'm a software engineer in Seattle with expertise in creating innovative and user-friendly web applications. I deliver high-quality, responsive websites that prioritize user experience. I enjoy building software with elegant, performant, and maintainable frontend code.";

const WEBSITE_URL = "https://www.alissanguyen.com/";
const PORTFOLIO_WEBSITE_NAME = "Alissa Nguyen";

const IMAGE_WIDTH = "1200";
const IMAGE_HEIGHT = "630";
const TWITTER_ACC = "@ai_alissa";
const TWITTER_CARD_TYPE = "summary_large_image";
const PORTFOLIO_IMAGE_URL =
  "http://www.alissanguyen.com/assets/images/preview.png";

export const metadata: Metadata = {
  title: PORTFOLIO_WEBSITE_NAME,
  description: WEBSITE_DESCRIPTION,
  keywords: WEBSITE_KEYWORDS,
  icons: {
    icon: [
      { url: '/assets/favicon/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
      { url: '/assets/favicon/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/assets/favicon/favicon.ico', type: 'image/x-icon', sizes: 'any' },
    ],
    apple: [{ url: '/assets/favicon/apple-touch-icon.png', sizes: '180x180' }],
  },
  openGraph: {
    title: PORTFOLIO_WEBSITE_NAME,
    description: WEBSITE_DESCRIPTION,
    url: WEBSITE_URL,
    images: [
      {
        url: PORTFOLIO_IMAGE_URL,
        width: IMAGE_WIDTH,
        height: IMAGE_HEIGHT,
        alt: PORTFOLIO_WEBSITE_NAME,
      },
    ],
    locale: "en_US",
    type: "website"
  },

  twitter: {
    card: TWITTER_CARD_TYPE,
    site: TWITTER_ACC,
    creator: TWITTER_ACC,
    title: PORTFOLIO_WEBSITE_NAME,
    description: WEBSITE_DESCRIPTION,
    images: [
      {
        url: PORTFOLIO_IMAGE_URL,
        alt: PORTFOLIO_WEBSITE_NAME,
      },
    ],
  },
  manifest: '/assets/favicon/site.webmanifest',
};

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { get } = cookies()
  const maybeThemeCookie = get(THEME_KEY)?.value

  const validatedTheme = ThemeSchema.safeParse(maybeThemeCookie).data

  const resolvedTheme = validatedTheme ? validatedTheme : SupportedTheme.DARK

  return (
    <ModalContextProvider>
      <ThemeContextProvider initialTheme={resolvedTheme}>
        <HtmlElement initialTheme={resolvedTheme}>
          <head>
            <link rel="icon" href="/assets/favicon/favicon.ico" sizes="any" />
            <link rel="icon" href="/assets/favicon/favicon-16x16.png" type="image/png" sizes="16x16" />
            <link rel="icon" href="/assets/favicon/favicon-32x32.png" type="image/png" sizes="32x32" />
            <link rel="apple-touch-icon" href="/assets/favicon/apple-touch-icon.png" sizes="180x180" />
          </head>
          <body id="root">
            <script
              async
              src="https://platform.twitter.com/widgets.js"
            ></script>
            <noscript>
              <div
                style={{
                  backgroundColor: 'black',
                  color: 'white',
                  padding: 30
                }}
              >
                <p style={{ fontSize: '1.5em' }}>
                  This site works much better with JavaScript enabled...
                </p>
              </div>
            </noscript>
            <NavBar />
            <div className="Document__Content screen-body">{children}</div>
            <Footer />
          </body>
        </HtmlElement>
      </ThemeContextProvider>
    </ModalContextProvider>

  );
};



export default Layout;


