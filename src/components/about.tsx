import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import { AnimatedTitle } from "./animated-title";

gsap.registerPlugin(ScrollTrigger);

export const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
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
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <p className="font-general text-sm uppercase md:text-[10px]">
          ~ 𝓐𝓫𝓸𝓾𝓽 𝓶𝓮 ~ 🦊
        </p>

        <AnimatedTitle containerClass="mt-5 !text-black text-center">
          {
            "Light"
          }
        </AnimatedTitle>

        <div className="about-subtext">
          <p>Name: Your Name Here</p>
          <p>Location: Your Location Here</p>
          <p>Fursona: Grey Wolf/Snow Fox, sometimes a Bird</p>
          <p>Birthday: 23rd August 2007</p>
          <p>Loves: anime, osu, rhythm games</p>
          <p>Gender: he/him/Male</p>
          <p>Hobbys: Tech Stuff, Graphic Design, Web Development</p>
          <p>Working @: Intave Anticheat</p>
          <p><a href="https://scrobble.egirl.ing" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:underline">LastFM</a></p>
        </div>
      </div>

      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <img
            src="/img/about.webp"
            alt="Background"
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
      
      <div className="mt-16 py-8 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-red-400">📇 𝓚𝓷𝓸𝔀𝓵𝓮𝓭𝓰𝓮 📇</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center">
            <div className="bg-transparent border border-red-600/30 shadow-lg shadow-red-600/20 p-4 rounded">Python</div>
            <div className="bg-transparent border border-red-600/30 shadow-lg shadow-red-600/20 p-4 rounded">Nmap</div>
            <div className="bg-transparent border border-red-600/30 shadow-lg shadow-red-600/20 p-4 rounded">Wireshark</div>
            <div className="bg-transparent border border-red-600/30 shadow-lg shadow-red-600/20 p-4 rounded">Metasploit</div>
            <div className="bg-transparent border border-red-600/30 shadow-lg shadow-red-600/20 p-4 rounded">Burp Suite</div>
            <div className="bg-transparent border border-red-600/30 shadow-lg shadow-red-600/20 p-4 rounded">Kali Linux</div>
            <div className="bg-transparent border border-red-600/30 shadow-lg shadow-red-600/20 p-4 rounded">John the Ripper</div>
          </div>
        </div>
      </div>
    </div>
  );
};
