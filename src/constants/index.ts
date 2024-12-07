import {
    logo,
    logo3,
    mobile,
    creator,
    typescript,
    reactjs,
    nodejs,
    mongodb,
    docker,
    threejs,
    rust,
    stealth,
    deadpoolMe,
    deadpoolThumbsUp
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "FPS Aimbot",
        icon: deadpoolMe,
    },
    {
        title: "Content Writer",
        icon: deadpoolThumbsUp,
    },
];

const technologies = [
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Rust",
      icon: rust,
    },
    {
      name: "docker",
      icon: docker,
    },
];

const experiences = [
    {
        title: "Software Engineer",
        company_name: "Udooh",
        icon: stealth,
        iconBg: "#E6DEDD",
        date: "May 2024 - Present...",
        points: [
            "Leading the platform UI development and MVP definition to acquire the first set of paying customers",
            "Built a dynamic, responsive discovery website paired with ZCal meeting Scheduler and GCP serverless Cloud Run Function implementing python functions framework to capture user data\n",
            "Developed the Admin UI for the sales and monitoring team, enabling them to add screen entries, create merchant and brand users, review published promo content, monitor individual merchant and brand campaigns and active/inactive screens list\n",
            "Designed and implemented the Experience module for MSME merchants, integrating physical-to-digital customer journeys (QR, video, gamification) with advanced tracking and customer unification systems, driving a 40% increase in customer signups\n",
            "Built the Channels UI to expedite the requirement for a virtual channel embed into merchants’ browsers/signage to display their content playlists. Implemented Firebase FCM for real time playlist updation\n",
            "Developed the Admin UI for the sales and monitoring team, enabling them to add screen entries, create merchant and brand\n" +
            "users, and review published MP4 content",
            "Containerized the ReactJS platform UI on Docker and deployed Dev and Production Environments on Railway with Autoscaling, featuring less than 1% uptime loss"

        ],
    },
    {
        title: "Frontend Developer",
        company_name: "Lifesight",
        icon: reactjs,
        iconBg: "#E6DEDD",
        date: "JUL 2022 - MAY 2024",
        points: [
            "Engineered features, performed bug fixes, and collaboratively reviewed teammates’ code for customer engagement module, incorporating Unlayer for template building (Whatsapp and Email campaign orchestration) and creating interactive forms, leading to a gain of 1000+ upvotes and 700 customer signups on ProductHunt \n",
            "Enabled platform analytics solutions [SessionStack, Heap, Segment] for the growth and prod-ops team",
            "Integrated custom JS SDK in partner shopify stores’ websites for event tracking, and enhanced customer profiling",
            "Ownership of major measurement feature-sets: Attribution, MMM, Scenario Planning & Forecasting, Incrementality with Causal Inference for optimized marketing strategies",
            "Built easy-to-use components involving migration from reCharts and amCharts to FusionCharts, setting up a custom theme manager aligning the maps and charts with our base UI",
        ],
    },
    {
        title: "Product Intern",
        company_name: "Lifesight",
        icon: creator,
        iconBg: "#E6DEDD",
        date: "JAN 2022 - JUN 2022",
        points: [
            "Created PRDs, detailed epics and user stories based on product requirements and scope from stakeholders",
            "Actively worked in ideating a robust user management module, integrating advanced authentication and authorization on top of Firebase",
            "Worked closely in benchmarking the messaging orchestration partners, involving Sendgrid and Twilio SMS",
        ],
    },
];

