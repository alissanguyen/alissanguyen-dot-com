import * as React from 'react';
import { useInView } from 'react-intersection-observer';

interface Props {

}

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

const SkillBar: React.FC<Props> = ({ }) => {
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
        rootMargin: '-50px',
    });

    React.useEffect(() => {
        const animateSkillBars = () => {
            Object.keys(skillsRef.current).forEach((key) => {
                const skillBar = skillBarRefs.current[key];
                const speechBubble = skillBar?.parentElement?.querySelector('.speech-bubble');
                if (skillBar) {
                    skillBar.style.width = '0%';
                    void skillBar.offsetWidth; // Trigger reflow
                    skillBar.style.width = `${skillsRef.current[key as keyof SkillsData]}%`;
                    skillBar.classList.add(`animate`);
                    skillBar.classList.add(`animate-${key}`);
                }
                if (speechBubble instanceof HTMLElement) {
                    speechBubble.textContent = key.toUpperCase().replace(/\b\w/g, (c) => c.toUpperCase());
                    speechBubble.style.display = 'block';
                }
            });
        };

        if (inView) {
            animateSkillBars();
        }

    }, [inView]);

    return (
        <div className="container" ref={skillsContainerRef}>
            <h1 className="title-skills text-2xl uppercase text-center Resume__BigText">Skills</h1>
            {Object.keys(skillsRef.current).map((key) => (
                <div key={key} className="bar flex flex-row gap-5 items-center my-[1em] mx-auto text-base sm:text-lg custom:text-xl">
                    <div className="skill-name text-base sm:text-lg custom:text-xl uppercase mr-6 w-24 Resume__BigText">{key.toUpperCase().replace(/\b\w/g, (c) => c.toUpperCase())}</div>
                    <div className="bar-outer relative flex-grow">
                        <div
                            ref={(el) => {
                                skillBarRefs.current[key] = el;
                            }}
                            className={`bar-inner w-0 flex justify-end text-sm items-center font-medium ${key} w-${skillsRef.current[key as keyof SkillsData]} animate-${key}`}
                            style={{ width: `${skillsRef.current[key as keyof SkillsData]}%` }}
                        >
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default SkillBar