import React from "react";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const { theme } = useTheme();

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  React.useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <motion.button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 p-3 rounded-full ${theme === "dark" ? "bg-red-600" : "bg-red-600"} text-white shadow-lg z-50 ${isVisible ? "flex" : "hidden"}`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.2 }}
      aria-label="Scroll to top"
    >
      <ArrowUp className="h-6 w-6" />
    </motion.button>
  );
};

export default ScrollToTopButton;
