import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Pen, Code, FileText, Film, Mic, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

const ServiceCard = ({
  icon,
  title,
  description,
  className = "",
}: ServiceCardProps) => {
  const { theme } = useTheme();

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={cn("h-full", className)}
    >
      <Card
        className={cn(
          "h-full transition-colors duration-300",
          theme === "dark"
            ? "bg-gray-800 border-red-900 hover:border-red-700"
            : "bg-white border-teal-100 hover:border-teal-300",
        )}
      >
        <CardHeader>
          <div
            className={cn(
              "flex items-center justify-center w-12 h-12 rounded-full mb-4",
              theme === "dark"
                ? "bg-red-900 text-red-400"
                : "bg-teal-100 text-red-600",
            )}
          >
            {icon}
          </div>
          <CardTitle
            className={cn(
              "text-xl font-bold",
              theme === "dark" ? "text-red-300" : "text-red-900",
            )}
          >
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription
            className={cn(theme === "dark" ? "text-gray-300" : "text-gray-600")}
          >
            {description}
          </CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  );
};

interface ServicesProps {}

const ServicesSection = ({}: ServicesProps) => {
  const { t } = useLanguage();
  const { theme } = useTheme();

  const services = [
    {
      icon: <Code size={24} />,
      title: t("screenplayWriting"),
      description: t("screenplayDesc"),
    },
    {
      icon: <Pen size={24} />,
      title: t("technicalWriting"),
      description: t("technicalDesc"),
    },
    {
      icon: <FileText size={24} />,
      title: t("contentCreation"),
      description: t("contentDesc"),
    },
    {
      icon: <Film size={24} />,
      title: t("videoScripts"),
      description: t("videoDesc"),
    },
    {
      icon: <Mic size={24} />,
      title: t("podcastScripts"),
      description: t("podcastDesc"),
    },
    {
      icon: <BookOpen size={24} />,
      title: t("storytelling"),
      description: t("storytellingDesc"),
    },
  ];

  return (
    <section
      id="services"
      className={cn(
        "py-20 px-4 md:px-8",
        theme === "dark" ? "bg-gray-800" : "bg-gray-50",
      )}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className={cn(
              "text-3xl md:text-4xl font-bold mb-4",
              theme === "dark" ? "text-red-300" : "text-red-900",
            )}
          >
            {t("servicesTitle")}
          </h2>
          <p
            className={cn(
              "text-xl max-w-3xl mx-auto",
              theme === "dark" ? "text-gray-300" : "text-gray-600",
            )}
          >
            {t("servicesSubtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
