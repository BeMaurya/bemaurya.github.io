/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "नमस्ते 🙏🏻.",
  title2: "BeMaurya",
  logo_name: "BeMaurya",
  nickname: "shubh / maurya",
  full_name: "Shubham Kumar",
  subTitle:
    "Full Stack Developer, Open Source Enthusiast 🔥. Always learning.",
  resumeLink:
  "https://drive.google.com/file/d/1VPNgBb3qE_DXka353czU4Z5mnPTvkK_b/view?usp=sharing",
  mail: "mailto:bewithmaurya@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/bemaurya",
  linkedin: "https://www.linkedin.com/in/bemaurya/",
  gmail: "bewithmaurya@gmail.com",
  gitlab: "https://gitlab.com/bemaurya",
  facebook: "https://www.facebook.com/bemaurya/",
  twitter: "https://twitter.com/bewithmaurya",
  instagram: "https://www.instagram.com/bemaurya/",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Develop interactive User Interfaces for web and mobile applications",
        "⚡ Building responsive website front end using ReactJS",
        "⚡ Developing mobile applications using Flutter and Android",
        "⚡ Creating application backend in Spring Boot, Node, Express & Flask",
        "⚡ Integration of third party services such as Firebase/ AWS"
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "PHP",
          fontAwesomeClassname: "simple-icons:php",
          style: {
            color: "#7377AD",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        {
          skillName: "GraphQL",
          fontAwesomeClassname: "simple-icons:graphql",
          style: {
            color: "#DE33A6",
          },
        },
        {
          skillName: "Android",
          fontAwesomeClassname: "simple-icons:android",
          style: {
            color: "#3DDC84",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#f89820",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "Dart",
          fontAwesomeClassname: "simple-icons:dart",
          style: {
            color: "#29B0EE",
          },
        },
        // {
        //   skillName: "Visual Basic",
        //   fontAwesomeClassname: "simple-icons:dot-net",
        //   style: {
        //     color: "#029FCE",
        //   },
        // },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "jQuery",
          fontAwesomeClassname: "simple-icons:jquery",
          style: {
            color: "#0865A6",
          },
        },
        {
          skillName: "Wordpress",
          fontAwesomeClassname: "simple-icons:wordpress",
          style: {
            color: "#207297",
          },
        },
        {
          skillName: "Apache",
          fontAwesomeClassname: "simple-icons:apache",
          style: {
            color: "#CA1A22",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "C",
          fontAwesomeClassname: "simple-icons:c",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Experience hosting and managing websites",
        "⚡ Experience with Continuous Integration",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Netlify",
          fontAwesomeClassname: "simple-icons:netlify",
          style: {
            color: "#38AFBB",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#6863A6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "GitHub Actions",
          fontAwesomeClassname: "simple-icons:githubactions",
          style: {
            color: "#5b77ef",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: " College of Engineering, Guindy Anna University",
      subtitle: "Masters of Computer Application",
      logo_path: "ssec.png",
      alt_name: "CEG",
      duration: "2019 - 2022",
      descriptions: [
        "⚡ I have studied core subject like Operating System, RDBMS, Software Engineering, etc.",
        "⚡ I have also completed various online courses for Backend , Web , Mobile App Development, etc.",
      ],
      website_link: "https://ceg.annauniv.edu/",
    },
    {
      title: "Cybotech Campus, Patna Magadh University",
      subtitle: "Bachelors of Computer Application",
      logo_path: "cybo.png",
      alt_name: "CC",
      duration: "2015 - 2018",
      descriptions: [
        "⚡ I have studied core subjects like Data Structures, DBMS, Networking, Security, etc.",
        "⚡ I have implemented several projects based on what I've leart under my BCA course. ",
      ],
      website_link: "#",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "ISRO",
      subtitle: "Overview of Geoprocessing Using Python",
      logo_path: "isro.png",
      certificate_link:
        "https://drive.google.com/file/d/1WoKMueVgKDfGKaLS-1Bvt3qfMNWgnQDv/view?usp=sharing",
      alt_name: "isro",
      color_code: "#dcdcdc",
    },
    {
      title: "ShapeAI",
      subtitle: "Python and Deep learning Bootcamp",
      logo_path: "shapeai.png",
      certificate_link:
        "https://drive.google.com/file/d/1gPMz9cwx8jB-dJ5R2fO_LaheXdY88z3M/view?usp=sharing",
      alt_name: "shapeai",
      color_code: "#ccccff",
    },
    {
      title: "Career Foresight",
      subtitle: "Conducted an Exam with CDAC Team As Team Leader",
      logo_path: "cf.png",
      certificate_link:
        "#",
      alt_name: "cdacatc",
      color_code: "#d0f0c0",
    },
    // color_code: "#8C151599",
    // color_code: "#7A7A7A",
    // color_code: "#0C9D5899",
    // color_code: "#C5E2EE",
    // color_code: "#ffc475",
    // color_code: "#g",
    // color_code: "#ffbfae",
    // color_code: "#fffbf3",
    // color_code: "#b190b0",
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I've completed one internship. I've mostly done projects on my own and I am actively looking for internships. I love organizing workshops to share my knowledge with others.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Java Developer (Intern)",
          company: "iPixxel",
          company_url: "https://ipixxel.com",
          logo_path: "ipixxel.png",
          duration: "June 2021 - Aug 2021",
          location: "Work From Home",
          description:
          `Work closely with the Project Manager and Team Leads on change request functions.
          Develops new and maintains existing applications.
          Increased productivity and problem-solving technics by 20%.`,
          color: "#0071C5",
        },
        {
          title: "Full Stack Developer (Freelancer)",
          company: "Eduventa",
          company_url: "https://eduventa.com/",
          logo_path: "edLogo.png",
          duration: "Sep 2021 - Dec 2021",
          location: "Work From Home",
          description:
          `Developed the full stack website having Admin and Learning Portal, and User Dashboard using Bootstrap, CSS
          framework, Core PHP and MySQL Database`,
          color: "#ee3c26",
        },
        {
          title: "Full Stack Java React Developer (Intern)",
          company: "Cognizant",
          company_url: "https://www.cognizant.com/us/en",
          logo_path: "cogni.png",
          duration: "Feb 2022 - July 2022",
          location: "Work From Home",
          description:
          `Developed a full stack web application using java, react and mysql and get training on java and react. Increased productivity and problem-solving technics by 20%.`,
          color: "#0071C5",
        }
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Team Leader At AFCAT",
          company: "Career Foresight (CDAC)",
          company_url: "https://careerforesightatc.in/home",
          logo_path: "cflogo.png",
          duration: "March 2018",
          location: "Centre",
          description:
            "Responsibilities were to conduct exam, run and maintain the server with CDAC Team and AirForce Team",
          color: "#4285F4",
        },
        {
          title: "Team Leader At IAF Star",
          company: "Career Foresight (CDAC)",
          company_url: "https://careerforesightatc.in/home",
          logo_path: "cflogo.png",
          duration: "March 2019, July 2021",
          location: "Centre",
          description: "Responsibilities were to conduct exam, run and maintain the server with CDAC Team and AirForce Team",
          color: "#196acf",
        },
        {
          title: "Team Leader At ICG",
          company: "Career Foresight (CDAC)",
          company_url: "https://careerforesightatc.in/home",
          logo_path: "cflogo.png",
          duration: "March 2021",
          location: "Centre",
          description:
          "Responsibilities were to conduct exam, run and maintain the server with CDAC Team and Coast Guard Team",
          color: "#196acf",
        },
        {
          title: "Team Leader At Agniveer (Vayu)",
          company: "Career Foresight (CDAC)",
          company_url: "https://careerforesightatc.in/home",
          logo_path: "cflogo.png",
          duration: "July 2022",
          location: "Centre",
          description:
          "Responsibilities were to conduct exam, run and maintain the server with CDAC Team and AirForce Team",
          color: "#196acf",
        },
        {
          title: "GitHub Student Developer",
          company: "GitHub",
          company_url: "https://github.com/",
          logo_path: "github.png",
          duration: "Nov 2019 - Present",
          location: "Work from Home",
          description:
          "Contribute to Open Source Community and Open Source Project.",
          color: "#040f26",
        }
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of latest technology tools. My best experience is to create NodeJS Backend Projects, Python Scripts, and React Project. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "040.jpg",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I don't blog frequently but when I do something awesome, I do try to document it so it can be helpful to others. I write on Twitter.",
    link: "https://twitter.com/bewithmaurya",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "Bookshop Management",
      url: "https://github.com/bewithmaurya/bookshopmanagement",
      description: "It is the management of the book shop having different kinds of works such as generate a receipt for Customer.",
      languages: [
        {
          name: "Java",
          iconifyClass: "logos-java",
        },
        {
          name: "SQL",
          iconifyClass: "logos-mysql",
        },
      ],
    },
    {
      id: "1",
      name: "WithU",
      url: "https://github.com/bewithmaurya/withu",
      description:
        "It allows you to know the exact location and keep track of the whereabouts of your family members or friends are in real-time.",
      languages: [
        {
          name: "Android",
          iconifyClass: "logos-android-icon",
        },
        {
          name: "XML",
          iconifyClass: "vscode-icons:file-type-xml",
        },
        {
          name: "Java",
          iconifyClass: "logos-java",
        },
        {
          name: "Firebase",
          iconifyClass: "logos-firebase",
        },
      ],
    },
    {
      id: "2",
      name: "Electronic Medical Record",
      url: "https://github.com/bewithmaurya/electronimedicalrecord",
      description:"The basic idea is to use Blockchain for storing patient records. The medical records of a patient will be accessible from any hospital.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "Ethereum",
          iconifyClass: "logos-ethereum",
        },
        {
          name: "Metamask",
          iconifyClass: "logos-metamask-icon",
        },
        {
          name: "Ganache",
          iconifyClass: "logos-ganache-icon",
        },
      ],
    },
    {
      id: "3",
      name: "Ecommerce Web App",
      url: "https://github.com/bewithmaurya/ecommerce",
      description:
        "It provides all the facility and placed multiple order at same time and in admin end there is option for tracking the order",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "Php",
          iconifyClass: "logos-php",
        },
        {
          name: "MySQL",
          iconifyClass: "logos-mysql",
        },
      ],
    },
    {
      id: "4",
      name: "Chat App",
      url: "https://github.com/bewithmaurya/letschat",
      description:
        "A simple android application in which user can interect with other user.",
      languages: [
        {
          name: "Android",
          iconifyClass: "logos-android-icon",
        },
        {
          name: "XML",
          iconifyClass: "vscode-icons:file-type-xml",
        },
        {
          name: "Java",
          iconifyClass: "logos-java",
        },
        {
          name: "Firebase",
          iconifyClass: "logos-firebase",
        },
      ],
    },
    {
      id: "5",
      name: "Veterinary Mnagement System",
      url: "https://github.com/bewithmaurya/vetclinicmanagementsystem",
      description:
        "Creation of Pet Record for these problem that is being checked in clinic keeping in view of all the basic area that concerned for a Clinic.",
      languages: [
        {
          name: "Java",
          iconifyClass: "logos-java",
        },
        {
          name: "SQL",
          iconifyClass: "logos-mysql",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
