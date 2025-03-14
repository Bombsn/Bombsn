import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import Logo from "@/components/ui/logo";

type FooterProps = {
  className?: string;
};

const Footer = ({ className }: FooterProps) => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();
  const { theme } = useTheme();

  return (
    <footer
      className={cn(
        "w-full py-12",
        theme === "dark" ? "bg-gray-900 text-white" : "bg-red-900 text-white",
        className,
      )}
    >
      <div className="container mx-auto px-4 w-full max-w-none">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Logo size="md" variant="footer" />
              <h3 className="text-xl font-bold">scriptsCanFly</h3>
            </div>
            <p className="text-red-100 mb-4">
              Innovative Low-Code/No-Code Lösungen für Schweizer Unternehmen.
            </p>
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:text-teal-200 hover:bg-red-800"
              >
                <Facebook size={20} />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:text-teal-200 hover:bg-red-800"
              >
                <Twitter size={20} />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:text-teal-200 hover:bg-red-800"
              >
                <Linkedin size={20} />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t("quickLinks")}</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-red-100 hover:text-white transition-colors"
                >
                  {t("aboutUs")}
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-red-100 hover:text-white transition-colors"
                >
                  {t("services")}
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="text-red-100 hover:text-white transition-colors"
                >
                  {t("portfolio")}
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-red-100 hover:text-white transition-colors"
                >
                  {t("contact")}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t("contactUs")}</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail size={16} className="mr-2" />
                <a
                  href="mailto:info@scriptscanfly.ch"
                  className="text-red-100 hover:text-white transition-colors"
                >
                  info@scriptscanfly.ch
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2" />
                <a
                  href="tel:+41445556677"
                  className="text-red-100 hover:text-white transition-colors"
                >
                  +41 44 555 66 77
                </a>
              </li>
              <li className="flex items-start">
                <MapPin size={16} className="mr-2 mt-1" />
                <span className="text-red-100">
                  Musterstrasse 123
                  <br />
                  8000 Zürich, Schweiz
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t("stayUpdated")}</h3>
            <p className="text-red-100 mb-4">{t("newsletterText")}</p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder={t("emailPlaceholder")}
                className="px-4 py-2 rounded-md text-gray-900 w-full"
              />
              <Button className="bg-red-600 hover:bg-red-700 text-white">
                {t("subscribe")}
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-red-800 mt-8 pt-8 text-center text-red-200">
          <p>
            &copy; {currentYear} scriptsCanFly. {t("allRightsReserved")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
