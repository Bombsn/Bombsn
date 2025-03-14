export type Language = "en" | "de" | "fr" | "it";

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
  fr: {
    // Navbar
    about: "À propos",
    services: "Services",
    portfolio: "Portfolio",
    contact: "Contact",
    getStarted: "Commencer",

    // Hero Section
    tagline: "Solutions de développement Low-Code/No-Code",
    heroDescription:
      "Nous créons des solutions numériques personnalisées sans programmation complexe. Des applications web aux applications mobiles, nos experts fournissent des solutions de qualité qui répondent aux besoins de votre entreprise.",
    exploreServices: "Découvrez nos services",

    // About Section
    aboutTitle: "À propos de scriptsCanFly",
    aboutDescription:
      "Nous sommes une entreprise suisse de développement low-code/no-code spécialisée dans la création de solutions numériques efficaces qui aident les entreprises à transformer leurs opérations.",
    ourMission: "Notre mission",
    missionText:
      "Notre mission est de démocratiser le développement de logiciels en fournissant des solutions low-code/no-code accessibles qui permettent aux entreprises d'innover plus rapidement et plus efficacement.",
    ourValues: "Nos valeurs",
    creativity: "Innovation",
    creativityDesc:
      "Nous abordons chaque projet avec des solutions innovantes et des perspectives d'avenir.",
    excellence: "Qualité",
    excellenceDesc:
      "Nous visons la plus haute qualité dans chaque solution que nous développons.",
    collaboration: "Partenariat",
    collaborationDesc:
      "Nous travaillons en étroite collaboration avec nos clients pour garantir que leur vision devienne réalité.",
    meetTeam: "Rencontrez notre équipe",

    // Services Section
    servicesTitle: "Nos services",
    servicesSubtitle:
      "Solutions de développement professionnelles adaptées aux besoins de votre entreprise",
    screenplayWriting: "Développement d'applications web",
    screenplayDesc:
      "Applications web personnalisées construites avec des plateformes low-code modernes qui rationalisent vos processus d'entreprise.",
    technicalWriting: "Développement d'applications mobiles",
    technicalDesc:
      "Applications mobiles natives et multiplateformes qui fonctionnent parfaitement sur tous les appareils.",
    contentCreation: "Développement de sites web",
    contentDesc:
      "Sites web réactifs et solutions e-commerce qui mettent en valeur votre marque et génèrent des conversions.",
    videoScripts: "Solutions d'automatisation",
    videoDesc:
      "Outils d'automatisation des flux de travail qui font gagner du temps et réduisent les erreurs dans vos processus d'entreprise.",
    podcastScripts: "Services d'intégration",
    podcastDesc:
      "Intégration transparente entre vos systèmes existants et les nouvelles solutions low-code.",
    storytelling: "Solutions bureautiques",
    storytellingDesc:
      "Améliorations personnalisées de Microsoft Office et des outils de productivité pour une meilleure efficacité.",

    // Portfolio Section
    portfolioTitle: "Notre portfolio",
    portfolioSubtitle:
      "Explorez notre collection diversifiée de projets low-code/no-code dans différents secteurs.",
    viewProject: "Voir le projet",
    viewAllProjects: "Voir tous les projets",
    corporate: "Entreprise",
    screenplay: "Applications web",
    educational: "Éducation",
    marketing: "E-commerce",
    audio: "Mobile",
    commercial: "Automatisation",
    all: "Tous",

    // Contact Section
    contactTitle: "Contactez-nous",
    contactSubtitle:
      "Vous avez un projet en tête ? Nous aimerions vous entendre !",
    contactInfo: "Informations de contact",
    address: "Adresse",
    email: "Email",
    phone: "Téléphone",
    followUs: "Suivez-nous",
    sendMessage: "Envoyez-nous un message",
    name: "Nom",
    yourName: "Votre nom",
    yourEmail: "Votre adresse email",
    message: "Message",
    messagePlaceholder: "Parlez-nous de votre projet ou de votre demande",
    subscribe: "S'abonner",
    emailPlaceholder: "Votre email",
    stayUpdated: "Restez informé",
    newsletterText:
      "Abonnez-vous à notre newsletter pour les dernières mises à jour et offres.",

    // Footer
    quickLinks: "Liens rapides",
    aboutUs: "À propos de nous",
    contactUs: "Contactez-nous",
    allRightsReserved: "Tous droits réservés.",

    // Theme
    darkMode: "Mode sombre",
    lightMode: "Mode clair",
  },
  it: {
    // Navbar
    about: "Chi siamo",
    services: "Servizi",
    portfolio: "Portfolio",
    contact: "Contatti",
    getStarted: "Inizia ora",

    // Hero Section
    tagline: "Soluzioni di sviluppo Low-Code/No-Code",
    heroDescription:
      "Creiamo soluzioni digitali personalizzate senza programmazione complessa. Dalle applicazioni web alle applicazioni mobili, i nostri esperti forniscono soluzioni di qualità che soddisfano le esigenze della tua azienda.",
    exploreServices: "Esplora i nostri servizi",

    // About Section
    aboutTitle: "Chi è scriptsCanFly",
    aboutDescription:
      "Siamo un'azienda svizzera di sviluppo low-code/no-code specializzata nella creazione di soluzioni digitali efficienti che aiutano le aziende a trasformare le loro operazioni.",
    ourMission: "La nostra missione",
    missionText:
      "La nostra missione è democratizzare lo sviluppo software fornendo soluzioni low-code/no-code accessibili che permettono alle aziende di innovare più velocemente e in modo più efficiente.",
    ourValues: "I nostri valori",
    creativity: "Innovazione",
    creativityDesc:
      "Affrontiamo ogni progetto con soluzioni innovative e prospettive orientate al futuro.",
    excellence: "Qualità",
    excellenceDesc:
      "Puntiamo alla massima qualità in ogni soluzione che sviluppiamo.",
    collaboration: "Partnership",
    collaborationDesc:
      "Lavoriamo a stretto contatto con i nostri clienti per garantire che la loro visione diventi realtà.",
    meetTeam: "Incontra il nostro team",

    // Services Section
    servicesTitle: "I nostri servizi",
    servicesSubtitle:
      "Soluzioni di sviluppo professionale su misura per le esigenze della tua azienda",
    screenplayWriting: "Sviluppo di applicazioni web",
    screenplayDesc:
      "Applicazioni web personalizzate costruite con moderne piattaforme low-code che ottimizzano i processi aziendali.",
    technicalWriting: "Sviluppo di applicazioni mobili",
    technicalDesc:
      "Applicazioni mobili native e multipiattaforma che funzionano perfettamente su tutti i dispositivi.",
    contentCreation: "Sviluppo di siti web",
    contentDesc:
      "Siti web responsive e soluzioni e-commerce che valorizzano il tuo marchio e generano conversioni.",
    videoScripts: "Soluzioni di automazione",
    videoDesc:
      "Strumenti di automazione del flusso di lavoro che fanno risparmiare tempo e riducono gli errori nei processi aziendali.",
    podcastScripts: "Servizi di integrazione",
    podcastDesc:
      "Integrazione perfetta tra i sistemi esistenti e le nuove soluzioni low-code.",
    storytelling: "Soluzioni per ufficio",
    storytellingDesc:
      "Miglioramenti personalizzati di Microsoft Office e strumenti di produttività per una maggiore efficienza.",

    // Portfolio Section
    portfolioTitle: "Il nostro portfolio",
    portfolioSubtitle:
      "Esplora la nostra variegata collezione di progetti low-code/no-code in vari settori.",
    viewProject: "Visualizza progetto",
    viewAllProjects: "Visualizza tutti i progetti",
    corporate: "Aziendale",
    screenplay: "App web",
    educational: "Educazione",
    marketing: "E-commerce",
    audio: "Mobile",
    commercial: "Automazione",
    all: "Tutti",

    // Contact Section
    contactTitle: "Contattaci",
    contactSubtitle: "Hai un progetto in mente? Ci piacerebbe sentire da te!",
    contactInfo: "Informazioni di contatto",
    address: "Indirizzo",
    email: "Email",
    phone: "Telefono",
    followUs: "Seguici",
    sendMessage: "Inviaci un messaggio",
    name: "Nome",
    yourName: "Il tuo nome",
    yourEmail: "La tua email",
    message: "Messaggio",
    messagePlaceholder: "Parlaci del tuo progetto o della tua richiesta",
    subscribe: "Iscriviti",
    emailPlaceholder: "La tua email",
    stayUpdated: "Resta aggiornato",
    newsletterText:
      "Iscriviti alla nostra newsletter per gli ultimi aggiornamenti e offerte.",

    // Footer
    quickLinks: "Link rapidi",
    aboutUs: "Chi siamo",
    contactUs: "Contattaci",
    allRightsReserved: "Tutti i diritti riservati.",

    // Theme
    darkMode: "Modalità scura",
    lightMode: "Modalità chiara",
  },
};
