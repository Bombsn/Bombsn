import React from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";

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

  return (
    <section
      className={cn(
        "relative w-full h-[700px] flex items-center justify-center overflow-hidden",
        theme === "dark" ? "bg-gray-900" : "bg-white",
      )}
    >
      {/* Background gradient */}
      <div
        className={cn(
          "absolute inset-0 z-0",
          theme === "dark"
            ? "bg-gradient-to-b from-red-950 to-gray-900"
            : "bg-gradient-to-b from-red-50 to-white",
        )}
      ></div>

      {/* Animated circles for visual interest */}
      <motion.div
        className={cn(
          "absolute top-20 right-20 w-64 h-64 rounded-full opacity-30 z-0",
          theme === "dark" ? "bg-red-800" : "bg-red-100",
        )}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{
          scale: [0.8, 1.2, 0.8],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className={cn(
          "absolute bottom-10 left-20 w-40 h-40 rounded-full opacity-20 z-0",
          theme === "dark" ? "bg-teal-700" : "bg-teal-200",
        )}
        initial={{ scale: 1, opacity: 0 }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Content container */}
      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          {/* Logo */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            {logoSrc ? (
              <img
                src={logoSrc}
                alt="scriptsCanFly Logo"
                className="h-20 w-auto"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src =
                    "https://api.dicebear.com/7.x/initials/svg?seed=SCF&backgroundColor=0369a1&fontSize=36";
                }}
              />
            ) : (
              <div
                className={cn(
                  "h-20 w-20 rounded-full flex items-center justify-center text-white text-2xl font-bold",
                  theme === "dark" ? "bg-red-500" : "bg-red-600",
                )}
              >
                SCF
              </div>
            )}
          </motion.div>

          {/* Title */}
          <motion.h1
            className={cn(
              "text-4xl md:text-5xl lg:text-6xl font-bold mb-4",
              theme === "dark" ? "text-red-100" : "text-red-900",
            )}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {title}
          </motion.h1>

          {/* Tagline */}
          <motion.h2
            className={cn(
              "text-xl md:text-2xl mb-6",
              theme === "dark" ? "text-teal-300" : "text-teal-700",
            )}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {t("tagline")}
          </motion.h2>

          {/* Description */}
          <motion.p
            className={cn(
              "mb-8 max-w-2xl",
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
                "text-white px-8 py-6 h-auto text-base",
                theme === "dark"
                  ? "bg-red-500 hover:bg-red-600"
                  : "bg-red-600 hover:bg-red-700",
              )}
              asChild
            >
              <a href={ctaLink}>
                {t("exploreServices")} <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>

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
