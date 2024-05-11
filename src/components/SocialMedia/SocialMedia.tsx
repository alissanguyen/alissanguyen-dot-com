'use client'
import * as React from "react";
import { SOCIAL_MEDIA_METADATA } from "@/constants";
import { useTheme } from "@/providers/ThemeProvider";
import "./SocialMedia.css"
import { SupportedTheme } from "@/types";

const SocialMedia: React.FC<React.PropsWithChildren> = ({ }) => {
  const { theme } = useTheme();
  const styles = getTextStyles(theme);
  return (
    <div className="sm-wrapper flex flex-col gap-4">
      {SOCIAL_MEDIA_METADATA.map((element) => {
        const IconMarkup = element.icon;

        return (
          <div
            className={`${element.className} social-media-icon-wrapper relative bg-aboutMe-smIconBg flex flex-col justify-center items-center justify-self-center ${styles}`}
            key={element.name}
          >
            <div className="tooltip absolute top-0 text-sm text-white bg-white">
              {element.name}
            </div>
            <a href={element.externalUrl} target="_blank">
              <span className="flex justify-center items-center text-lg">
                <IconMarkup />
              </span>
            </a>
          </div>
        );
      })}
    </div>
  );
};

const getTextStyles = (theme: SupportedTheme) => {
  return theme === SupportedTheme.LIGHT
    ? "text-black hover:text-white"
    : "text-white";
};

export default SocialMedia;
