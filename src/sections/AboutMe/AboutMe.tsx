import ResumeButton from "@/components/ResumeButton/ResumeButton";
import SocialMedia from "@/components/SocialMedia/SocialMedia";
import SparkleSVG from "@/components/SparkleSVG";
import * as React from "react";
import AvatarImageSrc from "../../../public/assets/aboutme/avatar.jpeg";
import EclipseSrc from "../../../public/assets/images/background/Eclipse.svg";
import GradientImageSrc from "../../../public/assets/images/background/Gradient.svg";
import "./AboutMe.css";
import Hi from "./Hi";
import Titles from "./Titles";

import Image from "next/image";


const skills = [
  {
    id: "fs",
    title: "Full-stack development",
    description: "Building robust and scalable web applications using the T3 stack (Next.js, tRPC, Prisma, Tailwind CSS, TypeScript) for seamless integration between frontend and backend. Implementing type-safe APIs and data validation with Zod for reliable data integrity.",
  },
  {
    id: "fe",
    title: "Front-end development",
    description: "Responsive and performant web pages with React or Remix, with and SSR for a better user experience. Utilize modern UI libraries like TailwindCSS, Headless UI, ShadUI, Framer Motion, etc. to create beautiful, responsive, and accessible web apps quickly.",
  },
  {
    id: "wh",
    title: "Web hosting, deployment, and API management",
    description: "Deployment to platforms such as Vercel, Netlify, and Cloudflare to leverage caching and firewalls at the edge. Writing easily understood, modular, fast, and type-safe applications with TypeScript and modern JavaScript syntax. Implementing rate limiting with Upstash to protect APIs and ensure fair usage.",
  },
  {
    id: "db",
    title: "Database management and ORMs",
    description: "Data management with Firestore, Prisma, Supabase, or Drizzle ORM. Use of classic web security principles and user authorization/authentication with Firebase Auth or Clerk for seamless user management.",
  },
  {
    id: "cms",
    title: "CMS integration and analytics",
    description: "Creating JAM Stack frontend applications that integrate with modern headless content management systems (CMS) like Contentful. Implementing data analytics and user behavior tracking with Posthog for data-driven decision-making.",
  },
  {
    id: "ai",
    title: "AI and ML integration",
    description: "Hosting and integrating AI models using Cloudflare Workers for efficient and scalable AI-powered features. Leveraging the power of AI and machine learning to enhance user experiences and automate processes.",
  }
]
const AboutMe: React.FC<React.PropsWithChildren> = () => {

  return (
    <section id="AboutMe" className="AboutMe__Wrapper">
      <article className="aboutme-wrapper mt-[35%] xs:mt-[25%] md:mt-[15%] flex flex-row gap-5 lg:gap-2 relative">
        <div className="Introduction__Wrapper grid grid-cols-1 custom:grid-cols-7 gap-5" id="introductionWrapper">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <Image
            src={EclipseSrc}
            alt="Decorative background eclipse"
            className="eclipse absolute left-[-40rem] top-[2rem] z-[-10]"
          />
          <div className="flex flex-col custom:col-span-4">
            <Hi />
            <div className="bio-description md:text-lg leading-10 text-textSmColor">
              <div className="my-10 text-lg xl:text-xl font-light">
                <p className="my-4">
                  Welcome to my personal website!
                </p>
                <p className="mb-5 xs:mb-10 font-light">
                  {/* eslint-disable-next-line react/no-unescaped-entities */}
                  I enjoy building software that makes people' lives easier
                  by writing elegant, performant, and maintainable frontend
                  code. I also enjoy petting every cat I see.
                </p>
                <div className="spacer-div mt-5 sm:mt-10"></div>
                <Titles />
                <div className="mt-5 xs:mt-12"></div>
                <div className="resume-btn-wrapper w-fit">
                  <ResumeButton />
                </div>

              </div>
            </div>

          </div>
          <div className="hidden custom:flex custom:col-span-3 custom:px-5 xl:px-10">
            <Image src={AvatarImageSrc} alt="avatar" className="Avatar" />
          </div>

        </div>

        <SocialMedia />
      </article>
      <div className="visible custom:hidden">
        <Image src={AvatarImageSrc} alt="avatar" className="Avatar" />
      </div>

      <div className="spacer-div mt-40"></div>
      <AboutMeStats />
    </section>
  );
};

export default AboutMe;




