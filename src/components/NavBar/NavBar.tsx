'use client'
import * as React from "react";
import ThemeButton from "../ThemeButton/ThemeButton";
import { NAVBAR_ID, topLevelLinksOnDesktop } from "@/constants";
import MobileMenu from "./MobileMenu";
import { usePathname } from "next/navigation";
import { useTheme } from "@/providers/ThemeProvider";
import { useModalContext } from "@/providers/ModalProvider";
import Link from "next/link";
import { SupportedTheme } from "@/types";
import "./NavBar.css"
import NavLink from "./NavLink";

const Navbar: React.FC = (props) => {

  const pathname = usePathname();
  const { theme } = useTheme();
  const currentTopLevelRoute = pathname;
  const isOnSlugRoute = pathname.startsWith('/blog/');

  const [navbarStyle, setNavbarStyle] = React.useState({
    borderBottom: 'none',
    backgroundColor: 'var(--background-nav)',
  });

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        setNavbarStyle({
          borderBottom: 'solid 2px var(--base01)',
          backgroundColor: 'var(--background-nav)',
        });
      } else {
        setNavbarStyle({
          borderBottom: 'none',
          backgroundColor: 'transparent',
        });
      }

      // Save the scroll position to localStorage
      localStorage.setItem('scrollPosition', scrollPosition.toString());
    };

    // Check if there is a stored scroll position in localStorage
    const savedScrollPosition = localStorage.getItem('scrollPosition');
    if (savedScrollPosition) {
      const scrollPosition = parseInt(savedScrollPosition);
      window.scrollTo(0, scrollPosition);
      // Set the initial navbar style based on the stored scroll position
      if (scrollPosition > 50) {
        setNavbarStyle({
          borderBottom: '1px solid gray',
          backgroundColor: 'white',
        });
      }
    }
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // max-w-screen-lg
  // max-w-screen-xl pr-5 
  return (
    isOnSlugRoute ? (<div className={" mb-10 md:mb-16 lg:mb-20"} id={NAVBAR_ID} ></div >) : (<>
      <div
        className={" mb-10 md:mb-16 lg:mb-20"}
        id={NAVBAR_ID}

      >
        <nav className="NavBar__Wrapper flex flex-row relative"  >
          <div className="NavBar__InnerWrapper fixed z-[100] flex w-full left-[0] xl:left-auto mb-10" style={navbarStyle}>
            <div className="flex flex-row items-center justify-between w-full gap-40 max-w-screen-xl mx-auto p-8 sm:p-12 pb-10 lg:px-0 lg:pb-5 lg:pt-14">
              <div>
                <NavLogo
                  isCurrentRoute={getIsActiveRoute(
                    "/",
                    currentTopLevelRoute === undefined ? "" : currentTopLevelRoute
                  )}
                />
              </div>
              <nav className="Dekstop__NavBar hidden lg:flex list-none w-full justify-right">
                <div className="flex flex-row items-center justify-between w-full">
                  {topLevelLinksOnDesktop.map((link) => {
                    return (

                      <NavLink
                        to={link.href}
                        key={link.href}
                        href={link.href}
                        isCurrentRoute={getIsActiveRoute(
                          link.href,
                          currentTopLevelRoute === undefined
                            ? ""
                            : currentTopLevelRoute
                        )}
                      >
                        {link.displayName}
                      </NavLink>


                    );
                  })}
                  <div className="noscript-hidden hidden lg:block">
                    <ThemeButton />
                  </div>
                </div>
              </nav>

              <div className="Mobile__NavBar fixed right-[2rem] sm:right-[3rem] flex items-center justify-center z-[200]">
                <div className="block lg:hidden">
                  <MobileMenu theme={theme} />
                </div>
              </div>
            </div>



          </div>
        </nav>
      </div>
    </>))
}



const getIsActiveRoute = (href: string, currentTopLevelRoute: string) => {

  if (href.startsWith("/#")) {
    return false;
  }

  return "/" + currentTopLevelRoute === href;
};

export default Navbar;

interface Props {
  isCurrentRoute: boolean;
}
const NavLogo: React.FC<Props> = (props) => {
  const { theme } = useTheme();
  const { modalIsOpen } = useModalContext();

  const logoText = getLogoClassName(
    theme,
    modalIsOpen
  );

  const IS_CURRENT_ROUTE_CLASSNAME = "text-navBar-linkActive";
  return (
    <Link
      prefetch={true}
      href="/"
      className={`logo focus:outline-none block whitespace-nowrap text-2xl font-medium transition uppercase ${logoText} ${props.isCurrentRoute ? IS_CURRENT_ROUTE_CLASSNAME : null
        }`}
    >
      <span>Alissa Nguyen</span>
    </Link>
  );
};

const getLogoClassName = (
  theme: SupportedTheme,
  modalIsOpen: boolean
) => {
  if (modalIsOpen) {
    return theme === SupportedTheme.LIGHT
      ? "text-gray-500 hover:text-black"
      : "text-gray-400 hover:text-white";
  }
  return theme === SupportedTheme.LIGHT
    ? "text-gray-500 hover:text-black"
    : "text-gray-400 hover:text-white";
};
