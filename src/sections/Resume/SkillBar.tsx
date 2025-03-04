import * as React from 'react';
import { useInView } from 'react-intersection-observer';

interface Props {}

interface SkillBarRefs {
  [key: string]: HTMLDivElement | null;
}

interface SkillsData {
  html: number;
  css: number;
  javascript: number;
  react: number;
  typescript: number;
  nodejs: number;
  nextjs: number;
}

const SkillBar: React.FC<Props> = ({}) => {
  const skillsRef = React.useRef<SkillsData>({
    html: 97,
    css: 96,
    javascript: 95,
    react: 88,
    typescript: 89,
    nodejs: 85,
    nextjs: 89,
  });

  const skillBarRefs = React.useRef<SkillBarRefs>({});

  const { ref: skillsContainerRef, inView } = useInView({
    triggerOnce: true, // Ensures animation runs only once
    rootMargin: '-50px',
  });

  React.useEffect(() => {
    if (inView) {
      Object.keys(skillsRef.current).forEach((key) => {
        const skillBar = skillBarRefs.current[key];
        if (skillBar) {
          skillBar.style.transition = 'width 2s cubic-bezier(0.19, 1, 0.22, 1)';
          skillBar.style.width = `${skillsRef.current[key as keyof SkillsData]}%`;
        }
      });
    }
  }, [inView]);

  return (
    <div className="container" ref={skillsContainerRef}>
      <h1 className="title-skills text-2xl uppercase text-center Resume__BigText">Skills</h1>
      {Object.keys(skillsRef.current).map((key) => (
        <div key={key} className="bar flex flex-row gap-5 items-center my-[1em] mx-auto text-base sm:text-lg custom:text-xl">
          <div className="skill-name text-base sm:text-lg custom:text-xl uppercase mr-6 w-24 Resume__BigText">{key.toUpperCase()}</div>
          <div className="bar-outer relative flex-grow">
            <div
              ref={(el) => {
                skillBarRefs.current[key] = el;
              }}
              className={`bar-inner ${key}`}
              style={{ width: '0%' }} // Start at 0% and will animate to the correct value
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillBar;
