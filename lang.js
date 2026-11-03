// Traductions du portfolio (FR / EN).
// Tous les textes sont regroupés ici pour faciliter les modifications.
const translations = {
  "en": {
    "nav_home": "Home",
    "nav_about": "About",
    "nav_skills": "Skills",
    "nav_projects": "Projects",
    "nav_education": "Education",
    "nav_contact": "Contact",
    "nav_aria": "Main navigation",
    "brand_aria": "Back to Home",
    "socials_aria": "Social links",
    "github_aria": "GitHub profile",
    "linkedin_aria": "LinkedIn profile",
    "email_aria": "Send an email",
    "photo_alt": "Portrait of Magomed-Emi Usumov",
    "photo_mini_alt": "Portrait of Magomed-Emi Usumov",
    "coding_alt": "Illustration of software development",
    "books_alt": "Illustration de livres et d'un chapeau de diplômé",
    "home_hi": "Hi, I'm",
    "home_job": "Java Backend Developer",
    "home_intro": "Junior Java Backend Developer focused on building reliable applications\n            with Java, Spring Boot, REST APIs and MySQL. I enjoy solving technical\n            challenges and continuously improving my skills.",
    "cv_button": "Download CV",
    "cv_file": "documents/CV_Magomed-Emi_Usumov_EN.pdf",
    "contact_button": "Contact Me",
    "location_city": "Brussels, Belgium",
    "location_open": "Open to opportunities",
    "home_education": "IT Student",
    "home_available": "Available",
    "home_junior": "Junior Position",
    "about_title": "About Me",
    "about_subtitle": "From Learning to Real-World Impact",
    "about_p1": "I enjoy turning ideas into working applications and solving practical problems.\n                My personal projects have taught me to approach technical challenges with\n                curiosity, persistence and attention to detail.",
    "about_p2": "I'm completing my Bachelor's degree in Business IT at ISFCE in Brussels.\n                I'm looking forward to contributing to a professional team, learning from\n                experienced developers and growing through real-world projects.",
    "about_solve_title": "Problem Solving",
    "about_solve_desc": "Finding practical solutions to technical challenges.",
    "about_learn_title": "Continuous Learning",
    "about_learn_desc": "Curious about new technologies and eager to improve.",
    "about_team_title": "Teamwork",
    "about_team_desc": "Open to collaboration, feedback and shared ideas.",
    "skills_label": "SKILLS",
    "skills_title": "My Skills",
    "skills_desc": "Technologies and tools I use to build reliable,\n                    secure and maintainable backend applications.",
    "skills_api": "REST APIs",
    "projects_label": "PROJECTS",
    "projects_title": "My Projects",
    "projects_desc": "Projects I have built to apply and strengthen my skills in\n                    Java, Spring Boot and web development.",
    "project_featured": "Main project",
    "project_nutri_summary": "A nutrition-tracking REST API for managing meals,\n                        calculating calories and macronutrients, and setting daily goals.",
    "project_nutri_details": "Backend project with food and meal CRUD,\n                                automatic daily nutritional calculations,\n                                goals, and unit tests.\n                                The React frontend is still in progress.",
    "project_nutri_button": "Details",
    "project_tshirt_summary": "A full-stack T-shirt store with a React frontend,\n                        Spring Boot backend, product catalogue and user accounts.",
    "project_tshirt_details": "Includes product and category browsing,\n                                an administration interface for product CRUD,\n                                login and registration, and a shopping-cart page.\n                                A learning project still being improved.",
    "project_tshirt_button": "Details",
    "project_todo_summary": "A REST API for creating and deleting tasks,\n                        tracking completion status and storing task data.",
    "project_todo_details": "Practice backend API with endpoints to create,\n                                list and delete tasks, toggle task completion,\n                                and persist data using Spring Data JPA.",
    "project_todo_button": "Details",
    "project_payment_summary": "A Spring Boot API to manage payments, search transactions,\n                        and calculate totals, averages and other statistics.",
    "project_payment_details": "Payment CRUD, amount filters, search by title,\n                                validation, totals, averages, minimum and\n                                maximum amounts, backed by MySQL.",
    "project_payment_button": "Details",
    "education_label": "EDUCATION",
    "education_title": "My Education",
    "education_desc": "My academic background and training that shaped my path into software development.",
    "education_current": "2023 – Present",
    "education_bachelor": "Bachelor's Degree in Business IT",
    "education_city": "ISFCE, Brussels",
    "education_tfe": "Final-year project (TFE) in progress.",
    "education_technician": "Programming Technician",
    "education_construction": "Building Construction",
    "contact_label": "CONTACT",
    "contact_title": "Get In Touch",
    "contact_intro": "Interested in working together or have an opportunity in mind?\n                    Feel free to reach out. I'd be happy to connect!",
    "contact_available": "Open to Junior IT Opportunities",
    "contact_work": "Let's Work Together!",
    "contact_prof": "I'm open to junior opportunities in Java backend development,\n                        software testing and application support.",
    "contact_send": "Send Me an Email",
    "contact_city": "Brussels, Belgium",
    "contact_email_label": "Email",
    "contact_linkedin_sub": "Connect with me professionally",
    "footer_text": "© 2026 Magomed-Emi Usumov · Built with HTML & CSS",
    "footer_top": "Back to top ↑",
    "site_title": "Portfolio | Magomed-Emi Usumov — Java Backend Developer",
    "meta_description": "Portfolio of Magomed-Emi Usumov, junior Java backend developer based in Brussels. Projects in Java, Spring Boot, REST APIs and MySQL.",
    "language_selector_aria": "Choose language"
  },
  "fr": {
    "nav_home": "Accueil",
    "nav_about": "À propos",
    "nav_skills": "Compétences",
    "nav_projects": "Projets",
    "nav_education": "Formation",
    "nav_contact": "Contact",
    "nav_aria": "Navigation principale",
    "brand_aria": "Retour à l'accueil",
    "socials_aria": "Réseaux sociaux",
    "github_aria": "Profil GitHub",
    "linkedin_aria": "Profil LinkedIn",
    "email_aria": "Envoyer un e-mail",
    "photo_alt": "Portrait de Magomed-Emi Usumov",
    "photo_mini_alt": "Portrait de Magomed-Emi Usumov",
    "coding_alt": "Illustration de développement informatique",
    "books_alt": "Illustration de livres et d'un chapeau de diplômé",
    "home_hi": "Bonjour, je suis",
    "home_job": "Développeur Java Backend",
    "home_intro": "Développeur Java Backend junior, je conçois des applications fiables avec Java, Spring Boot, les API REST et MySQL. J’aime résoudre des problèmes techniques et améliorer continuellement mes compétences.",
    "cv_button": "Télécharger mon CV",
    "cv_file": "documents/CV_Magomed-Emi_Usumov.pdf",
    "contact_button": "Me contacter",
    "location_city": "Bruxelles, Belgique",
    "location_open": "Ouvert aux opportunités",
    "home_education": "Étudiant en informatique",
    "home_available": "Disponible",
    "home_junior": "Poste junior",
    "about_title": "À propos de moi",
    "about_subtitle": "De la formation aux projets concrets",
    "about_p1": "J’aime transformer des idées en applications fonctionnelles et résoudre des problèmes concrets. Mes projets personnels m’ont appris à relever les défis techniques avec curiosité, persévérance et souci du détail.",
    "about_p2": "Je termine mon bachelier en informatique de gestion à l’ISFCE, à Bruxelles. Je souhaite rejoindre une équipe professionnelle, apprendre auprès de développeurs expérimentés et progresser grâce à des projets concrets.",
    "about_solve_title": "Résolution de problèmes",
    "about_solve_desc": "Trouver des solutions pratiques aux défis techniques.",
    "about_learn_title": "Apprentissage continu",
    "about_learn_desc": "Curieux des nouvelles technologies et motivé pour progresser.",
    "about_team_title": "Travail en équipe",
    "about_team_desc": "Ouvert à la collaboration, aux retours et au partage d’idées.",
    "skills_label": "COMPÉTENCES",
    "skills_title": "Mes compétences",
    "skills_desc": "Technologies et outils que j’utilise pour développer des applications backend fiables, sécurisées et faciles à maintenir.",
    "skills_api": "API REST",
    "projects_label": "PROJETS",
    "projects_title": "Mes projets",
    "projects_desc": "Des projets réalisés pour mettre en pratique et renforcer mes compétences en Java, Spring Boot et développement web.",
    "project_featured": "Projet principal",
    "project_nutri_summary": "Une API REST de suivi nutritionnel pour gérer les repas, calculer les calories et les macronutriments et définir des objectifs quotidiens.",
    "project_nutri_details": "Backend avec gestion CRUD des aliments et des repas, calcul des apports nutritionnels quotidiens, objectifs et tests unitaires. L’interface React est en cours de développement.",
    "project_nutri_button": "Détails",
    "project_tshirt_summary": "Une boutique de T-shirts full-stack avec interface React, backend Spring Boot, catalogue de produits et comptes utilisateurs.",
    "project_tshirt_details": "Consultation des produits et catégories, interface d’administration pour gérer les produits, connexion et inscription, ainsi qu’une page panier. Projet d’apprentissage en cours d’amélioration.",
    "project_tshirt_button": "Détails",
    "project_todo_summary": "Une API REST pour créer et supprimer des tâches, suivre leur état d’avancement et enregistrer les données.",
    "project_todo_details": "Projet backend pour s’entraîner à créer, lister et supprimer des tâches, modifier leur état de réalisation et enregistrer les données avec Spring Data JPA.",
    "project_todo_button": "Détails",
    "project_payment_summary": "Une API Spring Boot pour gérer les paiements, rechercher des transactions et calculer des totaux, des moyennes et d’autres statistiques.",
    "project_payment_details": "Gestion CRUD des paiements, filtres par montant, recherche par titre, validation, calcul du total, de la moyenne, des montants minimum et maximum, avec MySQL.",
    "project_payment_button": "Détails",
    "education_label": "FORMATION",
    "education_title": "Mon parcours scolaire",
    "education_desc": "Mes études et formations qui ont construit mes bases en informatique et en développement logiciel.",
    "education_current": "2023 – Aujourd’hui",
    "education_bachelor": "Bachelier en informatique de gestion",
    "education_city": "ISFCE, Bruxelles",
    "education_tfe": "Travail de fin d’études (TFE) en cours.",
    "education_technician": "Technicien en programmation",
    "education_construction": "Construction de bâtiments",
    "contact_label": "CONTACT",
    "contact_title": "Restons en contact",
    "contact_intro": "Vous avez une opportunité ou souhaitez échanger ? N’hésitez pas à me contacter. Je serai ravi de discuter avec vous !",
    "contact_available": "Ouvert aux postes juniors en informatique",
    "contact_work": "Travaillons ensemble !",
    "contact_prof": "Je recherche un premier poste junior en développement backend Java, en test logiciel ou en support applicatif.",
    "contact_send": "M’envoyer un e-mail",
    "contact_city": "Bruxelles, Belgique",
    "contact_email_label": "E-mail",
    "contact_linkedin_sub": "Retrouvez-moi sur LinkedIn",
    "footer_text": "© 2026 Magomed-Emi Usumov · Réalisé avec HTML et CSS",
    "footer_top": "Retour en haut ↑",
    "site_title": "Portfolio | Magomed-Emi Usumov — Développeur Java Backend",
    "meta_description": "Portfolio de Magomed-Emi Usumov, développeur Java Backend junior à Bruxelles. Projets Java, Spring Boot, API REST et MySQL.",
    "language_selector_aria": "Choisir la langue"
  }
};

