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
        <div className="absolute top-2 right-2 z-10">
          <span
            className={cn(
              "text-xs px-2 py-1 rounded-full shadow-md",
              theme === "dark"
                ? "bg-red-900 text-red-200"
                : "bg-teal-100 text-red-800",
            )}
          >
            {t(category.toLowerCase())}
          </span>
        </div>
        <CardHeader>
          <CardTitle
            className={cn(
              "text-xl font-bold",
              theme === "dark" ? "text-white" : "",
            )}
          >
            {title}
          </CardTitle>
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
      title: t("project1Title") || "Integration Buchungssystem",
      description:
        t("project1Desc") ||
        "Die Schmidlin & Suter Media GmbH hat uns beauftragt bei ihrer neuesten Website ein Buchungssystem zu integrieren. Unser Ziel war vor allem, dass der Endkunde durch die Integration nicht gestört wird und der Fluss der Website stimmt.",
      imageUrl:
        "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?w=800&q=80",
      category: "Integration",
      link: "https://luminous-bloom.ch",
    },
    {
      title: t("project2Title") || "Automatisierung Motivationsschreiben",
      description:
        t("project2Desc") ||
        "Die Pflegejob Suisse Medical verhilft mit ihrem Service Pflegefachkräften zu Jobs. Wir durften den Cloudprozess entwickeln, der aus den Daten des Bewerbers automatisch mit AI ein perfekt geschriebenes Motivationsschreiben erstellt.",
      imageUrl:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
      category: "Automation",
      link: "https://pflegejob-suissemedical.ch",
    },
    {
      title: t("project3Title") || "Interne App Projekte",
      description:
        t("project3Desc") ||
        "Für die TCA Thermoclima AG durften wir eine neue Version ihrer bestehenden Power App entwickeln. Diese musste vor allem responsiv sein, damit das Backoffice und der Verkauf mit der gleichen App arbeiten können.",
      imageUrl:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      category: "PowerApps",
      link: "#",
    },
    {
      title: t("project4Title") || "Eingabemaske Labor",
      description:
        t("project4Desc") ||
        "Für das Labor bei der Swisspor AG durften wir mehrere Eingabemasken mit Power Apps erstellen. Monatliche Datenmigrationen entfallen, es entstehen weniger Fehler bei der Erfassung und Auswertungen können jederzeit ausgelesen werden.",
      imageUrl:
        "https://images.unsplash.com/photo-1581093458791-9d15482442f5?w=800&q=80",
      category: "PowerApps",
      link: "#",
    },
    {
      title: t("project5Title") || "Customizing Website Spitex",
      description:
        t("project5Desc") ||
        "Für die Schmidlin & Suter Media GmbH durften wir diverse Anpassungen an der neuen Website für pflegezuhause.zuerich übernehmen.",
      imageUrl:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
      category: "Website",
      link: "https://pflegezuhause.zuerich",
    },
    {
      title: t("project6Title") || "Automatisierung Anmeldung",
      description:
        t("project6Desc") ||
        "Für die Bergsportschule Grischa durften wir eine Automatisierung integrieren, die Mails von Kursanmeldungen in eine Excel-Datei schreibt bzw. eine neue Datei erstellt, falls es für diesen Kurs noch keine gibt.",
      imageUrl:
        "https://images.unsplash.com/photo-1586892477838-2b96e85e0f96?w=800&q=80",
      category: "Automation",
      link: "#",
    },
    {
      title: t("project7Title") || "Interne App Stunden",
      description:
        t("project7Desc") ||
        "Für die Andermatt Swiss Alps AG durften wir eine Projektstundenerfassung mit Power Apps erstellen. Die App ist gleichzeitig für Backoffice und Aussendienst geeignet und wurde direkt in MS Teams integriert.",
      imageUrl:
        "https://images.unsplash.com/photo-1611224885990-ab7363d1f2a9?w=800&q=80",
      category: "PowerApps",
      link: "#",
    },
    {
      title: t("project8Title") || "Customizing Website Beautysalon",
      description:
        t("project8Desc") ||
        "Die Schmidlin & Suter Media GmbH hat uns nochmals gebeten bei diversen Anpassungen zu helfen. Diesmal ging es um einen Refresh einer bestehenden Seite für die Art-Esthetic Beautysalons.",
      imageUrl:
        "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80",
      category: "Website",
      link: "https://art-esthetic.ch",
    },
    {
      title: t("project9Title") || "Dashboard Marketing",
      description:
        t("project9Desc") ||
        "Die Schmidlin & Suter Media GmbH benötigte für ihre Kunden einen Report der Marketing-Kampagnen. Wir haben einen Datenfluss samt Dashboard erstellt, der mit Facebook-Daten befüllt wird.",
      imageUrl:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      category: "Dashboard",
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
              {t("ourProjects") || "Unsere Projekte"}
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
                "Entdecken Sie unsere erfolgreichen Projekte in verschiedenen Branchen und mit unterschiedlichen Technologien."}
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
                  <ArrowLeft size={14} />{" "}
                  {t("backToHome") || "Zurück zur Startseite"}
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
