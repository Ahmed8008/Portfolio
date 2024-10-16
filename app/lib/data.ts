import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import Glowifybeautyimg from "/public/Glowifybeautyimg.png";
import FolksAdventure from "/public/FolksAdventure.png";
import UIDataAgency from "/public/UIDataAgency.png";
import inventorymangemnetsystem from "/public/inventorymangemnetsystem.png";
import ExerciseLog from "/public/ExerciseLog.png"
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
    title: "LeVestie Hair",
    description:
      "LeVestie Hair – Where style meets elegance. Elevate your look with our expert hair care, tailored just for you. Book your appointment today and experience luxury like never before!.",
    tags: ["HTML", "CSS", "Bootstrap"],
    imageUrl: FolksAdventure,
    link:"https://levestihair.com/",
  },
  {
    title: "Movie Review and Rating Platform",
    description:
      "A Movie Review and Rating Platform allows users to discover, review, and rate movies. It provides a space for movie enthusiasts to share opinions, read others' insights, and find top-rated films based on community feedback.",
    tags: ["HTML", "TailwindCSS", "NextJs","TypeScript","Neom Db"],
    imageUrl: Glowifybeautyimg,
    link:"https://movie-review-rouge.vercel.app/",
  },
  {
    title: "Inventory Mangement System",
    description:
      " An Inventory Management System (IMS) is an essential tool for businesses of all sizes to effectively oversee their inventory operations tracking, managing, and optimizing.",
      tags: ["HTML", "CSS", "ASP DOT NET", "C#", "JavaScript","SQL Server"],
    imageUrl: inventorymangemnetsystem,
    link:"http://inventorymangementsystem.somee.com/Accounts/SignIn",
  },
  {
    title: "Car Hub",
    description:
      "Car Hub is your one-stop destination for everything automotive! From buying and selling cars to expert reviews and maintenance tips, we cover all your car-related needs. Drive smarter with Car Hub!",
      tags: ["HTML", "TailwindCSS", "NextJs", "Typescript", "JavaScript","NeomDb"],
    imageUrl: ExerciseLog,
    link:"https://car-hub-iota-orpin.vercel.app/?vercelToolbarCode=Q5F7PZ2GLkPlk45",
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
