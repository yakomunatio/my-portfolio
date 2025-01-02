import "./hero.css";
import Lottie from "lottie-react";
import developerAnimation from "../../../public/animations/developer.json"
import React, { useState, useEffect } from 'react';
const Hero = () => {
  // this is where I start editing for the animated text 

  const texts = ["Front-end developer", "Designer", "Embedded systems student"];
  const [currentText, setCurrentText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  useEffect(() => {
    const typeSpeed = isDeleting ? 100 : 150;
    const delay = isDeleting ? 800 : 1200; // Pause before deleting or moving to the next word.

    const type = setTimeout(() => {
      const fullText = texts[currentWordIndex];
      if (!isDeleting && charIndex < fullText.length) {
        setCurrentText((prev) => prev + fullText[charIndex]);
        setCharIndex((prev) => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setCurrentText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      } else if (!isDeleting && charIndex === fullText.length) {
        setIsDeleting(true);
        setTimeout(() => clearTimeout(type), delay);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % texts.length);
      }
    }, typeSpeed);

    return () => clearTimeout(type);
  }, [charIndex, isDeleting, currentWordIndex, texts]);

  // until here --------------------------------------------------

  return (
    <section className="hero flex"> 

      <div className="left-side">
        <div className="avatar-contaner flex">
          <img className="avatar" src="./picture2.png" alt="avatar" />
          {/* center this one (the name + verifyed logo) */}
          <h1 className="sub-title">Yassine Achhachar</h1>
          <div className="icon-verified"></div>
        </div>

        <h1 className="title">{currentText}
          <span className="cursor">|</span>
        </h1>
        {/* -------------------------------------- */}
      <p className="sub-title">
      I’m an Embedded Computer Engineering student passionate about robotics, programming,
      and innovative technology. As the President of the 'Robot and Product Design' club,
      I’ve worked on projects like smart technologies and robotic systems.
      I enjoy learning through hands-on experiences and collaborating on creative ideas
      to solve real-world challenges.
      </p>

      <div className="icons flex">
        <a className="icon icon-github"    href="https://github.com/yakomunatio" target="blank"></a >
        <a className="icon icon-linkedin"  href="www.linkedin.com/in/achhachar" target="blank"></a >
        <a className="icon icon-instagram" href="https://www.instagram.com/yassin.achhachar" target="blank"></a >
        <a className="icon icon-twitter"   href="https://x.com/achhchar_y" target="blank"></a >
      </div>
      </div>

      

      <div className="right-side animation ">
      <Lottie className="contact-animation" animationData={developerAnimation} />
      </div>

    </section>
  );
};

export default Hero;
