/**
 * Resume Website Template Configuration
 * 
 * INSTRUCTIONS:
 * 1. Replace all placeholder values with your actual information
 * 2. Modify the work history, skills, and languages arrays as needed
 * 3. Customize colors and theme settings
 * 4. Choose your background type (particle or sky)
 * 5. Update the footer information
 * 
 * TIP: Search for "YOUR_" to find all placeholders that need customization
 */

const resumeConfig = {
    // ============================================================================
    // BACKGROUND CONFIGURATION
    // ============================================================================
    background: {
        // Choose background type: 'particle' or 'sky'
        type: 'sky', // Options: 'particle' (default), 'sky' (3D clouds)
        
        // Particle Network Configuration (used when type is 'particle')
        particle: {
            particleCount: window.innerWidth > 768 ? 80 : 50, // Number of particles
            maxConnectionDistance: 150,      // Distance for particle connections (pixels)
            cursorInfluenceRadius: window.innerWidth > 768 ? 200 : 150, // Mouse interaction radius
            cursorAttractionStrength: 0.015, // Strength of mouse attraction
            particleSpeed: 0.2,              // Movement speed
            particleSize: { min: 2, max: 4 }, // Particle size range (pixels)
            colors: {
                particle: '#4a9eff',         // Primary particle color
                particleAlt: '#ffffff',      // Secondary particle color (20% of particles)
                connection: 'rgba(74, 158, 255, 0.3)', // Connection line color
                connectionActive: 'rgba(74, 158, 255, 0.6)' // Active connection color (mouse interaction)
            }
        },
        
        // Sky Background Configuration (used when type is 'sky')
        // Note: Colors use hexadecimal format WITHOUT the # symbol (e.g., 0x5eb7d9)
        sky: {
            skyColor: 0x5eb7d9,        // Main sky color
            cloudColor: 0xb1c2dc,      // Cloud color
            cloudShadowColor: 0x1b3a57, // Cloud shadow color
            sunColor: 0xff9c21,        // Sun color
            sunGlareColor: 0xfa6331,   // Sun glare color
            sunlightColor: 0xfa9531,   // Sunlight color
            speed: 1                   // Animation speed (0.5 = slower, 2 = faster)
        }
    },

    // ============================================================================
    // PERSONAL INFORMATION
    // ============================================================================
    personal: {
        // Full name as it should appear on the resume
        name: "YOUR_FULL_NAME",
        
        // Professional email address
        email: "your.email@domain.com",
        
        // Current job title or desired position
        jobTitle: {
            en: "YOUR_JOB_TITLE",
            fr: "VOTRE_TITRE_PROFESSIONNEL"
        },
        
        // Years of experience in your field
        yearsExperience: "X+",
        
        // Professional summary - describe your expertise and background
        summary: {
            en: "YOUR_PROFESSIONAL_SUMMARY_HERE. Describe your experience, specializations, key achievements, and what makes you unique in your field. This should be 2-3 sentences highlighting your expertise and value proposition.",
            fr: "VOTRE_RÉSUMÉ_PROFESSIONNEL_ICI. Décrivez votre expérience, spécialisations, réalisations clés et ce qui vous rend unique dans votre domaine. Ceci devrait être 2-3 phrases mettant en évidence votre expertise et votre proposition de valeur."
        }
    },

    // ============================================================================
    // WORK EXPERIENCE
    // ============================================================================
    workHistory: {
        en: [
            {
                title: "YOUR_CURRENT_JOB_TITLE",
                company: "YOUR_CURRENT_COMPANY",
                date: "MM.YYYY - Current",
                responsibilities: [
                    "YOUR_RESPONSIBILITY_1 - Describe a key responsibility or achievement",
                    "YOUR_RESPONSIBILITY_2 - Another important task or accomplishment",
                    "YOUR_RESPONSIBILITY_3 - Additional duties or projects you've handled",
                    "YOUR_RESPONSIBILITY_4 - More achievements or responsibilities"
                ]
            },
            {
                title: "YOUR_PREVIOUS_JOB_TITLE",
                company: "YOUR_PREVIOUS_COMPANY",
                date: "MM.YYYY - MM.YYYY",
                responsibilities: [
                    "YOUR_RESPONSIBILITY_1 - Key achievement in this role",
                    "YOUR_RESPONSIBILITY_2 - Important project or responsibility",
                    "YOUR_RESPONSIBILITY_3 - Additional accomplishments"
                ]
            }
            // Add more work experiences as needed following the same format
        ],
        fr: [
            {
                title: "VOTRE_TITRE_POSTE_ACTUEL",
                company: "VOTRE_ENTREPRISE_ACTUELLE",
                date: "MM.YYYY - Actuellement",
                responsibilities: [
                    "VOTRE_RESPONSABILITÉ_1 - Décrivez une responsabilité clé ou réalisation",
                    "VOTRE_RESPONSABILITÉ_2 - Une autre tâche importante ou accomplissement",
                    "VOTRE_RESPONSABILITÉ_3 - Fonctions supplémentaires ou projets gérés",
                    "VOTRE_RESPONSABILITÉ_4 - Plus de réalisations ou responsabilités"
                ]
            },
            {
                title: "VOTRE_TITRE_POSTE_PRÉCÉDENT",
                company: "VOTRE_ENTREPRISE_PRÉCÉDENTE",
                date: "MM.YYYY - MM.YYYY",
                responsibilities: [
                    "VOTRE_RESPONSABILITÉ_1 - Réalisation clé dans ce poste",
                    "VOTRE_RESPONSABILITÉ_2 - Projet important ou responsabilité",
                    "VOTRE_RESPONSABILITÉ_3 - Accomplissements supplémentaires"
                ]
            }
            // Ajoutez plus d'expériences de travail au besoin en suivant le même format
        ]
    },

    // ============================================================================
    // SKILLS
    // ============================================================================
    skills: {
        en: [
            "YOUR_SKILL_1",
            "YOUR_SKILL_2", 
            "YOUR_SKILL_3",
            "YOUR_SKILL_4",
            "YOUR_SKILL_5",
            "YOUR_SKILL_6",
            "YOUR_SKILL_7",
            "YOUR_SKILL_8",
            "YOUR_SKILL_9",
            "YOUR_SKILL_10"
            // Add or remove skills as needed
        ],
        fr: [
            "VOTRE_COMPÉTENCE_1",
            "VOTRE_COMPÉTENCE_2",
            "VOTRE_COMPÉTENCE_3", 
            "VOTRE_COMPÉTENCE_4",
            "VOTRE_COMPÉTENCE_5",
            "VOTRE_COMPÉTENCE_6",
            "VOTRE_COMPÉTENCE_7",
            "VOTRE_COMPÉTENCE_8",
            "VOTRE_COMPÉTENCE_9",
            "VOTRE_COMPÉTENCE_10"
            // Ajoutez ou supprimez des compétences au besoin
        ]
    },

    // ============================================================================
    // LANGUAGES
    // ============================================================================
    languages: {
        en: [
            {
                name: "YOUR_LANGUAGE_1",
                proficiency: "YOUR_PROFICIENCY_LEVEL", // e.g., "Native", "Fluent", "Conversational", "Basic"
                level: 90 // 0-100 percentage for visual bar
            },
            {
                name: "YOUR_LANGUAGE_2", 
                proficiency: "YOUR_PROFICIENCY_LEVEL",
                level: 85
            },
            {
                name: "YOUR_LANGUAGE_3",
                proficiency: "YOUR_PROFICIENCY_LEVEL", 
                level: 70
            }
            // Add or remove languages as needed
        ],
        fr: [
            {
                name: "VOTRE_LANGUE_1",
                proficiency: "VOTRE_NIVEAU_COMPÉTENCE", // ex: "Natif", "Courant", "Conversationnel", "Débutant"
                level: 90
            },
            {
                name: "VOTRE_LANGUE_2",
                proficiency: "VOTRE_NIVEAU_COMPÉTENCE",
                level: 85
            },
            {
                name: "VOTRE_LANGUE_3", 
                proficiency: "VOTRE_NIVEAU_COMPÉTENCE",
                level: 70
            }
            // Ajoutez ou supprimez des langues au besoin
        ]
    },

    // ============================================================================
    // TIMELINE (Career progression)
    // ============================================================================
    timeline: {
        en: [
            {
                title: "YOUR_CURRENT_POSITION - YOUR_CURRENT_COMPANY",
                date: "MM.YYYY - Current"
            },
            {
                title: "YOUR_PREVIOUS_POSITION - YOUR_PREVIOUS_COMPANY", 
                date: "MM.YYYY - MM.YYYY"
            },
            {
                title: "YOUR_EARLIER_POSITION - YOUR_EARLIER_COMPANY",
                date: "MM.YYYY - MM.YYYY"
            }
            // Add more timeline entries as needed
        ],
        fr: [
            {
                title: "VOTRE_POSTE_ACTUEL - VOTRE_ENTREPRISE_ACTUELLE",
                date: "MM.YYYY - Actuellement"
            },
            {
                title: "VOTRE_POSTE_PRÉCÉDENT - VOTRE_ENTREPRISE_PRÉCÉDENTE",
                date: "MM.YYYY - MM.YYYY"
            },
            {
                title: "VOTRE_POSTE_ANTÉRIEUR - VOTRE_ENTREPRISE_ANTÉRIEURE", 
                date: "MM.YYYY - MM.YYYY"
            }
            // Ajoutez plus d'entrées de chronologie au besoin
        ]
    },

    // ============================================================================
    // THEME CONFIGURATION
    // ============================================================================
    theme: {
        // Choose from predefined themes: 'blue', 'green', 'purple', 'orange', 'red'
        // Or set to 'custom' to use the custom colors below
        preset: 'blue',
        
        // Custom theme colors (only used if preset is set to 'custom')
        custom: {
            primary: '#007bff',
            primaryHover: '#0056b3',
            textPrimary: '#ffffff',
            textSecondary: 'rgba(255, 255, 255, 0.8)',
            textTertiary: 'rgba(255, 255, 255, 0.7)',
            surfacePrimary: 'rgba(255, 255, 255, 0.05)',
            surfaceSecondary: 'rgba(255, 255, 255, 0.08)',
            borderColor: 'rgba(255, 255, 255, 0.1)',
            shadowColor: 'rgba(0, 0, 0, 0.3)',
            // Background gradient
            backgroundGradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)'
        }
    },

    // ============================================================================
    // FOOTER CONFIGURATION
    // ============================================================================
    footer: {
        // Set to true to show the footer, false to hide it
        show: true,
        
        // Footer text - you can customize this message
        text: {
            en: "No Rights Reserved. This code is free to use, modify, distribute without restriction. No attribution is required. Nothing is obfuscated, and transparency is encouraged!",
            fr: "Aucun Droit Réservé. Ce code est libre d'utilisation, modification, distribution sans restriction. Aucune attribution n'est requise. Rien n'est obfusqué, et la transparence est encouragée!"
        },
        
        // Your GitHub username (will create link to github.com/USERNAME)
        github: "simardwtf" // CHANGE THIS TO YOUR GITHUB USERNAME TO PERMANENTLY REMOVE THE ORIGINAL OWNER "simardwtf"
    }
};

// ============================================================================
// PREDEFINED THEMES
// ============================================================================
const themePresets = {
    blue: {
        primary: '#007bff',
        primaryHover: '#0056b3', 
        accent: '#17a2b8',
        backgroundGradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)'
    },
    green: {
        primary: '#28a745',
        primaryHover: '#1e7e34',
        accent: '#20c997', 
        backgroundGradient: 'linear-gradient(135deg, #1a2e1a 0%, #162e21 50%, #0f4623 100%)'
    },
    purple: {
        primary: '#6f42c1',
        primaryHover: '#5a32a3',
        accent: '#e83e8c',
        backgroundGradient: 'linear-gradient(135deg, #2a1a2e 0%, #2e1638 50%, #4a0f60 100%)'
    },
    orange: {
        primary: '#fd7e14', 
        primaryHover: '#e8670e',
        accent: '#ffc107',
        backgroundGradient: 'linear-gradient(135deg, #2e1f1a 0%, #3e2516 50%, #602f0f 100%)'
    },
    red: {
        primary: '#dc3545',
        primaryHover: '#c82333',
        accent: '#fd7e14',
        backgroundGradient: 'linear-gradient(135deg, #2e1a1a 0%, #3e1616 50%, #600f0f 100%)'
    }
};
