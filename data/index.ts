export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export const email = "muntazirhaiderc320@gmail.com";

export const alternateImage =
  "https://res.cloudinary.com/ddwxsev3x/image/upload/v1714827560/Image/ghjtxay4tpnnvwqeygfw.jpg";

export const gridItems = [
  {
    id: 1,
    title: "Summary",
    description:
      "My name is Muntazir Haider, and I am a final-year BCA student with a CGPA of 9.0. I am from Lucknow and have developed strong expertise in the MERN stack and Next.js. Alongside my studies, I have solved over 400 DSA problems, completed two internships, and built several impactful projects. I am passionate about creating innovative solutions and continuously enhancing my technical skills.",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm passionate about building tech solutions.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2 word-wrap",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My Skills",
    // description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Make it work, make it right, make it fast.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Code is like humor. When you have to explain it, it’s bad.",
    description: "- A Wise Man",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "VisualVerse - Social Media Platform ",
    des: "The Visual Verse app provides a seamless and engaging social experience with its intuitive 3-step registration process, featuring secure email OTP validation and a user-friendly forgot password functionality. The homepage encourages interaction, allowing users to create posts, view others' content, manage their friend list, and actively engage through likes and comments. The app supports real-time chats, including group conversations, smooth video calling, and instant notifications to keep users up-to-date. ",
    img: "https://res.cloudinary.com/ddwxsev3x/image/upload/v1734441593/Image/jmkhvquqoiqquwcnqpzv.png",
    iconLists: [
      "/re.svg",
      "/js.svg",
      "/mui.svg",
      "/cloudinary.svg",
      "/redux.svg",
      "/nodejs.svg",
      "/mongodb.svg",
    ],
    link: "https://visualverseweb.onrender.com",
    tech: [
      "react",
      "javascript",
      "mui",
      "cloudinary",
      "redux",
      "nodejs",
      "mongodb",
    ],
  },
  {
    id: 2,
    title: "Tracko - Track Your Task And Sync Workflow",
    des: "Tracko is a dynamic task management platform inspired by Jira, featuring a dashboard that visualizes project status with interactive charts, bars, and tables. Users can seamlessly search tasks and projects while enjoying role-based access control for secure collaboration. Its drag-and-drop interface simplifies task updates, complemented by customizable light and dark modes for user convenience. Tracko redefines productivity with an intuitive design and interactive functionality, empowering teams to manage projects effortlessly.",
    img: "https://res.cloudinary.com/ddwxsev3x/image/upload/v1734441592/Image/yz8hnvcfbsfv4pde5yua.png",
    iconLists: [
      "/next.svg",
      "/ts.svg",
      "/tail.svg",
      "/rechart.svg",
      "/cloudinary.svg",
      "/redux.svg",
      "/nodejs.svg",
      "/supabase.svg",
    ],
    link: "https://tracko-web.onrender.com",
    tech: [
      "react",
      "typescript",
      "tailwind",
      "recharts",
      "cloudinary",
      "redux",
      "nodejs",
      "supabase",
    ],
  },
  {
    id: 3,
    title: "UrbanSquare - RealState Application To List And Search Properties",
    des: "UrbanSquare is a real estate platform designed for seamless property transactions. Users can list properties for sale or rent with detailed images, while advanced search and filter options enhance property discovery. The app ensures secure authentication using JWT and bcrypt, and supports Google login via Firebase for convenience. With its user-friendly interface and robust security, UrbanSquare streamlines real estate management for both buyers and sellers.",
    img: "https://res.cloudinary.com/ddwxsev3x/image/upload/v1734441593/Image/cyokzeyc0nnd5pene1qu.png",
    iconLists: [
      "/re.svg",
      "js.svg",
      "/tail.svg",
      "/firebase.svg",
      "/redux.svg",
      "/nodejs.svg",
      "/supabase.svg",
    ],
    link: "https://urban-square.onrender.com",
    tech: [
      "react",
      "javascript",
      "tailwind",
      "firebase",
      "redux",
      "nodejs",
      "mongodb",
    ],
  },
];

