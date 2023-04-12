// import images
import Hero_person from "./assets/images/Hero/person.jpg";

import figma from "./assets/images/Skills/figma.png";
import sketch from "./assets/images/Skills/sketch.png";
import ps from "./assets/images/Skills/ps.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import python from "./assets/images/Skills/python.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/projects/img1.png";
import project2 from "./assets/images/projects/img2.png";
import project3 from "./assets/images/projects/img3.png";
import person_project from "./assets/images/projects/person.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Web Developer",
    firstName: "Abhijit",
    LastName: "Shinde",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "1+",
        text: "Years of Experinse in Web development",
      },
      {
        count: "2+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "Figma",
        para: "As a web developer, I have experience in converting Figma designs into functional website.",
        logo: figma,
      },
      {
        name: "Node js Learning",
        para: "Nodejs Are Learning Now",
        logo: nodejs,
      },
      {
        name: "Adobe Photoshop",
        para: "Create Banners and Images using AP",
        logo: ps,
      },
      {
        name: "React js",
        para: "Classified And this Portfolio is in React js",
        logo: reactjs,
      },
      // {
      //   name: "Sketch",
      //   para: "Lorem ipsum text  dummy",
      //   logo: sketch,
      // },
      // {
      //   name: "Python",
      //   para: "Lorem ipsum text  dummy",
      //   logo: python,
      // },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Web Development",
        para: "As a web developer, I take pride in creating high-quality websites that are not only visually stunning but also optimized for performance. Here is an example of the type of content I would include in my portfolio:",
        logo: services_logo1,
      },
      {
        title: "ui / ux DESIGNING",
        para: "As a UI/UX designer, my portfolio showcases my skills in creating visually stunning and intuitive user interfaces that enhance the overall user experience.",
        logo: services_logo2,
      },
      {
        title: "PhotoShop Editing",
        para: "As a Photoshop editor, my portfolio showcases my skills in enhancing and retouching images to create stunning visual content.",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "Personal Portfolio Website",
        image: project1,
      },
      {
        title: "Social Media Company website",
        image: project2,
      },
      {
        title: "Classified  Website",
        image: project3,
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar1,
        name: "Mahesh Phutane",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar2,
        name: "Rohit Mane",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar3,
        name: "Yash Lande ",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar4,
        name: "Balbhim Pawar",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: " I worked on a website redesign project where I collaborated with a team of developers and designers to create a more modern and user-friendly design. I used my skills in UI/UX design and front-end development to create a responsive and visually appealing website that met the needs of the client.",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "abshinde2811@gmail.com",
        icon: GrMail,
        link: "mailto:abshinde2811@gmail.com",
      },
      {
        text: "+91 9359873260",
        icon: MdCall,
        link: "https://wa.me/9359873260",
      },
      {
        text: "AbhijitShinde2811",
        icon: BsInstagram,
        link: "https://www.instagram.com/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2023",
  },
};
