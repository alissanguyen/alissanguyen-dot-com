'use client'

import * as React from "react";
import ShareSection from "./ShareSection";
import ProgressBar from "./ProgressBar";
import { BsFillArrowLeftCircleFill, BsArrowLeftCircle } from "react-icons/bs";
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
      className={`floating-header text-xl ${
        shouldShowFloatingHeader ? "floating-active" : ""
      }`}
      id="Floating__Header"
    >
      <div className="floating-header-logo font-medium ml-4 text-post-bodyTextLg">
        <a href="https://www.alissanguyen.com/blog">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <span className="hidden xs:flex">Alissa Nguyen's Blog</span>
        </a>
      </div>
      <span className="floating-header-divider text-post-bodyTextLg">—</span>
      <div className="floating-header-title font-medium">{props.postTitle}</div>
      <ProgressBar progress={progress} />
      <SimplifiedThemeButton />
      <ShareSection title={props.postTitle} slug={props.postSlug} />
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
