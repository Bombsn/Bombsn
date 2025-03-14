import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";
import Logo from "@/components/ui/logo";

interface SparkleProps {
  color: string;
  size: number;
  style: React.CSSProperties;
  moveX?: number;
  moveY?: number;
}

const Sparkle = ({
  color,
  size,
  style,
  moveX = 0,
  moveY = 0,
}: SparkleProps) => {
  return (
    <motion.div
      className="absolute rounded-full z-0"
      style={{
        ...style,
        width: size,
        height: size,
        backgroundColor: color,
      }}
      animate={{
        opacity: [0, 0.9, 0],
        scale: [0, 1, 0],
        x: moveX ? [0, moveX, 0] : undefined,
        y: moveY ? [0, moveY, 0] : undefined,
      }}
      transition={{
        duration: Math.random() * 2 + 1.5,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      }}
    />
  );
};

interface HeroSectionProps {
  title?: string;
  ctaLink?: string;
  logoSrc?: string;
}

const HeroSection = ({
  title = "scriptsCanFly",
  ctaLink = "#services",
  logoSrc = "/vite.svg",
}: HeroSectionProps) => {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const [sparkles, setSparkles] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    const generateSparkles = () => {
      const newSparkles = [];
      const count = 120; // Increased dot count

      for (let i = 0; i < count; i++) {
        // Enhanced colors with stronger opacity
        const redColor =
          theme === "dark"
            ? `rgba(239, 68, 68, ${Math.random() * 0.6 + 0.4})` // Stronger red in dark mode
            : `rgba(239, 68, 68, ${Math.random() * 0.4 + 0.2})`; // Stronger red in light mode
        const tealColor =
          theme === "dark"
            ? `rgba(45, 212, 191, ${Math.random() * 0.6 + 0.4})` // Stronger teal in dark mode
            : `rgba(20, 184, 166, ${Math.random() * 0.4 + 0.2})`; // Stronger teal in light mode

        // Add some white/bright dots for extra contrast
        const whiteColor =
          theme === "dark"
            ? `rgba(255, 255, 255, ${Math.random() * 0.5 + 0.3})`
            : `rgba(255, 255, 255, ${Math.random() * 0.7 + 0.3})`;

        // Add some yellow/gold dots for variety
        const goldColor =
          theme === "dark"
            ? `rgba(250, 204, 21, ${Math.random() * 0.5 + 0.3})`
            : `rgba(234, 179, 8, ${Math.random() * 0.4 + 0.2})`;

        // More color variety
        const colorRandom = Math.random();
        let color;
        if (colorRandom < 0.4) {
          color = redColor;
        } else if (colorRandom < 0.7) {
          color = tealColor;
        } else if (colorRandom < 0.9) {
          color = whiteColor;
        } else {
          color = goldColor;
        }

        // More size variety
        const size = Math.random() * 12 + 2;
        const delay = Math.random() * 5;

        // Random movement values
        const moveX = (Math.random() - 0.5) * 30; // -15px to +15px movement
        const moveY = (Math.random() - 0.5) * 30; // -15px to +15px movement

        const style = {
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${delay}s`,
          filter: Math.random() > 0.8 ? "blur(1px)" : "none", // Some dots are slightly blurred
        };

        newSparkles.push(
          <Sparkle
            key={i}
            color={color}
            size={size}
            style={style}
            moveX={moveX}
            moveY={moveY}
          />,
        );
      }

      setSparkles(newSparkles);
    };

    generateSparkles();
    const interval = setInterval(generateSparkles, 8000); // Slightly faster regeneration

    return () => clearInterval(interval);
  }, [theme]);

  return (
    <section
      className={cn(
        "relative w-full h-screen flex items-center justify-center overflow-hidden",
        theme === "dark" ? "bg-gray-900" : "bg-white",
      )}
    >
      {/* Sparkling dots */}
      {sparkles}

      {/* Background gradient with stronger contrast */}
      <div
        className={cn(
          "absolute inset-0 z-0 w-full",
          theme === "dark"
            ? "bg-gradient-to-b from-red-900/60 via-gray-900 to-gray-950"
            : "bg-gradient-to-b from-red-100/90 via-white to-white",
        )}
      ></div>

      {/* Animated orbs */}
      <motion.div
        className={cn(
          "absolute top-1/4 right-1/4 w-64 h-64 rounded-full blur-3xl z-0",
          theme === "dark" ? "bg-red-600" : "bg-red-300", // Stronger red in light mode
        )}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{
          scale: [0.8, 1.2, 0.8],
          opacity: [0.3, 0.5, 0.3], // Increased opacity for stronger contrast
          x: [0, 60, 0], // More movement
          y: [0, -40, 0], // More movement
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className={cn(
          "absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full blur-3xl z-0",
          theme === "dark" ? "bg-teal-500" : "bg-teal-300", // Stronger teal
        )}
        initial={{ scale: 1, opacity: 0 }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.5, 0.3], // Increased opacity
          x: [0, -70, 0], // More movement
          y: [0, 50, 0], // More movement
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <motion.div
        className={cn(
          "absolute top-2/3 right-1/3 w-40 h-40 rounded-full blur-2xl z-0",
          theme === "dark" ? "bg-red-400" : "bg-red-200", // Stronger red
        )}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{
          scale: [0.9, 1.3, 0.9],
          opacity: [0.25, 0.4, 0.25], // Increased opacity
          x: [0, 40, 0], // More movement
          y: [0, 50, 0], // More movement
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Additional orb for more visual interest */}
      <motion.div
        className={cn(
          "absolute top-1/3 left-1/3 w-56 h-56 rounded-full blur-3xl z-0",
          theme === "dark" ? "bg-yellow-500" : "bg-yellow-200", // Gold/yellow orb
        )}
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{
          scale: [0.7, 1.1, 0.7],
          opacity: [0.2, 0.35, 0.2],
          x: [0, 30, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      />

      {/* Content container */}
      <div className="container relative mx-auto px-4 md:px-6 z-10 w-full max-w-none">
        <motion.div
          className="flex flex-col items-center text-center w-full mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Logo */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <Logo size="lg" />
          </motion.div>

          {/* Title */}
          <motion.h1
            className={cn(
              "text-5xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight drop-shadow-sm",
              theme === "dark" ? "text-red-50" : "text-red-900", // Brighter text in dark mode
            )}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.02 }} // Subtle hover effect
          >
            {title}
          </motion.h1>

          {/* Tagline */}
          <motion.h2
            className={cn(
              "text-xl md:text-2xl lg:text-3xl mb-6 font-medium drop-shadow-sm",
              theme === "dark" ? "text-teal-200" : "text-teal-700", // Brighter teal in dark mode
            )}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.02 }} // Subtle hover effect
          >
            {t("tagline")}
          </motion.h2>

          {/* Description */}
          <motion.p
            className={cn(
              "mb-8 max-w-2xl text-lg",
              theme === "dark" ? "text-gray-300" : "text-gray-600",
            )}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {t("heroDescription")}
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              className={cn(
                "text-white px-8 py-6 h-auto text-lg font-medium rounded-full shadow-xl", // Stronger shadow
                theme === "dark"
                  ? "bg-red-500 hover:bg-red-600 shadow-red-500/30 border border-red-400/20" // Added subtle border
                  : "bg-red-600 hover:bg-red-700 shadow-red-500/30 border border-red-500/10", // Added subtle border
              )}
              asChild
            >
              <a href={ctaLink} className="flex items-center gap-2">
                {t("exploreServices")} <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <motion.div
          className={cn(
            "w-6 h-10 rounded-full border-2 flex justify-center",
            theme === "dark" ? "border-gray-400" : "border-gray-400",
          )}
        >
          <motion.div
            className={cn(
              "w-1.5 h-1.5 rounded-full mt-2",
              theme === "dark" ? "bg-red-400" : "bg-red-500",
            )}
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>

      {/* Decorative wave at bottom */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 100"
          className="w-full"
        >
          <path
            fill={theme === "dark" ? "#111827" : "#ffffff"}
            fillOpacity="1"
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,42.7C1120,32,1280,32,1360,32L1440,32L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
