import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import {
  ArrowRight,
  ChevronDown,
  GitBranch,
  Link2,
  Mail,
  Download,
  Code2,
  Database,
  Terminal,
  Server,
} from "lucide-react";

const GlobalStyles = () => (
  <style>{`
    :root {
      --color-background: #001621;
      --color-foreground: #eef2f6;
      --color-surface: #00314a;
      --color-card: #002436;
      --color-primary: #FF4103;
      --color-primary-foreground: #ffffff;
      --color-muted: #002e45;
      --color-muted-foreground: #8ea8b8;
      --color-border: #004566;
    }

    body {
      background-color: var(--color-background);
      color: var(--color-foreground);
      margin: 0;
      font-family: system-ui, -apple-system, sans-serif;
    }

    .glass {
      background-color: rgba(0, 36, 54, 0.6);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border: 1px solid rgba(0, 69, 102, 0.6);
      box-shadow: inset 0 1px 1px rgba(238, 242, 246, 0.05);
    }

    .glass-strong {
      background-color: rgba(0, 49, 74, 0.85);
      backdrop-filter: blur(24px);
      -webkit-backdrop-filter: blur(24px);
      border: 1px solid rgba(0, 69, 102, 0.8);
      box-shadow: inset 0 1px 1px rgba(238, 242, 246, 0.1);
    }

    .glow-text {
      text-shadow:
        0 0 10px rgba(255, 65, 3, 0.6),
        0 0 20px rgba(255, 65, 3, 0.4),
        0 0 40px rgba(255, 65, 3, 0.2);
    }

    @keyframes fade-in {
      from { opacity: 0; transform: translateY(20px); filter: blur(10px); }
      to { opacity: 1; transform: translateY(0); filter: blur(0); }
    }

    @keyframes slow-drift {
      0%, 100% { transform: translate(0, 0); }
      25% { transform: translate(20px, -30px); }
      50% { transform: translate(-15px, -20px); }
      75% { transform: translate(30px, 10px); }
    }

    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }

    @keyframes marquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }

    @keyframes shimmer {
      100% { transform: translateX(200%); }
    }

    .animate-fade-in { animation: fade-in 0.8s ease-out both; }
    .animate-float { animation: float 4s ease-in-out infinite; }
    .animate-marquee { animation: marquee 30s linear infinite; }
    .animate-shimmer { animation: shimmer 1.5s cubic-bezier(0.4, 0, 0.2, 1) infinite; }

    .animation-delay-100 { animation-delay: 100ms; }
    .animation-delay-200 { animation-delay: 200ms; }
    .animation-delay-300 { animation-delay: 300ms; }
    .animation-delay-400 { animation-delay: 400ms; }
    .animation-delay-500 { animation-delay: 500ms; }
    .animation-delay-600 { animation-delay: 600ms; }
    .animation-delay-800 { animation-delay: 800ms; }
  `}</style>
);

const Button = ({ className = "", variant = "primary", children, ...props }) => {
  const baseClasses = "relative overflow-hidden rounded-full font-semibold transition-all duration-300 ease-out active:scale-95 group flex items-center justify-center px-6 py-2.5 text-base gap-2 cursor-pointer";

  if (variant === "secondary") {
    return (
      <button className={`${baseClasses} glass hover:bg-[#00314a] text-[#eef2f6] ${className}`} {...props}>
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </button>
    );
  }

  return (
    <button className={`${baseClasses} bg-[#FF4103] text-white ${className}`} {...props}>
      <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_20px_#FF4103] blur-md pointer-events-none" />
      <span className="absolute inset-0 rounded-full border border-white/25 group-hover:border-white/40 transition-colors duration-300 pointer-events-none" />
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:animate-shimmer pointer-events-none -skew-x-12" />
      <span className="relative z-10 flex items-center justify-center gap-2 transform group-hover:translate-x-0.5 transition-transform duration-300">
        {children}
      </span>
    </button>
  );
};

