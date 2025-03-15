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
    projects: "Projects",
    projectsPage: "All Projects",
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

    // Projects Section
    projectsTitle: "Our Projects",
    projectsSubtitle:
      "Explore our diverse collection of low-code/no-code projects across various industries.",
    viewProject: "View Project",
    viewAllProjects: "View All Projects",
    exploreOurProjects: "Explore Our Complete Projects Collection",
    projectsCTAText:
      "Discover our full range of projects and see how we've helped businesses transform their digital presence.",
    corporate: "Corporate",
    screenplay: "Web Apps",
    educational: "Education",
    marketing: "E-Commerce",
    audio: "Mobile",
    commercial: "Automation",
    all: "All",
    integration: "Integration",
    automation: "Automation",
    powerapps: "Power Apps",
    website: "Website",
    dashboard: "Dashboard",
    ourProjects: "Our Projects",
    projectsDescription:
      "Discover our successful projects across various industries and technologies.",
    backToHome: "Back to Home",

    // Project Descriptions
    project1Title: "Booking System Integration",
    project1Desc:
      "Schmidlin & Suter Media GmbH commissioned us to integrate a booking system into their latest website. Our main goal was to ensure that the end customer is not disturbed by the integration and that the flow of the website remains smooth.",

    project2Title: "Motivation Letter Automation",
    project2Desc:
      "Pflegejob Suisse Medical helps nursing professionals find jobs with their service. We were able to develop the cloud process that automatically creates a perfectly written motivation letter from the applicant's data using AI.",

    project3Title: "Internal App Projects",
    project3Desc:
      "For TCA Thermoclima AG, we were able to develop a new version of their existing Power App. This had to be responsive above all, so that the back office and sales could work with the same app.",

    project4Title: "Laboratory Input Form",
    project4Desc:
      "For the laboratory at Swisspor AG, we were able to create several input forms with Power Apps. Monthly data migrations are eliminated, fewer errors occur during recording, and evaluations can be read out at any time.",

    project5Title: "Customizing Spitex Website",
    project5Desc:
      "For Schmidlin & Suter Media GmbH, we were able to take over various adjustments to the new website for pflegezuhause.zuerich.",

    project6Title: "Registration Automation",
    project6Desc:
      "For Bergsportschule Grischa, we were able to integrate an automation that writes emails from course registrations into an Excel file or creates a new file if one doesn't exist for this course yet.",

    project7Title: "Internal Hours App",
    project7Desc:
      "For Andermatt Swiss Alps AG, we were able to create a project time recording system with Power Apps. The app is suitable for both back office and field service and was integrated directly into MS Teams.",

    project8Title: "Customizing Beauty Salon Website",
    project8Desc:
      "Schmidlin & Suter Media GmbH asked us again to help with various adjustments. This time it was about refreshing an existing page for the Art-Esthetic Beauty Salons.",

    project9Title: "Marketing Dashboard",
    project9Desc:
      "Schmidlin & Suter Media GmbH needed a report of marketing campaigns for their customers. We created a data flow including a dashboard that is filled with Facebook data.",

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
    projects: "Projekte",
    projectsPage: "Alle Projekte",
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

    // Projects Section
    projectsTitle: "Unsere Projekte",
    projectsSubtitle:
      "Entdecken Sie unsere vielfältige Sammlung von Low-Code/No-Code-Projekten in verschiedenen Branchen.",
    viewProject: "Projekt ansehen",
    viewAllProjects: "Alle Projekte ansehen",
    exploreOurProjects: "Entdecken Sie unsere komplette Projektsammlung",
    projectsCTAText:
      "Entdecken Sie unsere gesamte Projektpalette und sehen Sie, wie wir Unternehmen bei der Transformation ihrer digitalen Präsenz geholfen haben.",
    corporate: "Unternehmen",
    screenplay: "Web-Apps",
    educational: "Bildung",
    marketing: "E-Commerce",
    audio: "Mobile",
    commercial: "Automatisierung",
    all: "Alle",
    integration: "Integration",
    automation: "Automatisierung",
    powerapps: "Power Apps",
    website: "Website",
    dashboard: "Dashboard",
    ourProjects: "Unsere Projekte",
    projectsDescription:
      "Entdecken Sie unsere erfolgreichen Projekte in verschiedenen Branchen und mit unterschiedlichen Technologien.",
    backToHome: "Zurück zur Startseite",

    // Project Descriptions
    project1Title: "Integration Buchungssystem",
    project1Desc:
      "Die Schmidlin & Suter Media GmbH hat uns beauftragt bei ihrer neuesten Website ein Buchungssystem zu integrieren. Unser Ziel war vor allem, dass der Endkunde durch die Integration nicht gestört wird und der Fluss der Website stimmt.",

    project2Title: "Automatisierung Motivationsschreiben",
    project2Desc:
      "Die Pflegejob Suisse Medical verhilft mit ihrem Service Pflegefachkräften zu Jobs. Wir durften den Cloudprozess entwickeln, der aus den Daten des Bewerbers automatisch mit AI ein perfekt geschriebenes Motivationsschreiben erstellt.",

    project3Title: "Interne App Projekte",
    project3Desc:
      "Für die TCA Thermoclima AG durften wir eine neue Version ihrer bestehenden Power App entwickeln. Diese musste vor allem responsiv sein, damit das Backoffice und der Verkauf mit der gleichen App arbeiten können.",

    project4Title: "Eingabemaske Labor",
    project4Desc:
      "Für das Labor bei der Swisspor AG durften wir mehrere Eingabemasken mit Power Apps erstellen. Monatliche Datenmigrationen entfallen, es entstehen weniger Fehler bei der Erfassung und Auswertungen können jederzeit ausgelesen werden.",

    project5Title: "Customizing Website Spitex",
    project5Desc:
      "Für die Schmidlin & Suter Media GmbH durften wir diverse Anpassungen an der neuen Website für pflegezuhause.zuerich übernehmen.",

    project6Title: "Automatisierung Anmeldung",
    project6Desc:
      "Für die Bergsportschule Grischa durften wir eine Automatisierung integrieren, die Mails von Kursanmeldungen in eine Excel-Datei schreibt bzw. eine neue Datei erstellt, falls es für diesen Kurs noch keine gibt.",

    project7Title: "Interne App Stunden",
    project7Desc:
      "Für die Andermatt Swiss Alps AG durften wir eine Projektstundenerfassung mit Power Apps erstellen. Die App ist gleichzeitig für Backoffice und Aussendienst geeignet und wurde direkt in MS Teams integriert.",

    project8Title: "Customizing Website Beautysalon",
    project8Desc:
      "Die Schmidlin & Suter Media GmbH hat uns nochmals gebeten bei diversen Anpassungen zu helfen. Diesmal ging es um einen Refresh einer bestehenden Seite für die Art-Esthetic Beautysalons.",

    project9Title: "Dashboard Marketing",
    project9Desc:
      "Die Schmidlin & Suter Media GmbH benötigte für ihre Kunden einen Report der Marketing-Kampagnen. Wir haben einen Datenfluss samt Dashboard erstellt, der mit Facebook-Daten befüllt wird.",

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
    projects: "Projets",
    projectsPage: "Tous les projets",
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

    // Projects Section
    projectsTitle: "Nos projets",
    projectsSubtitle:
      "Explorez notre collection diversifiée de projets low-code/no-code dans différents secteurs.",
    viewProject: "Voir le projet",
    viewAllProjects: "Voir tous les projets",
    exploreOurProjects: "Explorez notre collection complète de projets",
    projectsCTAText:
      "Découvrez notre gamme complète de projets et voyez comment nous avons aidé les entreprises à transformer leur présence numérique.",
    corporate: "Entreprise",
    screenplay: "Applications web",
    educational: "Éducation",
    marketing: "E-commerce",
    audio: "Mobile",
    commercial: "Automatisation",
    all: "Tous",
    integration: "Intégration",
    automation: "Automatisation",
    powerapps: "Power Apps",
    website: "Site web",
    dashboard: "Tableau de bord",
    ourProjects: "Nos Projets",
    projectsDescription:
      "Découvrez nos projets réussis dans différents secteurs et avec différentes technologies.",
    backToHome: "Retour à l'accueil",

    // Project Descriptions
    project1Title: "Intégration de système de réservation",
    project1Desc:
      "Schmidlin & Suter Media GmbH nous a chargés d'intégrer un système de réservation dans leur dernier site web. Notre objectif principal était de s'assurer que le client final ne soit pas perturbé par l'intégration et que le flux du site web reste fluide.",

    project2Title: "Automatisation de lettre de motivation",
    project2Desc:
      "Pflegejob Suisse Medical aide les professionnels des soins infirmiers à trouver des emplois grâce à leur service. Nous avons pu développer le processus cloud qui crée automatiquement une lettre de motivation parfaitement rédigée à partir des données du candidat en utilisant l'IA.",

    project3Title: "Projets d'applications internes",
    project3Desc:
      "Pour TCA Thermoclima AG, nous avons pu développer une nouvelle version de leur Power App existante. Celle-ci devait être responsive avant tout, afin que le back-office et les ventes puissent travailler avec la même application.",

    project4Title: "Formulaire de saisie de laboratoire",
    project4Desc:
      "Pour le laboratoire de Swisspor AG, nous avons pu créer plusieurs formulaires de saisie avec Power Apps. Les migrations de données mensuelles sont éliminées, moins d'erreurs se produisent lors de l'enregistrement, et les évaluations peuvent être consultées à tout moment.",

    project5Title: "Personnalisation du site web Spitex",
    project5Desc:
      "Pour Schmidlin & Suter Media GmbH, nous avons pu prendre en charge diverses adaptations du nouveau site web pour pflegezuhause.zuerich.",

    project6Title: "Automatisation des inscriptions",
    project6Desc:
      "Pour Bergsportschule Grischa, nous avons pu intégrer une automatisation qui écrit les emails d'inscriptions aux cours dans un fichier Excel ou crée un nouveau fichier s'il n'en existe pas encore pour ce cours.",

    project7Title: "Application interne de suivi des heures",
    project7Desc:
      "Pour Andermatt Swiss Alps AG, nous avons pu créer un système d'enregistrement du temps de projet avec Power Apps. L'application convient à la fois au back-office et au service extérieur et a été intégrée directement dans MS Teams.",

    project8Title: "Personnalisation du site web de salon de beauté",
    project8Desc:
      "Schmidlin & Suter Media GmbH nous a demandé à nouveau d'aider à diverses adaptations. Cette fois, il s'agissait de rafraîchir une page existante pour les salons de beauté Art-Esthetic.",

    project9Title: "Tableau de bord marketing",
    project9Desc:
      "Schmidlin & Suter Media GmbH avait besoin d'un rapport des campagnes marketing pour leurs clients. Nous avons créé un flux de données comprenant un tableau de bord qui est rempli avec des données Facebook.",

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
    projects: "Progetti",
    projectsPage: "Tutti i progetti",
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

    // Projects Section
    projectsTitle: "I nostri progetti",
    projectsSubtitle:
      "Esplora la nostra variegata collezione di progetti low-code/no-code in vari settori.",
    viewProject: "Visualizza progetto",
    viewAllProjects: "Visualizza tutti i progetti",
    exploreOurProjects: "Esplora la nostra collezione completa di progetti",
    projectsCTAText:
      "Scopri la nostra gamma completa di progetti e vedi come abbiamo aiutato le aziende a trasformare la loro presenza digitale.",
    corporate: "Aziendale",
    screenplay: "App web",
    educational: "Educazione",
    marketing: "E-commerce",
    audio: "Mobile",
    commercial: "Automazione",
    all: "Tutti",
    integration: "Integrazione",
    automation: "Automazione",
    powerapps: "Power Apps",
    website: "Sito web",
    dashboard: "Dashboard",
    ourProjects: "I nostri progetti",
    projectsDescription:
      "Scopri i nostri progetti di successo in vari settori e con diverse tecnologie.",
    backToHome: "Torna alla home",

    // Project Descriptions
    project1Title: "Integrazione sistema di prenotazione",
    project1Desc:
      "Schmidlin & Suter Media GmbH ci ha incaricato di integrare un sistema di prenotazione nel loro ultimo sito web. Il nostro obiettivo principale era garantire che il cliente finale non fosse disturbato dall'integrazione e che il flusso del sito web rimanesse fluido.",

    project2Title: "Automazione lettera motivazionale",
    project2Desc:
      "Pflegejob Suisse Medical aiuta i professionisti infermieristici a trovare lavoro con il loro servizio. Abbiamo potuto sviluppare il processo cloud che crea automaticamente una lettera motivazionale perfettamente scritta dai dati del candidato utilizzando l'AI.",

    project3Title: "Progetti app interne",
    project3Desc:
      "Per TCA Thermoclima AG, abbiamo potuto sviluppare una nuova versione della loro Power App esistente. Questa doveva essere soprattutto responsive, in modo che il back office e le vendite potessero lavorare con la stessa app.",

    project4Title: "Modulo di input laboratorio",
    project4Desc:
      "Per il laboratorio di Swisspor AG, abbiamo potuto creare diversi moduli di input con Power Apps. Le migrazioni mensili dei dati sono eliminate, si verificano meno errori durante la registrazione e le valutazioni possono essere lette in qualsiasi momento.",

    project5Title: "Personalizzazione sito web Spitex",
    project5Desc:
      "Per Schmidlin & Suter Media GmbH, abbiamo potuto assumere vari adattamenti al nuovo sito web per pflegezuhause.zuerich.",

    project6Title: "Automazione registrazione",
    project6Desc:
      "Per Bergsportschule Grischa, abbiamo potuto integrare un'automazione che scrive le email dalle registrazioni ai corsi in un file Excel o crea un nuovo file se non ne esiste ancora uno per questo corso.",

    project7Title: "App interna ore",
    project7Desc:
      "Per Andermatt Swiss Alps AG, abbiamo potuto creare un sistema di registrazione del tempo di progetto con Power Apps. L'app è adatta sia per il back office che per il servizio esterno ed è stata integrata direttamente in MS Teams.",

    project8Title: "Personalizzazione sito web salone di bellezza",
    project8Desc:
      "Schmidlin & Suter Media GmbH ci ha chiesto nuovamente di aiutare con vari adattamenti. Questa volta si trattava di rinnovare una pagina esistente per i saloni di bellezza Art-Esthetic.",

    project9Title: "Dashboard marketing",
    project9Desc:
      "Schmidlin & Suter Media GmbH aveva bisogno di un report delle campagne di marketing per i loro clienti. Abbiamo creato un flusso di dati incluso un dashboard che viene riempito con dati Facebook.",

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
