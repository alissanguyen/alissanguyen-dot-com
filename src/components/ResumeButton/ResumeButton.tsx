'use client'
import * as React from "react";
import "./ResumeButton.css"

const ResumeButton: React.FC<React.PropsWithChildren> = () => {
  return (
    <a href="/resume.pdf" download={"AlissaNguyen_Resume.pdf"} className="ResumeButton__Wrapper">
      <button
        className="slide text-lg"
        name="Download Resume"
        aria-label="Resume"
      >
        Download Resume
      </button>
    </a>
  );
};

export default ResumeButton;