const projects = [
    {
        name: "Generic AVL Project",
        description:
            "A Generic AVL tree implemented using C++ templates providing several methods for interacting with the AVL tree,\n" +
            "including insertion, deletion, searching, and tree traversal. Additionally, a forward iterator is provided to traverse the AVL tree in an inorder fashion",
        tags: [
            {
                name: "C++ Templates",
                color: "blue-text-gradient",
            },
        ],
        source_code_link: "https://github.com/ShubhamK-2907/generic-AVL-Project",
        icon: logo,
        iconBg: "#E6DEDD",
    },
    {
        name: "Dr. Spock’s Maze",
        description:
            "An interactive gambling game, inspired from the show \"The Price Is Right\" where players drop a ball from the top of a\n" +
            "peg-filled board, aiming for slots with different multipliers. Built on top of React.js and Node.js for an engaging, secure experience",
        tags: [
            {
                name: "Typescript",
                color: "pink-text-gradient",
            },
            {
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "NodeJS",
                color: "green-text-gradient",
            },
        ],
        source_code_link: "https://github.com/ShubhamK-2907/Dr-Spocks-Maze",
        icon: logo3,
        iconBg: "#E6DEDD",
    },
    {
        name: "File Compressor",
        description:
            "A Rust-based file compression utility to efficiently compress files using Gzip. Utilized the flate2 crate’s GzEncoder for high compression ratios and performance. Implemented robust file I/O operations with std::fs::File and std::io::BufReader for reading and writing files. Incorporated error handling and performance measurement using Rust's standard library features to ensure reliability and efficiency in compressing files",
        tags: [
            {
                name: "Rust",
                color: "blue-text-gradient",
            },
        ],
        source_code_link: "https://github.com/ShubhamK-2907/file_compressor",
        icon: logo,
        iconBg: "#E6DEDD",
    },
    {
        name: "My Pathfinder Visualiser",
        description:
            " The Pathfinding Algorithm Visualizer is an interactive tool developed using Svelte/SvelteKit and TypeScript, designed to\n" +
            "demonstrate and analyze pathfinding algorithms such as A*, BFS, DFS, and Dijkstra. This visualizer features an intuitive interface that allows users to customize grid size and obstacles, and includes player functionality for pausing and rewinding the algorithm's execution",
        tags: [
            {
                name: "Typescript",
                color: "blue-text-gradient",
            },
            {
                name: "SvelteJS",
                color: "green-text-gradient",
            },
            {
                name: "Vercel",
                color: "pink-text-gradient",
            },
        ],
        source_code_link: "https://github.com/ShubhamK-2907/MyPathFinder",
        icon: logo3,
        iconBg: "#E6DEDD",
    },
    {
        name: "KSketch",
        description:
            "KSketch is an Excalidraw clone built with Vite, React, and TypeScript, featuring a hand-drawn style using Rough.js. It offers\n" +
            "tools for drawing, moving, resizing, and editing text, with pan and zoom functionalities.",
        tags: [
            {
                name: "ReactJS",
                color: "blue-text-gradient",
            },
            {
                name: "Cypress",
                color: "pink-text-gradient",
            },
            {
                name: "RoughJS",
                color: "green-text-gradient",
            },
        ],
        source_code_link: "https://github.com/ShubhamK-2907/Ksketch",
        icon: logo,
        iconBg: "#E6DEDD",
    },
    {
        name: "Apple Iphone Website Clone",
        description:
            "Built an apple Iphone Website Clone using React, GSAP and ThreeJS for animations and image modelling",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "GSAP",
                color: "green-text-gradient",
            },
            {
                name: "ThreeJS",
                color: "pink-text-gradient",
            },
        ],
        source_code_link: "https://github.com/ShubhamK-2907/apple-clone",
        icon: logo3,
        iconBg: "#E6DEDD",
    },
    {
        name: "N-Puzzle Game",
        description:
            "This is a basic implementation of the n-puzzle problem in the form of a game written in vanilla js",
        tags: [
            {
                name: "Javascript",
                color: "blue-text-gradient",
            },
        ],
        source_code_link:
            "https://github.com/ShubhamK-2907/n-puzzle-game",
        icon: logo,
        iconBg: "#E6DEDD",
    },
    {
        name: "Clumsy Bird",
        description:
            "A flappy bird control game built on top of vanilla JS",
        tags: [
            {
                name: "Javascript",
                color: "blue-text-gradient",
            },
            {
                name: "Grunt",
                color: "green-text-gradient",
            },
        ],
        source_code_link:
            "https://github.com/ShubhamK-2907/clumsy-bird",
        icon: logo3,
        iconBg: "#E6DEDD",
    },
];

export { services, technologies, experiences, projects };
