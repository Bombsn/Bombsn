export type Language = "en" | "de";

export type Translations = {
  [key in Language]: {
    [key: string]: string;
  };
};

export const translations: Translations = {
  en: {
    // Navbar
    about: "About",
    services: "Services",
    portfolio: "Portfolio",
    contact: "Contact",
    getStarted: "Get Started",

    // Hero Section
    tagline: "Low-Code/No-Code Development Solutions",
    heroDescription:
      "We create custom digital solutions without complex coding. From web apps to mobile applications, our experts deliver quality solutions that meet your business needs.",
    exploreServices: "Explore Our Services",

    // About Section
    aboutTitle: "About scriptsCanFly",
    aboutDescription:
      "We are a Swiss low-code/no-code development company specializing in creating efficient digital solutions that help businesses transform their operations.",
    ourMission: "Our Mission",
    missionText:
      "Our mission is to democratize software development by providing accessible low-code/no-code solutions that empower businesses to innovate faster and more efficiently.",
    ourValues: "Our Values",
    creativity: "Innovation",
    creativityDesc:
      "We approach each project with innovative solutions and forward-thinking perspectives.",
    excellence: "Quality",
    excellenceDesc:
      "We strive for the highest quality in every solution we develop.",
    collaboration: "Partnership",
    collaborationDesc:
      "We work closely with our clients to ensure their vision becomes reality.",
    meetTeam: "Meet Our Team",

    // Services Section
    servicesTitle: "Our Services",
    servicesSubtitle:
      "Professional development solutions tailored to your business needs",
    screenplayWriting: "Web App Development",
    screenplayDesc:
      "Custom web applications built with modern low-code platforms that streamline your business processes.",
    technicalWriting: "Mobile App Development",
    technicalDesc:
      "Native and cross-platform mobile applications that work seamlessly across devices.",
    contentCreation: "Website Development",
    contentDesc:
      "Responsive websites and e-commerce solutions that showcase your brand and drive conversions.",
    videoScripts: "Automation Solutions",
    videoDesc:
      "Workflow automation tools that save time and reduce errors in your business processes.",
    podcastScripts: "Integration Services",
    podcastDesc:
      "Seamless integration between your existing systems and new low-code solutions.",
    storytelling: "Office Solutions",
    storytellingDesc:
      "Custom Microsoft Office and productivity tool enhancements for improved efficiency.",

    // Portfolio Section
    portfolioTitle: "Our Portfolio",
    portfolioSubtitle:
      "Explore our diverse collection of low-code/no-code projects across various industries.",
    viewProject: "View Project",
    viewAllProjects: "View All Projects",
    corporate: "Corporate",
    screenplay: "Web Apps",
    educational: "Education",
    marketing: "E-Commerce",
    audio: "Mobile",
    commercial: "Automation",
    all: "All",

    // Contact Section
    contactTitle: "Get in Touch",
    contactSubtitle: "Have a project in mind? We'd love to hear from you!",
    contactInfo: "Contact Information",
    address: "Address",
    email: "Email",
    phone: "Phone",
    followUs: "Follow Us",
    sendMessage: "Send Us a Message",
    name: "Name",
    yourName: "Your name",
    yourEmail: "Your email address",
    message: "Message",
    messagePlaceholder: "Tell us about your project or inquiry",
    subscribe: "Subscribe",
    emailPlaceholder: "Your email",
    stayUpdated: "Stay Updated",
    newsletterText:
      "Subscribe to our newsletter for the latest updates and offers.",

    // Footer
    quickLinks: "Quick Links",
    aboutUs: "About Us",
    contactUs: "Contact Us",
    allRightsReserved: "All rights reserved.",

    // Theme
    darkMode: "Dark Mode",
    lightMode: "Light Mode",
  },
  de: {
    // Navbar
    about: "Über uns",
    services: "Dienstleistungen",
    portfolio: "Portfolio",
    contact: "Kontakt",
    getStarted: "Jetzt starten",

    // Hero Section
    tagline: "Low-Code/No-Code Entwicklungslösungen",
    heroDescription:
      "Wir erstellen massgeschneiderte digitale Lösungen ohne komplexe Programmierung. Von Web-Apps bis hin zu mobilen Anwendungen liefern unsere Experten qualitativ hochwertige Lösungen, die Ihren Geschäftsanforderungen entsprechen.",
    exploreServices: "Entdecken Sie unsere Dienstleistungen",

    // About Section
    aboutTitle: "Über scriptsCanFly",
    aboutDescription:
      "Wir sind ein Schweizer Low-Code/No-Code Entwicklungsunternehmen, das sich auf die Erstellung effizienter digitaler Lösungen spezialisiert hat, die Unternehmen bei der Transformation ihrer Geschäftsprozesse unterstützen.",
    ourMission: "Unsere Mission",
    missionText:
      "Unsere Mission ist es, die Softwareentwicklung zu demokratisieren, indem wir zugängliche Low-Code/No-Code-Lösungen anbieten, die Unternehmen befähigen, schneller und effizienter zu werden.",
    ourValues: "Unsere Werte",
    creativity: "Innovation",
    creativityDesc:
      "Wir gehen an jedes Projekt mit innovativen Lösungen und zukunftsorientierten Perspektiven heran.",
    excellence: "Qualität",
    excellenceDesc:
      "Wir streben nach höchster Qualität in jeder Lösung, die wir entwickeln.",
    collaboration: "Partnerschaft",
    collaborationDesc:
      "Wir arbeiten eng mit unseren Kunden zusammen, um sicherzustellen, dass ihre Vision Wirklichkeit wird.",
    meetTeam: "Lernen Sie unser Team kennen",

    // Services Section
    servicesTitle: "Unsere Dienstleistungen",
    servicesSubtitle:
      "Professionelle Entwicklungslösungen, die auf Ihre Geschäftsanforderungen zugeschnitten sind",
    screenplayWriting: "Web-App Entwicklung",
    screenplayDesc:
      "Massgeschneiderte Webanwendungen, die mit modernen Low-Code-Plattformen erstellt werden und Ihre Geschäftsprozesse optimieren.",
    technicalWriting: "Mobile App Entwicklung",
    technicalDesc:
      "Native und plattformübergreifende mobile Anwendungen, die nahtlos auf allen Geräten funktionieren.",
    contentCreation: "Website Entwicklung",
    contentDesc:
      "Responsive Websites und E-Commerce-Lösungen, die Ihre Marke präsentieren und Conversions steigern.",
    videoScripts: "Automatisierungslösungen",
    videoDesc:
      "Workflow-Automatisierungstools, die Zeit sparen und Fehler in Ihren Geschäftsprozessen reduzieren.",
    podcastScripts: "Integrationsdienste",
    podcastDesc:
      "Nahtlose Integration zwischen Ihren bestehenden Systemen und neuen Low-Code-Lösungen.",
    storytelling: "Office-Lösungen",
    storytellingDesc:
      "Individuelle Microsoft Office und Produktivitätstool-Erweiterungen für verbesserte Effizienz.",

    // Portfolio Section
    portfolioTitle: "Unser Portfolio",
    portfolioSubtitle:
      "Entdecken Sie unsere vielfältige Sammlung von Low-Code/No-Code-Projekten in verschiedenen Branchen.",
    viewProject: "Projekt ansehen",
    viewAllProjects: "Alle Projekte ansehen",
    corporate: "Unternehmen",
    screenplay: "Web-Apps",
    educational: "Bildung",
    marketing: "E-Commerce",
    audio: "Mobile",
    commercial: "Automatisierung",
    all: "Alle",

    // Contact Section
    contactTitle: "Kontaktieren Sie uns",
    contactSubtitle:
      "Haben Sie ein Projekt im Sinn? Wir würden gerne von Ihnen hören!",
    contactInfo: "Kontaktinformationen",
    address: "Adresse",
    email: "E-Mail",
    phone: "Telefon",
    followUs: "Folgen Sie uns",
    sendMessage: "Senden Sie uns eine Nachricht",
    name: "Name",
    yourName: "Ihr Name",
    yourEmail: "Ihre E-Mail-Adresse",
    message: "Nachricht",
    messagePlaceholder: "Erzählen Sie uns von Ihrem Projekt oder Ihrer Anfrage",
    subscribe: "Abonnieren",
    emailPlaceholder: "Ihre E-Mail",
    stayUpdated: "Bleiben Sie auf dem Laufenden",
    newsletterText:
      "Abonnieren Sie unseren Newsletter für die neuesten Updates und Angebote.",

    // Footer
    quickLinks: "Schnelllinks",
    aboutUs: "Über uns",
    contactUs: "Kontaktieren Sie uns",
    allRightsReserved: "Alle Rechte vorbehalten.",

    // Theme
    darkMode: "Dunkelmodus",
    lightMode: "Hellmodus",
  },
};
