import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";

interface ContactSectionProps {}

const ContactSection = ({}: ContactSectionProps) => {
  const { t } = useLanguage();
  const { theme } = useTheme();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted");
  };

  return (
    <section
      id="contact"
      className={cn(
        "py-16 px-4 md:px-8",
        theme === "dark" ? "bg-gray-800" : "bg-white",
      )}
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2
            className={cn(
              "text-3xl md:text-4xl font-bold mb-4",
              theme === "dark" ? "text-red-300" : "text-red-700",
            )}
          >
            {t("contactTitle")}
          </h2>
          <p
            className={cn(
              "max-w-2xl mx-auto",
              theme === "dark" ? "text-gray-300" : "text-gray-600",
            )}
          >
            {t("contactSubtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card
              className={cn(
                "p-8 h-full",
                theme === "dark" ? "bg-gray-900 border-gray-700" : "",
              )}
            >
              <h3
                className={cn(
                  "text-2xl font-semibold mb-6",
                  theme === "dark" ? "text-red-400" : "text-red-600",
                )}
              >
                {t("contactInfo")}
              </h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div
                    className={cn(
                      "flex items-center justify-center w-10 h-10 rounded-full mr-4 flex-shrink-0",
                      theme === "dark"
                        ? "bg-red-900 text-red-400"
                        : "bg-teal-100 text-red-600",
                    )}
                  >
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4
                      className={cn(
                        "font-medium mb-1",
                        theme === "dark" ? "text-gray-200" : "text-gray-800",
                      )}
                    >
                      {t("address")}
                    </h4>
                    <p
                      className={cn(
                        theme === "dark" ? "text-gray-400" : "text-gray-600",
                      )}
                    >
                      Musterstrasse 123
                      <br />
                      8000 Zürich, Schweiz
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div
                    className={cn(
                      "flex items-center justify-center w-10 h-10 rounded-full mr-4 flex-shrink-0",
                      theme === "dark"
                        ? "bg-red-900 text-red-400"
                        : "bg-teal-100 text-red-600",
                    )}
                  >
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4
                      className={cn(
                        "font-medium mb-1",
                        theme === "dark" ? "text-gray-200" : "text-gray-800",
                      )}
                    >
                      {t("email")}
                    </h4>
                    <a
                      href="mailto:info@scriptscanfly.ch"
                      className={cn(
                        "transition-colors",
                        theme === "dark"
                          ? "text-red-400 hover:text-red-300"
                          : "text-red-600 hover:text-red-800",
                      )}
                    >
                      info@scriptscanfly.ch
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div
                    className={cn(
                      "flex items-center justify-center w-10 h-10 rounded-full mr-4 flex-shrink-0",
                      theme === "dark"
                        ? "bg-red-900 text-red-400"
                        : "bg-teal-100 text-red-600",
                    )}
                  >
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4
                      className={cn(
                        "font-medium mb-1",
                        theme === "dark" ? "text-gray-200" : "text-gray-800",
                      )}
                    >
                      {t("phone")}
                    </h4>
                    <a
                      href="tel:+1234567890"
                      className={cn(
                        "transition-colors",
                        theme === "dark"
                          ? "text-red-400 hover:text-red-300"
                          : "text-red-600 hover:text-red-800",
                      )}
                    >
                      (123) 456-7890
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4
                  className={cn(
                    "font-medium mb-4",
                    theme === "dark" ? "text-gray-200" : "text-gray-800",
                  )}
                >
                  {t("followUs")}
                </h4>
                <div className="flex space-x-4">
                  {/* Social media icons would go here */}
                  {["facebook", "twitter", "instagram", "linkedin"].map(
                    (social, index) => (
                      <a
                        key={index}
                        href={`#${social}`}
                        className={cn(
                          "w-10 h-10 rounded-full flex items-center justify-center transition-colors",
                          theme === "dark"
                            ? "bg-gray-800 hover:bg-red-900 text-gray-300 hover:text-white"
                            : "bg-gray-100 hover:bg-teal-100 text-gray-600 hover:text-red-600",
                        )}
                      >
                        <span className="sr-only">{social}</span>
                        <div className="w-5 h-5" />
                      </a>
                    ),
                  )}
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card
              className={cn(
                "p-8",
                theme === "dark" ? "bg-gray-900 border-gray-700" : "",
              )}
            >
              <h3
                className={cn(
                  "text-2xl font-semibold mb-6",
                  theme === "dark" ? "text-red-400" : "text-red-600",
                )}
              >
                {t("sendMessage")}
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className={cn(
                        "block mb-2 text-sm font-medium",
                        theme === "dark" ? "text-gray-200" : "text-gray-700",
                      )}
                    >
                      {t("name")}
                    </label>
                    <Input
                      id="name"
                      placeholder={t("yourName")}
                      className={cn(
                        theme === "dark"
                          ? "bg-gray-800 border-gray-700 text-white"
                          : "",
                      )}
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className={cn(
                        "block mb-2 text-sm font-medium",
                        theme === "dark" ? "text-gray-200" : "text-gray-700",
                      )}
                    >
                      {t("email")}
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder={t("yourEmail")}
                      className={cn(
                        theme === "dark"
                          ? "bg-gray-800 border-gray-700 text-white"
                          : "",
                      )}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className={cn(
                      "block mb-2 text-sm font-medium",
                      theme === "dark" ? "text-gray-200" : "text-gray-700",
                    )}
                  >
                    {t("message")}
                  </label>
                  <Textarea
                    id="message"
                    placeholder={t("messagePlaceholder")}
                    rows={5}
                    className={cn(
                      theme === "dark"
                        ? "bg-gray-800 border-gray-700 text-white"
                        : "",
                    )}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className={cn(
                    "w-full flex items-center justify-center gap-2",
                    theme === "dark" ? "bg-red-600 hover:bg-red-700" : "",
                  )}
                >
                  {t("sendMessage")} <Send size={16} />
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
