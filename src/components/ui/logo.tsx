import React from "react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/contexts/ThemeContext";

type LogoSize = "sm" | "md" | "lg";
type LogoVariant = "default" | "footer";

interface LogoProps {
  className?: string;
  size?: LogoSize;
  variant?: LogoVariant;
}

const Logo = ({ className, size = "md", variant = "default" }: LogoProps) => {
  const { theme } = useTheme();

  const sizeClasses: Record<LogoSize, string> = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  };

  // Select the appropriate logo based on theme and variant
  let logoSrc = "";
  if (variant === "footer") {
    logoSrc = `${import.meta.env.BASE_URL}logo-white.png`;
  } else if (theme === "dark") {
    logoSrc = `${import.meta.env.BASE_URL}logo-dark.png`;
  } else {
    logoSrc = `${import.meta.env.BASE_URL}logo-light.png`;
  }

  return <div className={cn("flex items-center", className)}></div>;
};

export default Logo;
