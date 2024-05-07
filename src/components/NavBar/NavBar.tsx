'use client'
import * as React from "react";
import ThemeButton from "../ThemeButton/ThemeButton";
import { fixedWidthLayoutClasses, NAVBAR_ID, topLevelLinksOnDesktop } from "@/constants";
import MobileMenu from "./MobileMenu";
import { usePathname, useRouter } from "next/navigation";
import { useTheme } from "@/providers/ThemeProvider";
import { useModalContext } from "@/providers/ModalProvider";
import Link from "next/link";
import { SupportedTheme } from "@/types";
import "./NavBar.css"
import NavLink from "./NavLink";

interface NavBarProps {
  navbarOpacity: number
}

const Navbar: React.FC<NavBarProps> = (props) => {
  const pathname = usePathname();
  const { theme } = useTheme();
  const currentTopLevelRoute = pathname;

  return (
    <>
      <div
        className={fixedWidthLayoutClasses + " mb-10 md:mb-16 lg:mb-20"}
        id={NAVBAR_ID}

      >
        <nav className="NavBar__Wrapper max-w-screen-lg flex flex-row relative" >
          <div className="NavBar__InnerWrapper fixed top-[2rem] bg-blue-10 z-[100] flex flex-row gap-40 items-center justify-between w-full max-w-screen-xl rounded-lg left-[0] xl:left-auto pl-8 sm:pl-12 pb-15 pr-5 xl:px-0 p-4 lg:p-0 lg:pl-5" style={{
            backgroundColor: `rgba(107, 107, 107, ${props.navbarOpacity})`,
            backdropFilter: `blur(${props.navbarOpacity * 50}px)`,
          }}>
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
        </nav>
      </div>
    </>
  );
};

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
