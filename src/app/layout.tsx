'use client'
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import NavBar from '@/components/NavBar/NavBar';
import Footer from '@/components/Footer/Footer';
import { usePathname } from 'next/navigation';
import { SupportedTheme } from '@/types';
import { ThemeContextProvider, useTheme } from '@/providers/ThemeProvider';
import "../styles/globals.css"
import { ModalContextProvider } from '@/providers/ModalProvider';
import { getTheme } from '@/utils/theme.server';
import { AUTHOR, BLOG_DESCRIPTION, BLOG_IMAGE_URL, BLOG_KEYWORDS, BLOG_URL, BLOG_WEBSITE_NAME, fixedWidthLayoutClasses, IMAGE_HEIGHT, IMAGE_WIDTH, NAVBAR_ID, TWITTER_ACC, TWITTER_CARD_TYPE } from '@/constants';

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

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {

  const pathname = usePathname();
  const isOnBlogRoute = pathname.startsWith('/blog');
  const isOnSlugRoute = pathname.startsWith('/blog/');

  const [theme, setTheme] = useState<SupportedTheme>(SupportedTheme.DARK);

  const [navbarOpacity, setNavbarOpacity] = useState(0);

  useEffect(() => {
    const storedTheme = getTheme();
    setTheme(storedTheme);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      const newOpacity = Math.min(scrollPosition / 200, 0.2);

      setNavbarOpacity(newOpacity);

      // Save the scroll position to localStorage
      localStorage.setItem('scrollPosition', scrollPosition.toString());
    };

    // Check if there is a stored scroll position in localStorage
    const savedScrollPosition = localStorage.getItem('scrollPosition');
    if (savedScrollPosition) {
      const scrollPosition = parseInt(savedScrollPosition);
      window.scrollTo(0, scrollPosition);

      // Calculate the initial opacity based on the stored scroll position
      const initialOpacity = Math.min(scrollPosition / 200, 0.2);
      setNavbarOpacity(initialOpacity);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // TODO: Fix metadata not rendering
  return (
    <ThemeContextProvider initialTheme={theme}>
      <ModalContextProvider>
        <ThemeSetter>
          {!isOnBlogRoute ? (<Head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>Alissa Nguyen</title>
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="manifest" href="/site.webmanifest" />
          </Head>) : (
            <Head>
              <title>{BLOG_WEBSITE_NAME}</title>
              <meta name="description" content={BLOG_DESCRIPTION} />
              <meta name="keywords" content={BLOG_KEYWORDS} />
              <meta property="og:title" content={BLOG_WEBSITE_NAME} />
              <meta property="og:description" content={BLOG_DESCRIPTION} />
              <meta property="og:url" content={BLOG_URL} />
              <meta property="og:image" content={BLOG_IMAGE_URL} />
              <meta property="og:image:width" content={IMAGE_WIDTH} />
              <meta property="og:image:height" content={IMAGE_HEIGHT} />
              <meta property="og:image:alt" content={BLOG_WEBSITE_NAME} />
              <meta name="twitter:title" content={BLOG_WEBSITE_NAME} />
              <meta name="twitter:description" content={BLOG_DESCRIPTION} />
              <meta name="twitter:card" content={TWITTER_CARD_TYPE} />
              <meta name="twitter:creator" content={TWITTER_ACC} />
              <meta name="twitter:site" content={TWITTER_ACC} />
              <meta name="twitter:image" content={BLOG_IMAGE_URL} />
              <meta name="twitter:image:alt" content={BLOG_WEBSITE_NAME} />
              <meta name="theme-color" content="#212529" />
              <link rel="author" href={AUTHOR} />
            </Head>
          )}
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
            {isOnSlugRoute ? (<div className={fixedWidthLayoutClasses + " mb-10 md:mb-16 lg:mb-20"} id={NAVBAR_ID}></div>) : <NavBar navbarOpacity={navbarOpacity} />}
            <div className="Document__Content screen-body">{children}</div>
            <Footer />
          </body>
        </ThemeSetter>
      </ModalContextProvider>
    </ThemeContextProvider >
  );
};

const ThemeSetter = (props: React.PropsWithChildren) => {
  const { theme } = useTheme();

  const pathname = usePathname();
  const isOnBlogRoute = pathname.startsWith('/blog');

  return (
    <html
      lang="en"
      className={convertSupportedThemeToClassName(theme, isOnBlogRoute)}
    >
      {props.children}
    </html>
  )
}

export default Layout;


