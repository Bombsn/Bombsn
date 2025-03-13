import React from "react";
import { motion } from "framer-motion";
import { Card } from "../ui/card";
import { Separator } from "../ui/separator";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";

interface AboutSectionProps {
  team?: Array<{ name: string; role: string; image: string; bio: string }>;
}

const AboutSection = ({
  team = [
    {
      name: "Thomas Müller",
      role: "Gründer & Geschäftsführer",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=thomas",
      bio: "Mit über 15 Jahren Erfahrung in der Softwareentwicklung hat Thomas zahlreiche digitale Transformationsprojekte für Schweizer Unternehmen geleitet.",
    },
    {
      name: "Sarah Schmid",
      role: "Leiterin Entwicklung",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
      bio: "Sarah ist Expertin für Low-Code-Plattformen und hat sich auf die Entwicklung von benutzerfreundlichen Geschäftsanwendungen spezialisiert.",
    },
    {
      name: "Marco Rossi",
      role: "Projektmanager",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=marco",
      bio: "Marco bringt umfangreiche Erfahrung im Projektmanagement mit und sorgt dafür, dass alle Kundenprojekte termingerecht und im Budget abgeschlossen werden.",
    },
  ],
}: AboutSectionProps) => {
  const { t } = useLanguage();
  const { theme } = useTheme();

  const values = [
    {
      title: t("creativity"),
      description: t("creativityDesc"),
    },
    {
      title: t("excellence"),
      description: t("excellenceDesc"),
    },
    {
      title: t("collaboration"),
      description: t("collaborationDesc"),
    },
  ];

  return (
    <section
      id="about"
      className={cn(
        "py-20 px-4 md:px-8 lg:px-16",
        theme === "dark" ? "bg-gray-900" : "bg-white",
      )}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className={cn(
              "text-3xl md:text-4xl font-bold mb-4",
              theme === "dark" ? "text-red-400" : "text-red-600",
            )}
          >
            {t("aboutTitle")}
          </h2>
          <p
            className={cn(
              "text-lg max-w-3xl mx-auto",
              theme === "dark" ? "text-gray-300" : "text-gray-700",
            )}
          >
            {t("aboutDescription")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card
            className={cn(
              "p-8 shadow-md",
              theme === "dark" ? "bg-gray-800 border-gray-700" : "",
            )}
          >
            <h3
              className={cn(
                "text-2xl font-semibold mb-4",
                theme === "dark" ? "text-red-300" : "text-red-700",
              )}
            >
              {t("ourMission")}
            </h3>
            <p
              className={cn(
                theme === "dark" ? "text-gray-300" : "text-gray-700",
              )}
            >
              {t("missionText")}
            </p>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3
            className={cn(
              "text-2xl font-semibold mb-8 text-center",
              theme === "dark" ? "text-red-300" : "text-red-700",
            )}
          >
            {t("ourValues")}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <Card
                  className={cn(
                    "p-6 h-full flex flex-col justify-between hover:shadow-lg transition-shadow duration-300",
                    theme === "dark" ? "bg-gray-800 border-gray-700" : "",
                  )}
                >
                  <h4
                    className={cn(
                      "text-xl font-medium mb-2",
                      theme === "dark" ? "text-red-400" : "text-red-600",
                    )}
                  >
                    {value.title}
                  </h4>
                  <p
                    className={cn(
                      theme === "dark" ? "text-gray-300" : "text-gray-600",
                    )}
                  >
                    {value.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <Separator
          className={cn("my-12", theme === "dark" ? "bg-gray-700" : "")}
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3
            className={cn(
              "text-2xl font-semibold mb-8 text-center",
              theme === "dark" ? "text-red-300" : "text-red-700",
            )}
          >
            {t("meetTeam")}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                <div
                  className={cn(
                    "w-32 h-32 rounded-full overflow-hidden mb-4 border-2",
                    theme === "dark" ? "border-red-700" : "border-teal-200",
                  )}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full flex"
                  />
                </div>
                <h4
                  className={cn(
                    "text-xl font-medium",
                    theme === "dark" ? "text-red-400" : "text-red-600",
                  )}
                >
                  {member.name}
                </h4>
                <p
                  className={cn(
                    "mb-2",
                    theme === "dark" ? "text-teal-300" : "text-teal-500",
                  )}
                >
                  {member.role}
                </p>
                <p
                  className={cn(
                    "text-center",
                    theme === "dark" ? "text-gray-300" : "text-gray-600",
                  )}
                >
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
