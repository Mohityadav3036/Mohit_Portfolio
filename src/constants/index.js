import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    
    project1,
    project2,
    project3,
    secureself,
    rajtenthouse,
    codehelp,
    astute,
    chaiaurcode,
    websphere,
    webprompt

  } from "../assets";
  
  export const navLinks = [
    {
      id:"Download CV",
      title:"Download CV",
    },
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "DSA Problem Solver",
      icon: backend,
    },
    // {
    //   title: "React Native Developer",
    //   icon: mobile,
    // },
    
    {
      title: "Graphic Designer",
      icon: creator,
    },
    // {
    //   title: "Video Editer",
    //   icon: web,
    // },
    // {
    //   title: "Problem Solver",
    //   icon: mobile,
    // },
    // {
    //   title: "UI/UX Designer",
    //   icon: backend,
    // },
    // {
    //   title: "Systems Architect",
    //   icon: creator,
    // },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    // {
    //   name: "Three JS",
    //   icon: threejs,
    // },
    {
      name: "git",
      icon: git,
    },
    // {
    //   name: "figma",
    //   icon: figma,
    // },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "Full Stack Developer Intern",
      company_name: "Astute Lex Servicado",
      icon: astute,
      iconBg: "#383E56",
      date: "September 2024 - Present",
      points: [
        "Collaborated in building dynamic, full-stack solutions, integrating APIs and managing state efficiently with React hooks, which improved application performance by 25%. Utilized Next.js API routes, leading to a 10% increase in user satisfaction through seamless interactions.",
        "Built and maintained scalable, reusable UI components leveraging React and Next.js, reducing development time by 20% and improving cross-browser compatibility and responsive design, increasing user engagement by 15%.",
        "Developed and optimized high-performance web applications using Next.js, improving load times by up to 40% with server-side rendering (SSR) and static site generation (SSG), which also boosted SEO rankings by 30%.",
      ],
    },
    
    {
      title: "MERN Stack Developer",
      company_name: "CodeHelp",
      icon: codehelp,
      iconBg: "#383E56",
      date: "March 2023 - April 2024",
      points: [
        "Learned full stack web developement which include MERN stack.",
        "Created several project with a Major Edtech project built on react framework.",
        "Learn Skill like:- Html, CSS, Tailwindcss, Javascript, Reactjs, Nodejs, MongoDB, Expressjs, Threejs.",
        "Implementing responsive design principles and ensuring compatibility across various browsers and devices..",
      ],
    },
    {
      title: "DSA Problem Solver",
      company_name: "Codehelp",
      icon: codehelp,
      iconBg: "#383E56",
      date: "Dec 2022 - July 2024",
      points: [
        "Proficient in Data Structures and Algorithms (DSA) concepts learned through CodeHelp.",
        "Strong understanding and application of various data structures such as arrays, linked lists, trees, graphs, and hash tables.",
        "Applied DSA principles to solve over 300 LeetCode and 350 GeeksforGeeks problems.",
        "Familiarity with advanced topics including string manipulation, backtracking, bit manipulation, and greedy algorithms.",
      ],
    },
    // {
    //   title: "React Native Developer",
    //   company_name: "Chai aur Code",
    //   icon: chaiaurcode,
    //   iconBg: "#E6DEDD",
    //   date: "April 2024 - July 2024",
    //   points: [
    //     "Developing and maintaining mobile applications using React Native and related technologies..",
    //     "Writing efficient, scalable, and reusable code following best practices for mobile development..",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Integrating mobile applications with back-end services and APIs.",
    //   ],
    // },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Study Notion",
      description:
        "Our EdTech platform offers seamless course purchasing, featuring a user-friendly interface and a diverse range of subjects. Enhance your skills anytime, anywhere with our flexible learning solutions.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "MongoDB",
          color: "green-text-gradient",
        },
        {
          name: "Nodejs",
          color: "pink-text-gradient",
        },
      ],
      image: project1,
      source_code_link: "https://github.com/Mohityadav3036/studynotion-ed-tech-plateform",
      live_link: "https://studynotion-ed-tech-plateform.vercel.app/"
    },
    {
      name: "WedSphere",
      description:
        "WedSphere is a comprehensive wedding planning platform that brings everything you need under one roof. With an intuitive interface , it helps you plan your perfect wedding easily, anytime, anywhere.",
      tags: [
        {
          name: "MERN Stack",
          color: "blue-text-gradient",
        },
        {
          name: "Payment Gateway",
          color: "green-text-gradient",
        },
       
      ],
      image: websphere,
      source_code_link: "https://github.com/Mohityadav3036/Websphere/",
      live_link: "https://websphere-blush.vercel.app/"
    },
    {
      name: "WebPrompt",
      description:
       "WebPrompt is used to generate a live website instantly based on user input. With an intuitive interface and powerful features, it ensures seamless, dynamic website creation, customization, and deployment.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Node",
          color: "green-text-gradient",
        },
        {
          name: "GenAi",
          color: "pink-text-gradient",
        },
      ],
      image: webprompt,
      source_code_link: "https://github.com/Mohityadav3036/WebPrompt",
      live_link: "https://webprompt-xi.vercel.app/"
    },
    {
      name: "Secure Self",
      description:
        "Our document upload website allows users to easily and securely upload, manage, and share their documents. With a user-friendly interface and robust features, it ensures seamless file handling and organization.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Node",
          color: "green-text-gradient",
        },
        {
          name: "Emailjs",
          color: "pink-text-gradient",
        },
      ],
      image: secureself,
      source_code_link: "https://github.com/Mohityadav3036/secureself_frontend",
      live_link: "https://secureself-frontend-8xbs.vercel.app/"
    },
    {
      name: "Password Generator",
      description:
        "Our password generator creates strong, secure passwords with customizable length and complexity. Protect your accounts with randomly generated, highly secure passwords to ensure maximum safety.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JS",
          color: "pink-text-gradient",
        },
      ],
      image: project2,
      source_code_link: "https://github.com/Mohityadav3036/password_generator",
      live_link: "https://password-generator-smoky-pi.vercel.app/"
    },
    {
      name: "3D PortFolio",
      description:
        "Our 3D self-portfolio showcases your work in an interactive, dynamic format. Impress potential employers with a visually engaging and personalized presentation of your skills and achievements.",
      tags: [
        {
          name: "Threejs",
          color: "blue-text-gradient",
        },
        {
          name: "React",
          color: "green-text-gradient",
        },
        {
          name: "Emailjs",
          color: "pink-text-gradient",
        },
      ],
      image: project3,
      source_code_link: "https://github.com/Mohityadav3036/Mohit_Portfolio",
      live_link: "https://mohit-portfolio-alpha.vercel.app/"
    },
    {
      name: "Raj Tent House ",
      description:
        "I built the Raj Tent House website as a freelancing project, focusing on showcasing wedding event services. The site features an elegant design with responsive layouts, highlighting event spaces, decor, and vendors.",
      tags: [
        {
          name: "Nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "green-text-gradient",
        },
        {
          name: "Emailjs",
          color: "pink-text-gradient",
        },
      ],
      image: rajtenthouse,
      source_code_link: "https://github.com/Mohityadav3036/website_raj_tent_house",
      live_link: "https://website-raj-tent-house.vercel.app/"
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };