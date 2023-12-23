import {ariktee, shopify, yabatech} from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Front End Developer",
        company_name: "Yabatech",
        icon: yabatech,
        iconBg: "#383E56",
        date: "March 2022 - October 2022",
        points: [
            "Developing and maintaining web applications using HTML, CSS, JavaScript, and Bootstrap and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Front End Developer",
        company_name: "Ariktee Logistics",
        icon: ariktee,
        iconBg: "#E6DEDD",
        date: "Jan 2021 - Feb 2022",
        points: [
            "Developing and maintaining web applications using Sass, Bootstrap, and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "Matthew Inc",
        icon: shopify,
        iconBg: "#E6DEDD",
        date: "Jan 2019 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    }
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Matthew-Ayinde',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: "Yelp Camp",
        description: "Yelp Camp is a web application (created primarily with bootstrap and nodeJs) that encompasses essential backend functionalities, including user authentication, mapping services, and geolocation features. Its user interface boasts simplicity and intuitiveness, providing an accessible and user-friendly experience. Check it out!",
        source_code_demo: 'https://glacial-plains-71847-f9ada60e670b.herokuapp.com/',
        source_code_link: 'https://github.com/Matthew-Ayinde/yelp-camp'
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: "ColorGuess Pro",
        description: "The application, 'ColorGuess Pro,' leverages the RGB color model to generate a random color and subsequently prompts the user to make an educated guess regarding the resultant hue. This interactive web game engages participants in a challenging and entertaining exercise of color perception and recognition.",
        source_code_demo: 'https://matthewcolorgame.netlify.app/',
        source_code_link: 'https://github.com/Matthew-Ayinde/colour-game'
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: "Book List",
        description: "My booklist project, created using HTML5, BootStrap and JavaScript, provides an intuitive platform for managing books with a user-friendly minimalistic approach. This project underscores my proficiency in web development and commitment to user-centered design, laying a strong foundation for future projects in this domain.",
        source_code_link: 'https://github.com/Matthew-Ayinde/book-list-project',
        source_code_demo: 'https://book-list-project-pi.vercel.app/'
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: "Book List",
        description: "My booklist project, created using HTML5, BootStrap and JavaScript, provides an intuitive platform for managing books with a user-friendly minimalistic approach. This project underscores my proficiency in web development and commitment to user-centered design, laying a strong foundation for future projects in this domain.",
        link: 'https://github.com/adrianhajdin/social_media_app',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real-Estate Application',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: 'https://github.com/adrianhajdin/projects_realestate',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    }
];