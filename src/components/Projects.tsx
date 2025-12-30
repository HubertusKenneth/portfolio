import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import { Github, X, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import Edufun1 from "../assets/projects/Edufun1.png";
import Edufun2 from "../assets/projects/Edufun2.png";
import Edufun3 from "../assets/projects/Edufun3.png";
import Porto1 from "../assets/projects/Porto1.png";
import Porto2 from "../assets/projects/Porto2.png";
import Willify1 from "../assets/projects/Willify1.png";
import Willify2 from "../assets/projects/Willify2.png";
import Willify3 from "../assets/projects/Willify3.png";
import Willify4 from "../assets/projects/Willify4.png";
import JawelsDiamond1 from "../assets/projects/JawelsDiamond1.png";
import JawelsDiamond2 from "../assets/projects/JawelsDiamond2.png";
import ReadSpace1 from "../assets/projects/ReadSpace1.png";
import ReadSpace2 from "../assets/projects/ReadSpace2.png";
import ReadSpace3 from "../assets/projects/ReadSpace3.png";
import ReadSpace4 from "../assets/projects/ReadSpace4.png";
import ReadSpace5 from "../assets/projects/ReadSpace5.png";


const projects = [
  {
    id: 1,
    title: "EduFun - Learning Management System",
    description:
      "A web based Learning Management System developed using PHP, MySQL, and the Gemini API. The platform supports role based authentication, course and learning material management, interactive gamified quizzes, discussion forums, and a chatbot to enhance the learning experience.",
    date: "Feb 2025 – Jul 2025",
    image: Edufun2,
    github: "https://github.com/HubertusKenneth/SE-EduFun",
    gallery: [Edufun1, Edufun2, Edufun3],
    technologies: ["PHP", "MySQL", "Gemini API"],
  },
  {
    id: 2,
    title: "ReadSpace - ELibrary Website",
    description:
      "A web-based digital library application designed to provide an intuitive and efficient book management experience. The system supports role-based access for guests, registered users, and administrators, allowing users to browse books by category, search collections, view detailed book information, and manage favorites, while administrators can manage book data and system content through a dedicated interface.",
    date: "Sep 2025 - Dec 2025",
    image: ReadSpace2,
    github: "https://github.com/HubertusKenneth/E-Library",
    demo: "https://readspacee.up.railway.app",
    gallery: [ReadSpace1, ReadSpace2, ReadSpace3, ReadSpace4, ReadSpace5],
    technologies: ["PHP Laravel", "MySQL", "Bootstrap", "Railway"],
  },
  {
    id: 3,
    title: "Personal Portfolio Website",
    description:
      "A personal portfolio website built to showcase professional skills, academic background, and selected projects. The website features a responsive layout, modern UI design, and smooth animations to deliver a polished and engaging user experience.",
    date: "Personal Project",
    image: Porto1,
    github: "https://github.com/HubertusKenneth/portfolio",
    gallery: [Porto1, Porto2],
    technologies: ["React", "TypeScript"],
  },
  {
    id: 4,
    title: "Jawels & Diamonds - Online Store",
    description:
      "An online jewelry store application developed using ASP.NET and Domain Driven Design principles. The system enables administrators to manage products and transactions, while customers can register, browse jewelry collections, and complete purchases securely.",
    date: "Feb 2024 - Jun 2024",
    image: JawelsDiamond1,
    github: "",
    gallery: [JawelsDiamond1, JawelsDiamond2],
    technologies: ["C#", "ASP.NET", "SQL Server", "DDD"],
  },
  {
    id: 5,
    title: "Willify - Music Store",
    description:
      "A front end website music store built with HTML, CSS, and JavaScript. The website features a responsive layout, interactive navigation, playlist management, and multimedia elements to enhance user engagement.",
    date: "Feb 2024 – Jun 2024",
    image: Willify1,
    github: "https://github.com/HubertusKenneth/Willify",
    gallery: [Willify1, Willify2, Willify3, Willify4],
    technologies: ["HTML", "CSS", "JavaScript"],
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

const Projects = () => {
  const [selected, setSelected] = useState<any>(null);
  const [currentImage, setCurrentImage] = useState<number>(0);

  const handleNext = () => {
    if (!selected) return;
    setCurrentImage((prev) =>
      prev === selected.gallery.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    if (!selected) return;
    setCurrentImage((prev) =>
      prev === 0 ? selected.gallery.length - 1 : prev - 1
    );
  };

  return (
    <section id="projects" className="py-20 px-4 bg-gray-800/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ type: "spring", stiffness: 70, damping: 15 }}
          className="text-center mb-16 overflow-visible"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 lg:mb-6 text-white leading-[1.2] pb-4 break-words">
            Projects
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
          className="grid md:grid-cols-2 gap-12"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="relative bg-gray-800 rounded-2xl overflow-hidden shadow-lg border border-gray-700"
            >
              <motion.div className="relative h-56 overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <button
                    onClick={() => {
                      setSelected(project);
                      setCurrentImage(0);
                    }}
                    className="px-5 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition transform hover:scale-105"
                  >
                    View Project
                  </button>

                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition transform hover:scale-110"
                      title="Github source"
                    >
                      <Github size={22} className="text-white" />
                    </a>
                  ) : (
                    <div
                      className="p-3 bg-gray-800 rounded-full opacity-40 cursor-not-allowed"
                      title="GitHub source not available"
                    >
                      <Github size={22} className="text-white" />
                    </div>
                  )}

                  
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-green-600 rounded-full hover:bg-green-700 transition"
                      title="Live Website"
                    >
                      <ExternalLink size={22} className="text-white" />
                    </a>
                  )}
                </div>
              </motion.div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-3">
                  {project.description}
                </p>

                <span className="block text-sm text-blue-400 font-medium mb-3">
                  {project.date}
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-medium rounded-full
                      bg-blue-500/10 text-blue-400 border border-blue-400/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
            </motion.div>
          ))}
        </motion.div>
      </div>

      {selected && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6">
          <div className="bg-gray-900 text-white rounded-2xl max-w-3xl w-full p-6 relative shadow-xl">
            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-3 text-gray-400 hover:text-white"
            >
              <X size={28} />
            </button>

            <h3 className="text-3xl font-bold mb-2">{selected.title}</h3>
            <p className="text-gray-400 mb-6">{selected.description}</p>

            <div className="relative flex items-center justify-center">
              <button
                onClick={handlePrev}
                className="absolute left-2 p-2 bg-black/40 rounded-full hover:bg-black/70 transition"
              >
                <ChevronLeft size={28} />
              </button>

              <img
                src={selected.gallery[currentImage]}
                alt={`Gallery ${currentImage}`}
                className="max-h-[60vh] rounded-lg shadow-lg object-contain"
              />

              <button
                onClick={handleNext}
                className="absolute right-2 p-2 bg-black/40 rounded-full hover:bg-black/70 transition"
              >
                <ChevronRight size={28} />
              </button>
            </div>

            <div className="flex justify-center mt-4 gap-2">
              {selected.gallery.map((_: string, idx: number) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImage(idx)}
                  className={`w-3 h-3 rounded-full ${
                    idx === currentImage ? "bg-blue-500" : "bg-gray-500"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
