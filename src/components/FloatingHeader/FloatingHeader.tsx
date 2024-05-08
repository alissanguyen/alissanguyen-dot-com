'use client'

import * as React from "react";
import ShareSection from "./ShareSection";
import ProgressBar from "./ProgressBar";
import { BsFillArrowLeftCircleFill, BsArrowLeftCircle } from "react-icons/bs";
import { GoHome } from "react-icons/go";
import { SimplifiedThemeButton } from "../ThemeButton/ThemeButton";
import "./FloatingHeader.css"
import { NAVBAR_ID } from "@/constants";

interface Props extends React.PropsWithChildren {
  postTitle: string;
  postSlug: string;
}


const FloatingHeader: React.FC<Props> = (props) => {
  const [shouldShowFloatingHeader, setShouldShowFloatingHeader] =
    React.useState(false);

  const [progress, setProgress] = React.useState(0);

  function fillScrollLine() {
    requestAnimationFrame(() => {
      const windowHeight = window.innerHeight;
      const fullHeight = document.body.clientHeight;

      const navBar: HTMLElement | null = document.getElementById(NAVBAR_ID);

      if (navBar) {
        const navbarContainerHeight = navBar.clientHeight;
        const scrolled = window.scrollY;
        const percentScrolled = (scrolled / (fullHeight - windowHeight)) * 100;

        setProgress(percentScrolled);

        setShouldShowFloatingHeader(
          calculateShouldShowFloatingHeader(scrolled, navbarContainerHeight)
        );
      }
    });
  }

  React.useEffect(() => {
    /**
     * Call it once initially to handle cases where users refresh halfway down
     * the page. In those cases, they haven't scrolled yet but they should still
     * see the progress bar.
     */
    fillScrollLine();

    window.addEventListener("scroll", fillScrollLine);

    return () => {
      window.removeEventListener("scroll", fillScrollLine);
    };
  }, []);

  return (
    <div
      className={`floating-header flex flex-row items-center justify-between text-xl ${shouldShowFloatingHeader ? "floating-active" : ""
        }`}
      id="Floating__Header"
    >
      <div className="hidden sm:flex flex-row items-center ">
        <div className="floating-header-logo font-medium ml-4 text-post-bodyTextLg">
          <a href="https://www.alissanguyen.com/blog">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <span className="hidden xs:flex">Alissa Nguyen's Blog</span>
          </a>
        </div>
        <span className="floating-header-divider text-post-bodyTextLg">—</span>
        <div className="floating-header-title font-medium">{props.postTitle}</div>
      </div>
      <a href="/">
        <GoHome className="FloatingHeader__GoHomeSVG w-16 h-7 mr-2 ease-in-out duration-200 text-gray-500 hover:text-textSmColor" />
      </a>

      <ProgressBar progress={progress} />
      <div className="flex flex-row items-center h-full gap-5">
        <SimplifiedThemeButton />
        <ShareSection title={props.postTitle} slug={props.postSlug} /></div>
    </div>
  );
};

const calculateShouldShowFloatingHeader = (
  amountScrolledInPixels: number,
  containerHeightInPixels: number
): boolean => {
  return amountScrolledInPixels >= containerHeightInPixels;
};

export default FloatingHeader;
