import React, { useState } from "react";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import Logo from "@/components/ui/logo";

interface NavbarProps {
  logo?: string;
  links?: Array<{ label: string; href: string }>;
}

const Navbar = ({
  logo = "scriptsCanFly",
  links = [
    { label: "about", href: "#about" },
    { label: "services", href: "#services" },
    { label: "projects", href: "/projects" },
    { label: "contact", href: "#contact" },
  ],
}: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useLanguage();
  const { theme } = useTheme();

  // Handle scroll effect for navbar
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full",
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900",
        isScrolled ? "shadow-md py-2" : "py-4",
      )}
    >
      <div className="w-full max-w-none px-4 mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <span
            className={cn(
              "text-2xl font-bold",
              theme === "dark" ? "text-red-400" : "text-red-600",
            )}
          >
            {logo}
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className={cn(
                "transition-colors font-medium",
                theme === "dark"
                  ? "text-gray-300 hover:text-red-400"
                  : "text-gray-700 hover:text-red-600",
              )}
            >
              {t(link.label)}
            </a>
          ))}

          <div className="flex items-center space-x-2 ml-4">
            <LanguageSwitcher />
            <ThemeToggle />
            <Button
              className={cn(
                theme === "dark"
                  ? "bg-red-500 hover:bg-red-600 text-white"
                  : "bg-red-600 hover:bg-red-700 text-white",
              )}
            >
              {t("getStarted")}
            </Button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center space-x-2">
          <LanguageSwitcher />
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-10 w-10">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className={cn(
                "w-[300px] sm:w-[400px]",
                theme === "dark" ? "bg-gray-900 text-white" : "",
              )}
            >
              <div className="flex flex-col gap-6 mt-10">
                {links.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className={cn(
                      "text-lg font-medium transition-colors",
                      theme === "dark"
                        ? "text-gray-300 hover:text-red-400"
                        : "text-gray-700 hover:text-red-600",
                    )}
                  >
                    {t(link.label)}
                  </a>
                ))}
                <Button
                  className={cn(
                    "mt-4 w-full",
                    theme === "dark"
                      ? "bg-red-500 hover:bg-red-600 text-white"
                      : "bg-red-600 hover:bg-red-700 text-white",
                  )}
                >
                  {t("getStarted")}
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
