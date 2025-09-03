/**
 * Resume Website Template Configuration - EXAMPLE
 * 
 * This is an example of a completed configuration file.
 * Copy this to config.js and customize with your information.
 */

const resumeConfig = {
    // ============================================================================
    // PERSONAL INFORMATION
    // ============================================================================
    personal: {
        name: "John Doe",
        email: "john.doe@email.com",
        jobTitle: {
            en: "Full Stack Developer",
            fr: "Développeur Full Stack"
        },
        yearsExperience: "5+",
        summary: {
            en: "Experienced Full Stack Developer with over 5 years of expertise in modern web technologies including React, Node.js, and cloud platforms. Specialized in building scalable applications, API development, and database optimization. Passionate about clean code, user experience, and continuous learning.",
            fr: "Développeur Full Stack expérimenté avec plus de 5 ans d'expertise dans les technologies web modernes incluant React, Node.js et les plateformes cloud. Spécialisé dans la création d'applications évolutives, le développement d'API et l'optimisation de bases de données. Passionné par le code propre, l'expérience utilisateur et l'apprentissage continu."
        }
    },

    // ============================================================================
    // WORK EXPERIENCE
    // ============================================================================
    workHistory: {
        en: [
            {
                title: "Senior Full Stack Developer",
                company: "Tech Solutions Inc.",
                date: "01.2022 - Current",
                responsibilities: [
                    "Led development of microservices architecture serving 100K+ daily users",
                    "Built responsive React applications with TypeScript and modern UI libraries",
                    "Optimized database queries reducing response time by 40%",
                    "Mentored junior developers and conducted code reviews"
                ]
            },
            {
                title: "Frontend Developer",
                company: "Digital Agency Co.",
                date: "03.2020 - 12.2021",
                responsibilities: [
                    "Developed responsive websites using React, Vue.js, and modern CSS",
                    "Collaborated with design team to implement pixel-perfect interfaces",
                    "Integrated third-party APIs and payment systems",
                    "Improved site performance achieving 95+ Lighthouse scores"
                ]
            },
            {
                title: "Junior Web Developer",
                company: "StartUp Ventures",
                date: "06.2019 - 02.2020",
                responsibilities: [
                    "Built custom WordPress themes and plugins",
                    "Developed RESTful APIs using Node.js and Express",
                    "Managed MySQL databases and implemented data migrations",
                    "Participated in agile development processes"
                ]
            }
        ],
        fr: [
            {
                title: "Développeur Full Stack Senior",
                company: "Tech Solutions Inc.",
                date: "01.2022 - Actuellement",
                responsibilities: [
                    "Dirigé le développement d'architecture de microservices servant 100K+ utilisateurs quotidiens",
                    "Créé des applications React réactives avec TypeScript et des bibliothèques UI modernes",
                    "Optimisé les requêtes de base de données réduisant le temps de réponse de 40%",
                    "Encadré les développeurs juniors et effectué des revues de code"
                ]
            },
            {
                title: "Développeur Frontend",
                company: "Digital Agency Co.",
                date: "03.2020 - 12.2021",
                responsibilities: [
                    "Développé des sites web réactifs utilisant React, Vue.js et CSS moderne",
                    "Collaboré avec l'équipe de design pour implémenter des interfaces parfaites au pixel près",
                    "Intégré des API tierces et systèmes de paiement",
                    "Amélioré les performances du site atteignant des scores Lighthouse de 95+"
                ]
            },
            {
                title: "Développeur Web Junior",
                company: "StartUp Ventures",
                date: "06.2019 - 02.2020",
                responsibilities: [
                    "Créé des thèmes et plugins WordPress personnalisés",
                    "Développé des API RESTful utilisant Node.js et Express",
                    "Géré des bases de données MySQL et implémenté des migrations de données",
                    "Participé aux processus de développement agile"
                ]
            }
        ]
    },

    // ============================================================================
    // SKILLS
    // ============================================================================
    skills: {
        en: [
            "JavaScript/TypeScript",
            "React & Redux",
            "Node.js & Express",
            "Python & Django",
            "MongoDB & PostgreSQL",
            "AWS & Docker",
            "Git & CI/CD",
            "REST & GraphQL APIs",
            "HTML5 & CSS3",
            "Agile Methodologies"
        ],
        fr: [
            "JavaScript/TypeScript",
            "React & Redux",
            "Node.js & Express",
            "Python & Django",
            "MongoDB & PostgreSQL",
            "AWS & Docker",
            "Git & CI/CD",
            "APIs REST & GraphQL",
            "HTML5 & CSS3",
            "Méthodologies Agiles"
        ]
    },

    // ============================================================================
    // LANGUAGES
    // ============================================================================
    languages: {
        en: [
            {
                name: "English",
                proficiency: "Native",
                level: 100
            },
            {
                name: "Spanish",
                proficiency: "Fluent",
                level: 85
            },
            {
                name: "French",
                proficiency: "Conversational",
                level: 70
            }
        ],
        fr: [
            {
                name: "Anglais",
                proficiency: "Natif",
                level: 100
            },
            {
                name: "Espagnol",
                proficiency: "Courant",
                level: 85
            },
            {
                name: "Français",
                proficiency: "Conversationnel",
                level: 70
            }
        ]
    },

    // ============================================================================
    // TIMELINE
    // ============================================================================
    timeline: {
        en: [
            {
                title: "Senior Full Stack Developer - Tech Solutions Inc.",
                date: "01.2022 - Current"
            },
            {
                title: "Frontend Developer - Digital Agency Co.",
                date: "03.2020 - 12.2021"
            },
            {
                title: "Junior Web Developer - StartUp Ventures",
                date: "06.2019 - 02.2020"
            },
            {
                title: "Computer Science Degree - University",
                date: "09.2015 - 05.2019"
            }
        ],
        fr: [
            {
                title: "Développeur Full Stack Senior - Tech Solutions Inc.",
                date: "01.2022 - Actuellement"
            },
            {
                title: "Développeur Frontend - Digital Agency Co.",
                date: "03.2020 - 12.2021"
            },
            {
                title: "Développeur Web Junior - StartUp Ventures",
                date: "06.2019 - 02.2020"
            },
            {
                title: "Diplôme en Informatique - Université",
                date: "09.2015 - 05.2019"
            }
        ]
    },

    // ============================================================================
    // THEME CONFIGURATION
    // ============================================================================
    theme: {
        preset: 'blue', // Options: 'blue', 'green', 'purple', 'orange', 'red', 'custom'
    },

    // ============================================================================
    // FOOTER CONFIGURATION
    // ============================================================================
    footer: {
        show: true,
        text: {
            en: "This code is free to use, modify, distribute without restriction. No attribution is required. Nothing is obfuscated, and transparency is encouraged!",
            fr: "Ce code est libre d'utilisation, modification, distribution sans restriction. Aucune attribution n'est requise. Rien n'est obfusqué, et la transparence est encouragée!"
        },
        github: "johndoe" // Replace with your GitHub username
    }
};