export const resources = [
  // 1.mongo db
  {
    quote:
      "This 39-video playlist focuses solely on MongoDB, offering a straightforward, practical approach to learning. It’s ideal for beginners and those looking to solidify their database skills, with each video building progressively on key concepts. Perfect for gaining a strong foundation in modern database management without any unnecessary complexity.",
    name: "Master MongoDB with Engineering Digest",
    link: "https://youtube.com/playlist?list=PLA3GkZPtsafZydhN4nP0h7hw7PQuLsBv1&feature=shared",
    picture:
      "https://res.cloudinary.com/ddwxsev3x/image/upload/v1732995200/Image/uuhq04jevzsn7wwigt26.jpg",
  },
  // react
  {
    quote:
      "This React playlist dives into the core concepts of building dynamic user interfaces. Ideal for beginners and intermediate learners, it simplifies state management, component structures, and hooks. A practical guide for mastering front-end development with React.",
    name: "Learn React Efficiently with Chai aur Code",
    link: "https://youtube.com/playlist?list=PLu71SKxNbfoDqgPchmvIsL4hTnJIrtige&feature=shared",
    picture:
      "https://res.cloudinary.com/ddwxsev3x/image/upload/v1732995200/Image/ifiubgf9oobnuz00pdqr.jpg",
  },
  // nextjs
  {
    quote:
      "This Next.js one shot 14 hours long videp covers everything from static site generation to API routes. Whether you're starting with server-side rendering or enhancing performance, it's a comprehensive resource for modern web development.",
    name: "Master Next.js with Sangam Mukherjee",
    link: "https://youtu.be/mQnWCmVErnw?feature=shared",
    picture: "",
  },
  // dsa
  {
    quote:
      "This DSA playlist is a solid starting point for understanding key algorithms and data structures. From arrays and linked lists to dynamic programming, it’s perfect for mastering problem-solving and cracking coding interviews.",
    name: "Crack DSA with CodeHelp - by Babbar ",
    link: "https://youtube.com/playlist?list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&feature=shared",
    picture:
      "https://res.cloudinary.com/ddwxsev3x/image/upload/v1732995674/Image/e4shziffe7hqssrzis4q.jpg",
  },
  // java script
  {
    quote:
      "This JavaScript playlist walks you through essential concepts, from basic syntax to advanced topics like closures and asynchronous programming. Ideal for both beginners and those looking to deepen their understanding, it covers everything you need to become proficient in JavaScript.",
    name: "Explore JavaScript with Code aor Chai",
    link: "https://youtube.com/playlist?list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&feature=shared",
    picture:
      "https://res.cloudinary.com/ddwxsev3x/image/upload/v1732995200/Image/ifiubgf9oobnuz00pdqr.jpg",
  },
];

export const companies = [
  {
    id: 1,
    name: "vscode",
    img: "/vsCode.svg",
  },
  {
    id: 2,
    name: "mongodb",
    img: "/mongodb.svg",
  },
  {
    id: 3,
    name: "postman",
    img: "/postman.svg",
  },
  {
    id: 4,
    name: "github",
    img: "/github.svg",
  },
  {
    id: 5,
    name: "supabase",
    img: "/supabase.svg",
  },
  {
    id: 6,
    name: "leetcode",
    img: "/leetcode.svg",
  },
  {
    id: 7,
    name: "geekforgeeks",
    img: "/gfg.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Mern Stack Developer At",
    name: "Inevitable Group, Lucknow ",
    date: "July 2023 - September 2023",
    desc: "Developed and maintained full-stack web applications using React, Node.js, and MongoDB. Improved application performance and user experience by resolving issues and implementing new features. Contributed to a project aimed at optimizing internal processes, streamlining employee data management. Utilized tools like Winston logger, Cypress, Mocha, Chai, and Swagger to ensure high code quality, thorough testing, and proper documentation",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Software Developer Intern At",
    name: "Mtechyard, Kanpur",
    date: "January 2024 - April 2024",
    desc: "Completed a remote internship, contributing to global projects by transitioning a Laravel and PHP application into a modern MERN stack. Focused on developing a fully functional frontend with advanced UI features, ensuring a seamless user experience. Demonstrated passion and dedication by working late hours after college, collaborating closely with the team and team leader to ensure successful project completion and effective communication throughout the development process.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },

  {
    id: 3,
    title: "Problem Solving",
    desc: "Developed a strong foundation in Data Structures and Algorithms by solving over 400 problems on LeetCode and over 150 on GeeksforGeeks. Gained in-depth knowledge of various problem-solving patterns and algorithms, including dynamic programming, backtracking, graph traversal, and greedy techniques. This extensive practice has sharpened my skills in approaching real-world problems methodically and efficiently. My passion lies in leveraging these concepts to design optimized, scalable solutions for complex challenges, making a meaningful impact in software development.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Full-Stack Development Projects",
    desc: "Worked on multiple projects involving diverse tech stacks and advanced technologies. Implemented complex searching and filtering algorithms to enhance data retrieval efficiency. Utilized WebSocket for real-time communication and WebRTC for video streaming solutions. Developed CRUD operations with robust security measures, employing advanced and federated authentication methods. Integrated ORM solutions and platforms like Supabase to streamline database interactions and ensure scalable backend services.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/MuntazirHaider",
  },
  {
    id: 2,
    img: "/leetcode-bw.svg",
    link: "https://leetcode.com/u/MuntazirHaider",
  },
  {
    id: 3,
    img: "/insta.svg",
    link: "https://www.instagram.com/mhaider_09/?hl=en",
  },
];
