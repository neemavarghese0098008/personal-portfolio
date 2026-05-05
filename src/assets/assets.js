import { FaLightbulb, FaPaintBrush, FaCode, FaJava,FaReact,FaPython ,FaProjectDiagram, FaServer, FaMobileAlt,FaGlobe , FaTools, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud, FaRobot } from 'react-icons/fa';

import profileImg from '../assets/profile.avif';
import projectImg1 from "../assets/project1.png";  
import projectImg2 from '../assets/project2.png';
import projectImg3 from '../assets/project3.png';
import projectImg4 from '../assets/project4.png';
import projectImg5 from '../assets/project5.avif';
import projectImg6 from '../assets/project6.avif';



export const assets = {
    profileImg,
}


export const aboutInfo = [
    {
      icon: FaLightbulb,
      title: 'Innovative',
      description: 'I love creating unique solutions to complex problems with cutting-edge technologies.',
      color: 'text-purple'
    },
    {
      icon: FaPaintBrush,
      title: 'Design Oriented',
      description: 'Beautiful design and user experience are at the heart of everything I create.',
      color: 'text-pink'
    },
    {
      icon: FaCode,
      title: 'Clean Code',
      description: 'I write maintainable, efficient code following best practices and modern patterns.',
      color: 'text-blue'
    }
  ];



export const skills = [
  {
    title: 'Programming Languages',
    icon: FaPython,
    description: 'Proficient in programming languages for building efficient and scalable applications',
    tags: ['Java', 'python', ' C++']
  },
  {
    title: 'Frameworks & Libraries:',
    icon: FaServer,
    description: 'Building dynamic and scalable applications using modern frameworks and libraries.',
    tags: ['Node.js', 'Express', 'React.js']
  },
  {
    title: 'Database Management',
    icon: FaDatabase,
    description: 'Designing and optimizing databases for performance and scalability.',
    tags: ['MongoDB', 'PostgreSQL', 'MySQL']
  },
  {
    title: 'Web Technologies',
    icon: FaGlobe ,
    description: 'Building responsive and interactive web interfaces using modern web technologies.',
    tags: ['HTML5', ' CSS3', 'JavaScript']
  },
  {
    
  title: 'Methodologies',
  icon: FaProjectDiagram,
  description: 'Applying Agile methodologies to manage projects efficiently and deliver iterative improvements.',
  tags: ['Agile (Scrum)']

  },
  {
    title: 'Tools & Technologies',
    icon: FaTools,
    description: 'Essential tools and technologies I use in my development workflow.',
    tags: ['Git & GitHub', 'IntelliJ IDEA', 'Visual Studio Code', 'Postman']
  }
];



export const projects = [
  {
  title: "Recruitment Management System",
  description: "Developed a full-stack recruitment platform with role-based modules (Admin, HR, Candidate), featuring job application management, interview scheduling, and candidate tracking.",
  image: projectImg4,   // add your image
  tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
  demo: "https://recruitment-frondend.vercel.app",
  code: "https://github.com/neemavarghese0098008/recruitment-frondend",
},
  {
    title: "Contact Management Website",
    description: " Built a contact management application with add, edit, delete, and search features implemented dynamic routing and state management, Designed responsive Ul using Material UI",
    image: projectImg1,
    tech: ["React", "JSON Server"],
    icons: [FaJava , FaNodeJs, FaDatabase , FaStripe],
    demo: "https://contact-frontend-v2.netlify.app",
    code: "https://github.com/neemavarghese0098008/contact-frontend-v2",
  },
  {
  title: "Magic Match Game",
  description: "Built an interactive memory card game with dynamic state management, smooth animations, and responsive UI for an engaging user experience.",
  image: projectImg2,
  tech: ["React.js", "JavaScript", "Tailwind CSS","JSON Server"],
  icons: [FaReact],
  demo: "https://magic-match-game1.netlify.app",
  code: "https://github.com/neemavarghese0098008/magic-match-game",
},
  {
    title: "Resume-Builder",
    description: "Developed a resume builder application enabling users to create, customize, and manage professional resumes efficiently.",
    image: projectImg3,
    tech: ["React.js", "JavaScript","JSON Server", "Meterial UI"],
    icons: [FaJava , FaDatabase,FaReact],
    demo: "https://resume-builder-by-neema.netlify.app",
    code: "https://github.com/neemavarghese0098008/resume-builder-json-server",
  }
  // {
  //   title: "Portfolio Website",
  //   description: "A personal portfolio to showcase projects, skills, and blogs with dark/light mode support.",
  //   image: projectImg4,
  //   tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Markdown"],
  //   icons: [FaReact, FaCloud],
  //   demo: "#",
  //   code: "#",
  //  }
  // {
  //   title: "Chat App",
  //   description: "A real-time chat application with group messaging, emojis, and file sharing.",
  //   image: projectImg5,
  //   tech: ["Socket.IO", "React", "Node.js", "MongoDB"],
  //   icons: [FaReact, FaNodeJs, FaDatabase ],
  //   demo: "#",
  //   code: "#",
  // },
  // {
  //   title: "AI Image Generator",
  //   description: "Generate images using AI prompts powered by OpenAI's DALL·E model and Cloudinary.",
  //   image: projectImg6,
  //   tech: ["React", "OpenAI API", "Cloudinary", "Tailwind CSS"],
  //   icons: [FaRobot, FaJava , FaCloud],
  //   demo: "#",
  //   code: "#",
  // }
];


export const workData = [
  {
    role: "TRAINING (ONGOING), MERN Stack Development Training",
    company: "Luminar Technolab, Kakkanad",
    duration: "02/2026 - Present",
    description:
      "I build full-stack applications using the MERN stack and Angular, integrating RESTful APIs to deliver seamless and scalable user experiences. My work focuses on developing efficient frontend components and robust backend services, with strong attention to debugging, validation, and performance optimization.",
    color: "purple"
  },
  {
    role: "Computer Science Educator & HOD (Higher Secondary)",
    company: "St. Juliana's CBSC Higher Secondary School, Kochi",
    duration: "06/2025 – 02/2026",
    description:
      "With a strong foundation in Python and programming fundamentals, I focus on problem-solving, debugging, and code optimization to build efficient solutions. My experience in computer networks and leadership as a Head of Department has enhanced my analytical thinking, teamwork, and project coordination skills.",
    color: "pink"
  },
  {
    role: "Full Stack Developer Intern",
    company: "Bytestrone India Pvt. Ltd.",
    duration: "12/2023 – 03/2024",
    description:
      "I began my journey by building basic projects and gradually advanced to developing applications with Spring Boot and React.js, focusing on scalable APIs, quality assurance through testing and debugging, and working in an Agile (Scrum) environment.",
    color: "blue"
  }
];

export const eduData = [
  {
    role: "Master of Computer Applications (MCA)",
    company: "Rajagiri College of Social Sciences (Autonomous), Kalamassery",
    link: "https://rajagiri.edu",
    cgpa: "CGPA - 6.40",
    duration: "03/2023 – 04/2025",
    description:
      "Pursuing a Master of Computer Applications, gaining knowledge in software development, web technologies, and database management through coursework and practical projects.",
    color: "purple"
  },
  {
    role: "Bachelor of Computer Applications (BCA)",
    company: "Siena College of Professional Studies (Affiliated to MG University), Edakochi",
    link: "https://sienacollege.co.in",
    duration: "03/2020 – 04/2023",
    cgpa: "CCPA - 6.23",
    description:
      "Completed a Bachelor of Computer Applications, building a strong foundation in programming, computer networks, and core computer science concepts through academic coursework and projects.",
    color: "pink"
  }
];
