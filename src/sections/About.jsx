import { motion } from "framer-motion";

export const About = () => {
  // Your tech stack divided into two arrays for dual-marquee scrolling
  const topRowSkills = [
    "React", "Next.js", "Node.js", "Express", "MongoDB", "Vite", "Tailwind CSS"
  ];
  const bottomRowSkills = [
    "IoT (ESP8266)", "OpenCV", "MediaPipe", "Python", "C++", "DSA", "Cyber-Physical Systems"
  ];

  return (
    <section className="relative w-full py-24 px-6 bg-[#001621] overflow-hidden" id="about">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF4103] rounded-full blur-[120px] opacity-5 pointer-events-none animate-slow-drift" />

      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-24 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-[#EEF2F6] flex items-center gap-4">
            <span className="w-12 h-[2px] bg-[#FF4103]" />
            About Me
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Left Column: The Narrative (Glass Card) */}
          <div className="glass-strong rounded-3xl p-8 md:p-10 animate-fade-in animation-delay-200">
            <p className="text-[#EEF2F6] text-lg leading-relaxed mb-6">
              I specialize in bridging the gap between high-performance software engineering and practical healthcare technology. Currently pursuing a B.Tech in CSE with a focus on Health Informatics at VIT Bhopal University, my work is driven by a desire to build systems that matter.
            </p>
            <p className="text-[#8EA8B8] text-lg leading-relaxed mb-6">
              As a Software Development Engineer, my expertise spans the full MERN stack to build dual-sided web marketplaces, as well as integrating hardware sensors for real-time cloud monitoring. I thrive on architecting clean, scalable solutions whether I'm writing complex API routes or deploying machine learning models for computer vision.
            </p>
            <p className="text-[#8EA8B8] text-lg leading-relaxed">
              When I step away from the IDE, I'm usually on the cricket pitch, analyzing the board in a game of chess, or grinding competitive ranks in Valorant and BGMI.
            </p>
          </div>

          {/* Right Column: The Tech Stack (Infinite Marquee) */}
          <div className="flex flex-col gap-6 relative animate-fade-in animation-delay-400 overflow-hidden">
            
            {/* Fade gradients for the edges of the marquee */}
            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#001621] to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#001621] to-transparent z-10" />

            {/* Top Marquee */}
            <div className="flex overflow-hidden group">
              <div className="flex space-x-4 animate-marquee group-hover:[animation-play-state:paused]">
                {/* Render twice for seamless looping */}
                {[...topRowSkills, ...topRowSkills].map((skill, index) => (
                  <div 
                    key={index}
                    className="glass px-6 py-3 rounded-full text-[#EEF2F6] font-medium whitespace-nowrap border border-[#004566] hover:border-[#FF4103] hover:text-[#FF4103] transition-colors duration-300"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Marquee (Reverse direction by using a negative translation in a custom tailwind class or just letting it flow) */}
            <div className="flex overflow-hidden group ml-12">
              <div className="flex space-x-4 animate-marquee group-hover:[animation-play-state:paused]" style={{ animationDirection: 'reverse' }}>
                {[...bottomRowSkills, ...bottomRowSkills].map((skill, index) => (
                  <div 
                    key={index}
                    className="glass px-6 py-3 rounded-full text-[#EEF2F6] font-medium whitespace-nowrap border border-[#004566] hover:border-[#FF4103] hover:text-[#FF4103] transition-colors duration-300"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};