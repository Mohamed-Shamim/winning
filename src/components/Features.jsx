import { useRef } from "react";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
export const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 10;
    const tiltY = (relativeX - 0.5) * -10;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

// eslint-disable-next-line react/prop-types
const BentoCard = ({ src, title, description }) => {
  return (
    <div className="relative size-full">
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute left-0 top-0 size-full object-cover"
      />
      <div className="relative z-10 flex size-full flex-col p-3 md:p-7">
        <div className="">
          <h1 className="bento-title special-font text-white ">{title}</h1>
          {description && (
            <p className="mt-3 max-w-96 text-xs text-white md:text-base">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <section className="bg-black pb-52">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <p className="text-blue-50 font-circular-web">
            Into the Metagame Layer
          </p>

          <p className="text-blue-50 max-w-md font-circular-web text-lg opacity-50">
            {" "}
            Immerse yourself in a rich and ever-expanding universe where a
            vibrant array of products converge into an interconnected overlay
            experience on your world.
          </p>
        </div>
        <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
          <BentoCard
            src="video/feature-1.mp4"
            title={
              <>
                radi<b>n</b>t
              </>
            }
            description="A cross-platform metagame app, turning your activeties across Web2 and web3 games into a rewarding adventure. "
            isComingSoon={true}
          />
        </BentoTilt>
        <div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7">
          <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
            <BentoCard
              src="video/feature-2.mp4"
              title={
                <>
                  zig<b>m</b>a
                </>
              }
              description="An anime and gaming-inspired NET collection - the IP primed for expansion."
              isComingSoon={true}
            />
          </BentoTilt>
          <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0 ">
            <BentoCard
              src="video/feature-3.mp4"
              title={
                <>
                  re<b>a</b>d
                </>
              }
              description="A highly-optimized and feature-rich, self-sustaining, and self-regulating ecosystem that caters to the needs of a rapidly-evolving and dynamic digital world."
              isComingSoon={true}
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
            <BentoCard
              src="video/feature-4.mp4"
              title={
                <>
                  co<b>n</b>nect
                </>
              }
              description="A globally-connected, decentralized, and interoperable blockchain network that enables the creation of a unified, interconnected, and secure digital ecosystem."
              isComingSoon={true}
            />
          </BentoTilt>
          <BentoTilt className="bento-tilt_1 md:col-span-1 col-span-2 p-7">
            <div className="">
              <h2 className="text-white text-3xl font-bold mb-4">
                Coming Soon!
              </h2>
              <p className="text-white max-w-md font-circular-web text-lg opacity-50">
                {" "}
                We are currently working on new features, products, and services
                that will be available soon. Stay tuned for updates!
                <br />
                <a
                  href="https://www.bento.io/news"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-50 hover:text-blue-75"
                >
                  Learn more about Bento&apos;s future{" "}
                  <span className="text-blue-50 underline hover:text-blue-100">
                    here
                  </span>
                </a>
              </p>
              <div className="flex gap-5 items-center mt-7 ">
                <a className=" flex items-center gap-2 text-blue-75 font-circular-web text-sm md: px-3 py-3 rounded-md  bg-[#346834cc]   hover:text-blue-50 cursor-pointer">
                  Start for Free
                  <FaArrowRight className="h-3" />
                </a>

                <a className=" flex gap-2 items-center text-blue-75 font-circular-web text-sm md:text-sm px-3 py-3 rounded-md  hover:text-blue-50 cursor-pointer ">
                  Learn More
                  <FaArrowRight className="h-3" />
                </a>
              </div>
            </div>
          </BentoTilt>
          <BentoTilt className="bento-tilt_1 md:bento-tilt_2   ">
            <video
              src="video/feature-5.mp4"
              loop
              muted
              autoPlay
              className="size-full object-cover object-center"
            />
          </BentoTilt>
        </div>
      </div>
    </section>
  );
};

export default Features;
