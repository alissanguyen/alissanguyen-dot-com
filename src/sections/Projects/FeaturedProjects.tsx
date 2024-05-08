'use client'
import * as React from "react";
import { mainProjects } from "@/constants";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import ExternalLinkButton from "@/components/ExternalLinkButton/ExternalLinkButton";
import { useTheme } from "@/providers/ThemeProvider";
import { SupportedTheme } from "@/types";
import SmallExternalLinkButton from "@/components/ExternalLinkButton/SmallExternalLinkButton";
import { useWasInViewAtLeastOnce } from "@/hooks/useWasInViewAtLeastOnce";

const FeaturedProjects: React.FC = ({ }) => {
  const { theme } = useTheme();
  const { setRef, wasInViewAtLeastOnce } = useWasInViewAtLeastOnce();
  const animationClassName = wasInViewAtLeastOnce
    ? "project-slide-up"
    : undefined;
  return (

    <div>
      <p className="PublishedSoftware__Text text-4xl Resume__BigText font-semibold mb-8">Publised Software & Writing</p>
      <div className="line-break-gradient"></div>
      <div
        className={`main-projects-wrapper text-textSmColor grid custom:grid-cols-2 gap-10 z-10 mt-8`}
        ref={setRef}
      >

        {mainProjects.map((project, index) => (
          <div
            className={`FeaturedProject__Card ${animationClassName} duration-100 ease-in flex flex-col items-start justify-between h-full bg-cover gap-10 p-7 xs:p-10 rounded-2xl`}
            style={{
              backgroundImage: `${theme === SupportedTheme.LIGHT ? project.bgLight : project.bgDark
                }`,
              animationDuration: `${index + 1.25}s`
            }}
            key={project.name}
          >
            <div className="main-project-content h-full flex flex-col justify-between">
              <div className="flex flex-col sm:mt-0">
                <p className="main-project-title font-semibold text-2xl sm:text-3xl pb-5">
                  {project.name}
                </p>
                <p className="main-project-description text-base leading-8 mb-4 font-light">
                  {project.description}
                </p>
                <p className="main-project-time text-sm text-projects-subText pb-2">
                  {project.role}
                </p>
              </div>

              <div className="main-project-frameworks flex flex-row ">
                <ArrowRightIcon className="text-projecs-arrow w-5 mr-3" />
                <p className="text-[15px] leading-7">{project.frameworks}</p>
              </div>

              <div className="spacer-div sm:mt-3"></div>


              <div className="main-project-small-buttons flex flex-row items-center justify-between text-sm mt-5">
                {project.gitRepo ? (<SmallExternalLinkButton
                  type="Github"
                  href={project.gitRepo}
                  accessibilityName="Visit Github repository"
                />) : null}

                <SmallExternalLinkButton
                  type="Website"
                  href={project.website}
                  accessibilityName="Visit website"
                />
                {project.npm ? (
                  <SmallExternalLinkButton
                    type="NPM"
                    href={project.npm}
                    accessibilityName="Visit NPM page"
                  />
                ) : null}
              </div>

              <div className="main-project-buttons flex flex-row items-center justify-start text-sm mt-5 sm:mt-0">
                {project.gitRepo ? (
                  <ExternalLinkButton
                    to={project.gitRepo}
                    accessibilityName="Visit Github repository"
                  >
                    View source
                  </ExternalLinkButton>
                ) : null}

                <div className="mr-4"></div>
                <ExternalLinkButton
                  to={project.website}
                  accessibilityName="Visit Website"
                >
                  Visit Website
                </ExternalLinkButton>
                {project.npm ? (
                  <div className="inline-flex">
                    <div className="mr-4"></div>
                    <ExternalLinkButton
                      to={project.npm}
                      accessibilityName="Visit NPM package"
                    >
                      View on NPM
                    </ExternalLinkButton>
                  </div>
                ) : null}
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>

  );
};

export default FeaturedProjects;
