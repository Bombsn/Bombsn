import React from "react";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import ScrollToTopButton from "../layout/ScrollToTopButton";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";
import { ExternalLink, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ProjectItemProps {
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  link?: string;
}

const ProjectItem = ({
  title = "Project Title",
  description = "A brief description of the project and the scriptwriting work involved.",
  imageUrl = "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80",
  category = "Screenplay",
  link = "#",
}: ProjectItemProps) => {
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

const ProjectsPage = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();

  const items = [
    {
      title: "Unternehmensportal",
      description:
        "Ein internes Mitarbeiterportal für ein Schweizer Finanzunternehmen, das Prozesse automatisiert und die Kommunikation verbessert.",
      imageUrl:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80",
      category: "Corporate",
      link: "#",
    },
    {
      title: "Kundenmanagement-App",
      description:
        "Eine Web-App zur Verwaltung von Kundenbeziehungen, die mit FlutterFlow entwickelt wurde und nahtlos mit bestehenden Systemen integriert ist.",
      imageUrl:
        "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80",
      category: "Screenplay",
      link: "#",
    },
    {
      title: "Lernplattform",
      description:
        "Eine E-Learning-Plattform für eine Schweizer Bildungseinrichtung mit interaktiven Kursen und automatisierter Bewertung.",
      imageUrl:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
      category: "Educational",
      link: "#",
    },
    {
      title: "E-Commerce-Lösung",
      description:
        "Ein Online-Shop für einen lokalen Händler mit Produktkatalog, Zahlungsabwicklung und Bestandsverwaltung.",
      imageUrl:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
      category: "Marketing",
      link: "#",
    },
    {
      title: "Inventar-App",
      description:
        "Eine mobile Anwendung zur Bestandsverwaltung mit Barcode-Scanning und Echtzeit-Synchronisation.",
      imageUrl:
        "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&q=80",
      category: "Audio",
      link: "#",
    },
    {
      title: "Workflow-Automatisierung",
      description:
        "Eine Automatisierungslösung für einen Fertigungsbetrieb, die Bestellprozesse optimiert und Fehler reduziert.",
      imageUrl:
        "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80",
      category: "Commercial",
      link: "#",
    },
  ];

  const categories = ["All", ...new Set(items.map((item) => item.category))];
  const [activeCategory, setActiveCategory] = React.useState("All");

  const filteredItems =
    activeCategory === "All"
      ? items
      : items.filter((item) => item.category === activeCategory);

  return (
    <div
      className={cn(
        "min-h-screen",
        theme === "dark" ? "bg-gray-900" : "bg-white",
      )}
    >
      {/* Navigation */}
      <Navbar />

      {/* Hero Banner */}
      <section
        className={cn(
          "py-16",
          theme === "dark" ? "bg-gray-800" : "bg-gray-100",
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <motion.h1
              className={cn(
                "text-4xl md:text-5xl font-bold mb-4",
                theme === "dark" ? "text-white" : "text-gray-900",
              )}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {t("ourProjects") || "Our Projects"}
            </motion.h1>
            <motion.p
              className={cn(
                "max-w-2xl mx-auto mb-8",
                theme === "dark" ? "text-gray-300" : "text-gray-600",
              )}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {t("projectsDescription") ||
                "Explore our portfolio of successful projects across various industries and technologies."}
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button
                variant="outline"
                size="sm"
                asChild
                className={cn(
                  theme === "dark"
                    ? "border-gray-600 text-gray-300 hover:bg-gray-700"
                    : "",
                )}
              >
                <a href="/" className="flex items-center gap-1">
                  <ArrowLeft size={14} /> {t("backToHome") || "Back to Home"}
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        className={cn("py-20", theme === "dark" ? "bg-gray-900" : "bg-white")}
      >
        <div className="container mx-auto px-4">
          <Tabs defaultValue="All" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className={cn(theme === "dark" ? "bg-gray-800" : "")}>
                {categories.map((category) => (
                  <TabsTrigger
                    key={category}
                    value={category}
                    onClick={() => setActiveCategory(category)}
                    className={cn(
                      theme === "dark"
                        ? "data-[state=active]:bg-gray-700 data-[state=active]:text-white"
                        : "",
                    )}
                  >
                    {t(category.toLowerCase()) || category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {categories.map((category) => (
              <TabsContent
                key={category}
                value={category}
                className="space-y-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredItems.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <ProjectItem {...item} />
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Scroll to top button */}
      <ScrollToTopButton />
    </div>
  );
};

export default ProjectsPage;
