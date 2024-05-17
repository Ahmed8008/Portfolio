import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import Glowifybeautyimg from "@/public/Glowifybeautyimg.png";
import FolksAdventure from "@/public/FolksAdventure.png";
import UIDataAgency from "@/public/UIDataAgency.png";
import inventorymangemnetsystem from "@/public/inventorymangemnetsystem.png";
import ExerciseLog from "@/public/ExerciseLog.png"
export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Folks Adventure",
    description:
    "Rapid response and impeccable delivery, met all requirements with finesse. Couldn't be happier with the outcome, already discussing our next collaboration." 
      ,
    date: "March 2024 - May 2024",
  },
  {
    title: "Glowify Beauty",
    description: "Exceptionally quick and attentive, delivered outstanding results that left me beyond satisfied.",
    date: "Jan 2024 - March 2024",
  },
  {
    title: "Inventory Mangement System",
    description:
      "Impressively swift and spot-on, exceeded expectations with flawless execution. Delighted with the results and eager to collaborate again. Highly recommended for a seamless experience!",
    date: "Nov 2023 - Jan 2024",
  },
  {
    title: "Exercise Log",
    description:
      "Superbly efficient and precise, nailed the task effortlessly. Thrilled with the outcome and already planning the next venture. Highly recommend this top-notch service!",
    date: "Nov 2023 - Nov 2023",
  },
  {
    title: "UI of Data Agency Website",
    description:
      "Very quick and responsive, knew exactly what i required and deliver expectional work.Very pleased.Have already lined up the next project for us to work on.Would highly recommended.",
    date: "June 2022 - Aug 2022",
  },

] as const;

export const projectsData = [
  {
    title: "Folks Adventure",
    description:
      "Welcome to Folks Adventure, where every journey begins with a click. Our website is your gateway to a world of exploration, offering seamless booking experiences for your dream destinations.",
    tags: ["HTML", "CSS", "Wordpress", "Elementor", "Php"],
    imageUrl: FolksAdventure,
    link:"https://folksadventures.com/",
  },
  {
    title: "Glowify Beauty",
    description:
      "Welcome to Glowify Beauty, your ultimate destination for all things cosmetic and glamorous! At Glowify, we believe that beauty is not just about how you look, but how you feel.",
    tags: ["HTML", "CSS", "ASP DOT NET", "C#", "JavaScript","SQL Server"],
    imageUrl: Glowifybeautyimg,
    link:"https://glowifybeauty.azurewebsites.net/",
  },
  {
    title: "Inventory Mangement System",
    description:
      " An Inventory Management System (IMS) is an essential tool for businesses of all sizes to effectively oversee their inventory operations tracking, managing, and optimizing.",
      tags: ["HTML", "CSS", "ASP DOT NET", "C#", "JavaScript","SQL Server"],
    imageUrl: inventorymangemnetsystem,
    link:"https://inventorymangementsystem.azurewebsites.net/",
  },
  {
    title: "UI of Data Agency Website",
    description:
      " Data Agency, more than just a website.Our UI is built on the principles of simplicity.Navigating through our website is an intuitive experience",
    tags: ["HTML","TailWind Css","JavaScript"],
    imageUrl: UIDataAgency,
    link:"https://uidataagency.azurewebsites.net/",
  },
  {
    title: "Exercise Log",
    description:
      " The Exercise Log gym project is a web application designed to help individuals track and manage their workouts effectively",
      tags: ["HTML", "CSS", "ASP DOT NET", "C#", "JavaScript","SQL Server"],
    imageUrl: ExerciseLog,
    link:"https://excerciselog.azurewebsites.net/",
  },
  
  
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "TailWind Css",
  "React",
  "NextJs",
  "ASP DOT NET",
  "Entity framework",
  "C#",
  "Web Api",
  "SQL Server",
  "MongoDB",
  "Framer Motion",
] as const;