export const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const springConfig = { mass: 0.2, stiffness: 70, damping: 14 };
  const videoOpacity = useSpring(useTransform(scrollYProgress, [0, 0.8], [0.6, 0]), springConfig);
  const videoScale = useSpring(useTransform(scrollYProgress, [0, 1], [1, 1.15]), springConfig);

  const skills = [
    "React.js",
    "Node.js",
    "MongoDB",
    "Express.js",
    "C++",
    "JavaScript",
    "Tailwind CSS",
    "Redux Toolkit",
    "SQL",
    "Git & GitHub",
    "Azure",
    "REST APIs",
  ];

  return (
    <section ref={containerRef} className="relative min-h-screen overflow-hidden bg-[#001621] text-[#eef2f6]" aria-label="Hero section">
      <GlobalStyles />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#00314a] blur-[120px] opacity-50" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[40%] h-[40%] rounded-full bg-[#FF4103] blur-[150px] opacity-10" />
      </div>

      <motion.div
        style={{ opacity: videoOpacity, scale: videoScale }}
        className="absolute inset-0 z-0 w-full h-full overflow-hidden will-change-transform"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#001621]/70 via-transparent to-[#001621]/90" />
        <video autoPlay loop muted playsInline className="w-full h-full object-cover select-none">
          <source src="/hero-background.mp4" type="video/mp4" />
        </video>
      </motion.div>

      <div className="container mx-auto px-6 pt-24 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium border border-[#FF4103]/30 text-[#FF4103]">
                <span className="w-2 h-2 bg-[#FF4103] rounded-full animate-pulse shadow-[0_0_8px_#FF4103]" />
                Software Engineer • MERN Stack
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100 tracking-tight">
                Hi, I&apos;m <span className="text-white">Pranjal</span>
                <br />
                Building <span className="text-[#FF4103] glow-text">scalable</span>
                <br />
                systems with
                <br />
                <span className="font-serif italic font-normal text-[#8ea8b8]">precision.</span>
              </h1>

              <p className="text-lg text-[#8ea8b8] max-w-lg animate-fade-in animation-delay-200 leading-relaxed">
                Computer Science Engineering undergraduate at VIT Bhopal.
                Specializing in full-stack web development, intelligent databases,
                and high-performance UI architectures.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <Button>
                View Projects <ArrowRight className="w-4 h-4" />
              </Button>
              <Button variant="secondary">
                <Download className="w-4 h-4" />
                Download Resume
              </Button>
            </div>

            <div className="flex items-center gap-4 animate-fade-in animation-delay-400 pt-4">
              <span className="text-sm font-medium text-[#8ea8b8]">Connect:</span>
              {[
                { icon: GitBranch, href: "https://github.com/Pranjal-k22", label: "GitHub" },
                { icon: Link2, href: "https://linkedin.com/in/pranjal-karan", label: "LinkedIn" },
                { icon: Mail, href: "mailto:pranjalkaran2004@gmail.com", label: "Email" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-full glass hover:bg-[#FF4103]/10 hover:text-[#FF4103] hover:border-[#FF4103]/50 transition-all duration-300 group"
                >
                  <social.icon className="w-5 h-5 transition-transform group-hover:scale-110" />
                </a>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-in animation-delay-300 hidden lg:block">
            <div className="relative max-w-md mx-auto aspect-square">
              <div className="absolute inset-10 rounded-full bg-gradient-to-br from-[#FF4103]/20 via-transparent to-[#004060]/40 blur-3xl animate-pulse" />
              <div className="absolute inset-4 glass rounded-3xl p-6 glow-border flex flex-col justify-between overflow-hidden group">
                <div className="space-y-3 opacity-60">
                  <div className="h-3 w-3/4 rounded bg-gradient-to-r from-[#FF4103] to-transparent opacity-50" />
                  <div className="h-3 w-1/2 rounded bg-[#004566]" />
                  <div className="h-3 w-5/6 rounded bg-[#004566]" />
                  <div className="h-3 w-2/3 rounded bg-[#004566]" />
                </div>

                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="relative w-32 h-32">
                    <div className="absolute inset-0 rounded-full border border-[#FF4103]/30 animate-[spin_10s_linear_infinite]" />
                    <div className="absolute inset-2 rounded-full border border-dashed border-[#8ea8b8]/30 animate-[spin_15s_linear_infinite_reverse]" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Code2 className="w-12 h-12 text-[#FF4103] glow-text" />
                    </div>
                  </div>
                </div>

                <div className="absolute top-8 -right-6 glass-strong rounded-xl p-3 animate-float flex items-center gap-3">
                  <div className="p-2 bg-[#FF4103]/20 rounded-lg">
                    <Server className="w-5 h-5 text-[#FF4103]" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">REST APIs</div>
                    <div className="text-xs text-[#8ea8b8]">Express & Node</div>
                  </div>
                </div>

                <div className="absolute bottom-12 -left-6 glass-strong rounded-xl p-3 animate-float animation-delay-500 flex items-center gap-3">
                  <div className="p-2 bg-[#004060] rounded-lg">
                    <Database className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">MongoDB</div>
                    <div className="text-xs text-[#8ea8b8]">NoSQL Data</div>
                  </div>
                </div>

                <div className="mt-auto w-full glass-strong rounded-lg p-3 flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-[#FF4103]" />
                  <span className="text-xs text-white font-mono">npm run build --modern</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 animate-fade-in animation-delay-600">
          <p className="text-xs uppercase tracking-widest text-[#8ea8b8] mb-6 text-center font-semibold">Core Technologies</p>
          <div className="relative overflow-hidden py-4">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#001621] to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#001621] to-transparent z-10" />
            <div className="flex animate-marquee whitespace-nowrap">
              {[...skills, ...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="flex-shrink-0 px-8 flex items-center gap-2 group cursor-default">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#004566] group-hover:bg-[#FF4103] transition-colors" />
                  <span className="text-xl font-medium text-[#8ea8b8] group-hover:text-white transition-colors duration-300">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800 z-20">
        <a href="#projects" className="flex flex-col items-center gap-2 text-[#8ea8b8] hover:text-[#FF4103] transition-colors group">
          <span className="text-[10px] uppercase tracking-widest font-semibold">Scroll</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