const AboutMeStats: React.FC<React.PropsWithChildren> = ({ }) => {
  return (
    <div>

      <div className='flex flex-row items-center w-fit text-lg custom3:text-2xl gap-3 font-medium rounded-3xl border-2 border-textSmColor text-textSmColor px-8 py-2 mb-5'>
        <SparkleSVG />
        <h2>About Me</h2>

      </div>
      <p className="Slogan AboutMe__Slogan gradient-text">Turning complex problems <br></br> into simple design</p>
      <div className="AboutMe__StatsWrapper flex flex-col sm:flex-row items-center w-full gap-5 text-textSmColor Special__Font mb-5 text-center mt-6">
        <Image
          src={GradientImageSrc}
          alt="Decorative background"
          className="gradient-blob absolute opacity-60"
        />
        <div className="AboutMe__StatItem">
          <span className="AboutMe__StatNumber gradient-text">4+</span>
          <span className="AboutMe__StatDescription font-semibold">Years of experience</span>
        </div>
        <div className="AboutMe__StatItem">
          <span className="AboutMe__StatNumber gradient-text">50+</span>
          <span className="AboutMe__StatDescription">Projects done</span>
        </div>
        <div className="AboutMe__StatItem">
          <span className="AboutMe__StatNumber gradient-text">2,000+</span>
          <span className="AboutMe__StatDescription">GitHub contributions</span>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-10 sm:gap-12 custom:gap-20">
        <div className='flex flex-col items-start gap-3 sm:gap-7 font-light'>
          <p className="AboutMe__Text text-lg custom:text-xl text-subText leading-relaxed tracking-wide">I had my awakening call recently, and it sent me on a journey of self-discovery. One morning, I woke up to a world that felt alien, as if I had been sleepwalking through life. The vibrant red awning of the corner pizzeria caught my eye, a splash of color I had never noticed before. The trees lining the streets stood tall and proud, each one unique in its own way. The glass façade of a skyscraper near the I-5 entrance gleamed in the morning light, reflecting the azure sky above. I found myself wondering, &quot;Where am I? Who in the world am I?&quot;</p>

          <p className="AboutMe__Text text-lg custom:text-xl text-subText leading-relaxed tracking-wide">Life is a labyrinth of mysteries, but the most profound one is the quest to unravel our own identity and purpose. As we navigate the twists and turns of this maze, the greatest challenge is to hold onto our authentic selves. In this moment, I am filled with gratitude for the opportunity to exist, to breathe, and to grow. Tomorrow, I will emerge as a better version of myself, like a butterfly breaking free from its chrysalis.</p>
          <p className="AboutMe__Text text-lg custom3:text-xl custom:text-2xl font-normal text-textLgColor italic leading-relaxed tracking-wide">The ability to introspect and reflect is a superpower that sets humans apart, allowing us to shape our own destinies.</p>
          {/* &lsquo; */}
        </div>
        <div className='flex flex-col items-start gap-3 sm:gap-6 text-lg custom:text-xl text-textSmColor'>
          <div className="flex flex-col items-start leading-7">
            <span className="text-subText font-extralight">Name</span>
            <span className="font-semibold tracking-wide">Tam Nguyen</span>
            <span className="font-semibold tracking-wide">Nickname: Alissa / Julia</span>
          </div>

          <div className="flex flex-col items-start">
            <span className="text-subText font-extralight">Phone</span>
            <span className="font-semibold tracking-wide">(425) 728-0312</span>
          </div>

          <div className="flex flex-col items-start">
            <span className="text-subText font-extralight">Email</span>
            <span className="font-semibold tracking-wide">im.tamnguyen@gmail.com</span>
          </div>

          <div className="flex flex-col items-start">
            <span className="text-subText font-extralight">Location</span>
            <span className="font-semibold tracking-wide">Seattle, Washington, USA</span>
          </div>
        </div>
      </div>

      <div className="spacer-div mt-12 custom3:mt-24"></div>

      <ul className='grid grid-cols-1 custom2:grid-cols-2 gap-10 md:gap-24'>
        {skills.map((skill) => (
          <li key={skill.id} className="AboutMe__SkillBubble relative flex flex-col items-start">

            <p className="AboutMe__SkillBubble__Title text-aboutMe-skillTitle font-semibold text-2xl md:text-3xl mb-2">{skill.title}</p>
            <p className='font-light text-lg md:text-xl text-textSmColor'>{skill.description}</p>
          </li>
        ))}
      </ul>

    </div>
  )
}