const languageButtons = document.querySelectorAll('.lang-button');

function setLanguage(lang) {
    const copy = translations[lang];
    if (!copy) return;

    for (const element of document.querySelectorAll('[data-i18n]')) {
        const key = element.dataset.i18n;
        if (Object.prototype.hasOwnProperty.call(copy, key)) {
            element.textContent = copy[key];
        }
    }

    for (const attr of ['href', 'aria-label', 'alt', 'content']) {
        const dataAttr = 'data-i18n-' + attr;
        for (const element of document.querySelectorAll('[' + dataAttr + ']')) {
            const key = element.getAttribute(dataAttr);
            if (Object.prototype.hasOwnProperty.call(copy, key)) {
                element.setAttribute(attr, copy[key]);
            }
        }
    }

    document.documentElement.lang = lang;
    for (const button of languageButtons) {
        const selected = button.dataset.lang === lang;
        button.classList.toggle('is-active', selected);
        button.setAttribute('aria-pressed', String(selected));
    }

    try { localStorage.setItem('portfolio-language', lang); } catch (_) {}
}

for (const button of languageButtons) {
    button.addEventListener('click', () => setLanguage(button.dataset.lang));
}

let initialLanguage = 'en';
try {
    const saved = localStorage.getItem('portfolio-language');
    if (saved === 'fr' || saved === 'en') initialLanguage = saved;
} catch (_) {}
setLanguage(initialLanguage);
