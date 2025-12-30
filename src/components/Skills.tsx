import React from "react";
import { motion, Variants } from "framer-motion";
import { Code, TestTube, Megaphone, Calendar, Users, Server } from "lucide-react";


const skillCategories = [
  {
    category: "Programming & Problem Solving",
    icon: <Code className="text-blue-400" size={28} />,
    description:
      "Strong foundation in programming concepts, logical thinking, and problem-solving through algorithms and real world case studies.",
  },
  {
    category: "Development & Deployment",
    icon: <Server className="text-indigo-400" size={28} />,
    description:
      "Hands-on experience in application development, deployment processes, environment configuration, and basic CI/CD workflows.",
  },
  {
    category: "Communication & Public Speaking",
    icon: <Megaphone className="text-purple-400" size={28} />,
    description:
      "Effective communicator with experience in public speaking, presentations, and delivering ideas clearly to diverse audiences.",
  },
  {
    category: "Event Management",
    icon: <Calendar className="text-yellow-400" size={28} />,
    description:
      "Experienced in planning and coordinating events, managing timelines, and collaborating with teams and stakeholders.",
  },
  {
    category: "Team & Leadership",
    icon: <Users className="text-red-400" size={28} />,
    description:
      "Strong teamwork and leadership skills with experience in collaboration, mentoring, and responsibility sharing.",
  },
  {
    category: "Quality Assurance",
    icon: <TestTube className="text-green-400" size={28} />,
    description:
      "Experienced in software testing methodologies, QA standards, bug reporting, and technical documentation.",
  },
];

const individualSkills = [
  {
    name: "C",
    description: "Foundational programming language.",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
        className="w-8 h-8"
        alt="C"
      />
    ),
  },
  {
    name: "HTML & CSS",
    description: "Building clean, responsive, and accessible websites.",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
        className="w-8 h-8"
        alt="HTML"
      />
    ),
  },
  {
    name: "JavaScript",
    description: "Developing interactive and dynamic web features.",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
        className="w-8 h-8"
        alt="JavaScript"
      />
    ),
  },
  {
    name: "PHP",
    description: "Server-side scripting for scalable web applications.",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
        className="w-8 h-8"
        alt="PHP"
      />
    ),
  },
  {
    name: "SQL",
    description: "Designing, managing, and querying relational databases.",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
        className="w-8 h-8"
        alt="SQL"
      />
    ),
  },
  {
    name: "Laravel",
    description: "PHP framework for building secure and maintainable applications.",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg"
        className="w-8 h-8"
        alt="Laravel"
      />
    ),
  },
  {
    name: "React.js",
    description: "Building fast, modular, and reusable UI components.",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
        className="w-8 h-8"
        alt="React"
      />
    ),
  },
  {
    name: "Bootstrap",
    description: "Responsive CSS framework for rapid UI development.",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
        className="w-8 h-8"
        alt="Bootstrap"
      />
    ),
  },
  {
    name: "Python",
    description: "High-level programming for scripting, data processing, and automation.",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
        className="w-8 h-8"
        alt="Python"
      />
    ),
  },
  {
    name: "Java",
    description: "Object-oriented programming for building robust applications.",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
        className="w-8 h-8"
        alt="Java"
      />
    ),
  },
  {
    name: "Figma",
    description: "UI/UX design, wireframing, and prototyping.",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
        className="w-8 h-8"
        alt="Figma"
      />
    ),
  },
  {
    name: "GitHub",
    description: "Version control, collaboration, and project management.",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
        className="w-8 h-8"
        alt="GitHub"
      />
    ),
  },
  {
    name: "Railway",
    description:
      "Deploying full-stack applications with environment configuration and database integration.",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/railway/railway-original.svg"
        className="w-8 h-8"
        alt="Railway"
      />
    ),
  },
  {
    name: "Vercel",
    description:
      "Deploying frontend applications with CI/CD, custom domains, and performance optimization.",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg"
        className="w-8 h-8"
        alt="Vercel"
      />
    ),
  },
  {
    name: "Aiven",
    description:
      "Managing cloud databases and services with secure connections and monitoring.",
    icon: (
      <img
        src="https://aiven.io/favicon.ico"
        className="w-8 h-8"
        alt="Aiven Cloud"
      />
    ),
  },
];


const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15,
    },
  },
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 15,
            duration: 0.8
          }}
          className="text-center mb-16"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 lg:mb-6 text-white leading-[1.2] pb-4 break-words">
            Skills
          </h2>

          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="relative mx-auto mb-8"
          >
            <div className="w-48 h-1 bg-gradient-to-r from-slate-300 via-white to-slate-400 mx-auto origin-center relative overflow-hidden rounded-full">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent animate-shine rounded-full"></div>
              <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg shadow-white/80 animate-pulse"></div>
              <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg shadow-white/80 animate-pulse"></div>
            </div>
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-52 h-5 bg-gradient-to-r from-slate-300/20 via-white/40 to-slate-400/20 blur-lg rounded-full" />
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-20"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="bg-gradient-to-br from-gray-800/80 to-gray-700/40 p-6 rounded-xl border border-gray-700/50 backdrop-blur-sm shadow-md hover:shadow-lg hover:shadow-blue-500/10 transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-r from-gray-700/50 to-gray-600/30 rounded-lg">
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-white">{category.category}</h3>
              </div>
              <p className="text-gray-300 text-sm">{category.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="relative w-full h-[2px] mb-16 bg-gradient-to-r
                     from-transparent via-blue-400 to-transparent origin-center"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {individualSkills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="p-6 rounded-xl bg-gradient-to-br from-gray-800/80 to-gray-700/40 
                         border border-gray-700/50 shadow-md hover:shadow-lg 
                         hover:shadow-blue-500/10 transition-all"
            >
              <div className="mb-4 inline-flex p-3 bg-gray-700/50 rounded-lg">
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{skill.name}</h3>
              <p className="text-gray-300 text-sm">{skill.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
