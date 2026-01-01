export type Project = {
  title: string;
  category: string;
  image: string;
  description: string;
  slug: string;
  source: string;
  Technologies: string[];
  KeyFeatures: string[];
  role: string;
};

export const projects: Project[] = [
  {
    title: "Baki",
    slug: "baki",
    category: "applications",
    image: "/assets/images/project-1.png",
    description:
      "Baki is a social networking mobile application built for travelers who want to connect, share travel experiences, and find compatible travel companions. The platform matches users based on destinations, travel dates, and shared interests, helping solo travelers and groups plan trips together more confidently. The app focuses on real-time interaction, discovery, and community-driven engagement",
    source: "http://cafebazaar.ir/app/?id=ir.baki.app",
    Technologies: [
      "React",
      "Ionic",
      "Node.js",
      "GraphQL",
      "TypeScript",
      "Nexus",
      "Prisma",
      "PostgreSQL",
    ],
    KeyFeatures: [
      "Developed a mobile-first, responsive UI using React and Ionic",
      "Designed and implemented a scalable GraphQL API with Node.js and TypeScript",
      "Implemented real-time user-to-user chat functionality",
      "Built a notification system to improve user engagement",
      "Created an explore feature for discovering potential travel partners",
      "Implemented authentication, authorization, and user profile management",
    ],
    role: "Full-Stack Developer",
  },
  {
    title: "Liza",
    slug: "liza",
    category: "web development",
    image: "/assets/images/project-2.png",
    description:
      "Liza is a modern e-commerce web application focused on selling customizable eyeglass frames. The platform enables users to design their own eyewear by selecting frame styles, colors, and specifications, then place orders directly through a seamless shopping experience. The project emphasizes performance, usability, and flexibility in managing product data.",
    source: "https://ani-design.ir/",
    Technologies: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "TanStack Query",
      "Strapi (Headless CMS)",
      "PostgreSQL",
    ],
    KeyFeatures: [
      "Developed a responsive and accessible UI using Next.js, TypeScript, and TailwindCSS",
      "Implemented server-side rendering and optimized routing for SEO and performance",
      "Used TanStack Query to manage API data fetching, caching, and synchronization",
      "Built an interactive eyeglass frame customization tool with real-time previews",
      "Integrated Strapi as a headless CMS for managing products, content, and media",
      "Connected Strapi to a PostgreSQL database for scalable data management",
      "Applied performance optimizations such as image optimization and lazy loading",
    ],
    role: "Front-End & Back-End Collaborator",
  },
  {
    title: "Armenian Grillhouse",
    slug: "armenian-grillhouse",
    category: "web development",
    image: "/assets/images/project-3.png",
    description:
      "Armenian Grillhouse is a multilingual restaurant website designed to provide customers with a seamless online dining experience. The platform allows users to browse the restaurant’s menu in multiple languages, place food and drink orders online, and complete secure payments through Stripe. The website focuses on performance, accessibility, and mobile usability to serve both local and international customers.",
    source: "https://ani-design.ir/",
    Technologies: [
      "Next.js",
      "React",
      "Node.js",
      "GraphQL",
      "TailwindCSS",
      "Stripe",
    ],
    KeyFeatures: [
      "Built a responsive and multilingual UI using Next.js and TailwindCSS",
      "Implemented dynamic menu browsing with real-time data from the backend",
      "Developed online ordering functionality for food and drinks",
      "Integrated Stripe for secure and reliable payment processing",
      "Connected the frontend to a GraphQL backend for orders and content",
      "Optimized accessibility, performance, and mobile usability",
    ],
    role: "Front-End & Back-End Collaborator",
  },
  {
    title: "Polita",
    slug: "polita",
    category: "web & mobile development",
    image: "/assets/images/project-4.png",
    description:
      "Polita is a modern web and mobile accounting application designed to help small and medium-sized businesses manage their finances efficiently. The platform enables users to create and manage invoices, track products, generate purchase and sales reports, and handle employee access. Polita focuses on simplicity, data security, and multi-user accessibility to streamline financial operations.",
    source: "https://polita.ir/",
    Technologies: ["React", "Ionic", "Node.js", "GraphQL", "TypeScript"],
    KeyFeatures: [
      "Built a responsive web and mobile user interface using React and Ionic",
      "Created and managed purchase and sales invoices",
      "Implemented product management with pricing control",
      "Generated detailed purchase and sales reports",
      "Added employee management with role-based access control",
      "Enabled employee login and restricted access based on roles",
      "Developed check (cheque) management for received and payable checks",
      "Implemented notifications for check due dates",
      "Built a scalable backend using Node.js and GraphQL",
    ],
    role: "Front-End & Back-End Developer",
  },
  {
    title: "Chi Bokhorim?",
    slug: "chibokhorim",
    category: "web & mobile development",
    image: "/assets/images/project-5.png",
    description:
      "Chi Bokhorim? is a food recipe application featuring hundreds of curated recipes with detailed instructions and step-by-step cooking videos. The app helps users decide what to cook by offering smart suggestions and an interactive experience. It also includes an AI-powered chat and a virtual chef assistant to guide users through recipes, answer cooking questions, and provide personalized recommendations.",
    source: "https://chibokhorimapp.ir/",
    Technologies: ["React", "Ionic", "Node.js", "GraphQL"],
    KeyFeatures: [
      "Developed a cross-platform web and mobile app using React and Ionic",
      "Provided access to hundreds of recipes with full descriptions and ingredients",
      "Included step-by-step cooking videos for each recipe",
      "Implemented AI-powered chat to help users choose meals and answer questions",
      "Added a virtual chef assistant for interactive cooking guidance",
      "Built a scalable backend using Node.js and GraphQL",
      "Optimized performance and user experience for mobile devices",
    ],
    role: "Front-End & Back-End Collaborator",
  },
];
