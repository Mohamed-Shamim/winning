import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/all";
import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        scrub: 0.5,
        end: "+=800 center",
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mt-36 mb-8 flex flex-col items-center gap-5 ">
        <h1 className="font-general text-sm uppercase">Welcome to Zentry </h1>

        <AnimatedTitle
          title="Disc<b>o</b>ver the world's <br /> largest shared <b>a</b>dventure"
          containerClass="mt-5 !text-black text-center"
        />

        <div className="about-subtext">
          <p>The Game begins-your life, now an epic MMORPG</p>
          <p>Zentry unites every player from countless games and platforms</p>
        </div>
      </div>

      <div className="h-dvh w-screen " id="clip">
        <div className="mask-clip-path about-image">
          <img
            src="image/about.webp"
            alt=""
            className="absolute left-0 top-0 size-full object-cover "
          />
        </div>
      </div>
    </div>
  );
};

export default About;
