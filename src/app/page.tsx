'use client'
import { EatLearnCode, GradientBackground3 } from "@/components/Decoration";
import { fixedWidthLayoutClasses } from "@/constants";
import AboutMe from "@/sections/AboutMe/AboutMe";
import ContactMeSection from "@/sections/Contact/Contact";
import Projects from "@/sections/Projects/Projects";
import Portfolio from "@/sections/Resume/Portfolio";
import Resume from "@/sections/Resume/Resume";

export default function Home() {

  return (
    <>
      <div className="app tracking-wide text-lg">
        <div className={`${fixedWidthLayoutClasses} max-w-screen-lg flex flex-col`}>
          <AboutMe />
          <div style={{ zIndex: -10 }}>
            <GradientBackground3 />
            <div className="spacer-div"></div>
            <EatLearnCode />
          </div>
          <div className="spacer-div mt-24 custom2:mt-24"></div>
          <Portfolio />
          <Resume />
          <div className="spacer-div mt-24 custom2:mt-24"></div>
          <section id="projects">
            <div className="spacer-div sm:mt-0"></div>
            <Projects />
          </section>
          <div className="spacer-div mt-24"></div>
          <div className="spacer-div mt-10"></div>
          <ContactMeSection/>
          <div className="spacer-div mt-40"></div>
        </div>
      </div>
    </>
  )
}
