import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

export interface PortfolioItemProps {
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  link?: string;
}

export const PortfolioItem = ({
  title = "Project Title",
  description = "A brief description of the project and the scriptwriting work involved.",
  imageUrl = "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80",
  category = "Screenplay",
  link = "#",
}: PortfolioItemProps) => {
  const { t } = useLanguage();
  const { theme } = useTheme();

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <Card
        className={cn(
          "h-full flex flex-col overflow-hidden",
          theme === "dark" ? "bg-gray-800 border-gray-700" : "bg-white",
        )}
      >
        <div className="relative overflow-hidden aspect-video">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        <CardHeader>
          <div className="flex justify-between items-start">
            <CardTitle
              className={cn(
                "text-xl font-bold",
                theme === "dark" ? "text-white" : "",
              )}
            >
              {title}
            </CardTitle>
            <span
              className={cn(
                "text-xs px-2 py-1 rounded-full",
                theme === "dark"
                  ? "bg-red-900 text-red-200"
                  : "bg-teal-100 text-red-800",
              )}
            >
              {t(category.toLowerCase())}
            </span>
          </div>
        </CardHeader>
        <CardContent className="flex-grow">
          <p
            className={cn(
              "text-sm",
              theme === "dark" ? "text-gray-300" : "text-gray-600",
            )}
          >
            {description}
          </p>
        </CardContent>
        <CardFooter className="pt-2">
          <Button
            variant="ghost"
            size="sm"
            asChild
            className={cn(
              "p-0",
              theme === "dark"
                ? "text-red-400 hover:text-red-300"
                : "text-red-600 hover:text-red-800",
            )}
          >
            <a href={link} className="flex items-center gap-1">
              {t("viewProject")} <ExternalLink size={14} />
            </a>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

interface PortfolioSectionProps {}

const PortfolioSection = ({}: PortfolioSectionProps) => {
  const { t } = useLanguage();
  const { theme } = useTheme();

  return (
    <section
      id="portfolio"
      className={cn(
        "py-20 w-full",
        theme === "dark" ? "bg-gray-900" : "bg-gray-50",
      )}
    >
      <div className="container mx-auto px-4 w-full max-w-none">
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
              theme === "dark" ? "text-gray-100" : "text-gray-900",
            )}
          >
            {t("portfolioTitle")}
          </h2>
          <p
            className={cn(
              "max-w-2xl mx-auto",
              theme === "dark" ? "text-gray-300" : "text-gray-600",
            )}
          >
            {t("portfolioSubtitle")}
          </p>
        </motion.div>

        <div className="flex flex-col items-center justify-center space-y-8 py-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={cn(
              "max-w-3xl p-8 rounded-xl text-center",
              theme === "dark" ? "bg-gray-800" : "bg-white shadow-xl",
            )}
          >
            <h3
              className={cn(
                "text-2xl md:text-3xl font-bold mb-4",
                theme === "dark" ? "text-white" : "text-gray-900",
              )}
            >
              {t("exploreOurProjects") || "Explore Our Complete Portfolio"}
            </h3>
            <p
              className={cn(
                "mb-6 text-lg",
                theme === "dark" ? "text-gray-300" : "text-gray-600",
              )}
            >
              {t("portfolioCTAText") ||
                "Discover our full range of projects and see how we've helped businesses transform their digital presence."}
            </p>
            <Button
              asChild
              size="lg"
              className={cn(
                "group text-lg px-8 py-6",
                theme === "dark" ? "bg-red-600 hover:bg-red-700" : "",
              )}
            >
              <Link to="/projects" className="flex items-center">
                {t("viewAllProjects") || "View All Projects"}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl"
          >
            {[1, 2, 3].map((_, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg aspect-video group"
              >
                <img
                  src={`https://images.unsplash.com/photo-${["1542744173-8e7e53415bb0", "1485846234645-a62644f84728", "1503676260728-1c00da094a0b"][index]}?w=600&q=80`}
                  alt="Project preview"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                  <p className="text-white font-medium">
                    {
                      [
                        "Corporate Portal",
                        "Customer Management",
                        "E-Learning Platform",
                      ][index]
                    }
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
