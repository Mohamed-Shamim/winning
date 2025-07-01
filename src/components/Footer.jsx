import { FaDiscord, FaGithub, FaTwitter } from "react-icons/fa";
import { FaMobileScreenButton } from "react-icons/fa6";
import { TbWalk } from "react-icons/tb";

const Links = [
  {
    href: `https://discord.com`,
    icon: <FaDiscord />,
  },
  {
    href: `https://twitter.com`,
    icon: <FaTwitter />,
  },
  {
    href: `https://github.com`,
    icon: <FaGithub />,
  },
  {
    href: `https://www.bento.io`,
    icon: <FaMobileScreenButton />,
  },
  {
    href: `https://www.twitch.com`,
    icon: <TbWalk />,
  },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-violet-300 py-4 text-black">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm md:text-left">
          &copy; 2025 Video Winning. All rights reserved.{" "}
        </p>
        <div className="flex justify-center gap-4 md:justify-start">
          {Links.map((link, index) => (
            <a
              href={link.href}
              key={index}
              target="_black"
              rel="noopener noreferrer"
              className="text-black transition-colors duration-500 ease-out hover:text-white"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <a
          href="#privacy-policy"
          className="text-center text-sm hover:underline md:text-right"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
