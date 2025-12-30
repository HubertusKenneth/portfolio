import React from 'react';
import { Calendar, MapPin, Building, Code, Users, TestTube, Megaphone } from 'lucide-react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: "Quality Assurance Intern",
      company: "PT Sinergi Prakarsa Utama (Sinergi)",
      duration: "Jul 2025 – Sep 2025",
      location: "Tangerang, Indonesia",
      description: "Performed manual and automated testing on web applications to ensure system reliability and quality. Developed and executed test cases, reported bugs, and collaborated with development teams to validate fixes and improve overall software quality.",
      skills: ["Software Testing", "QA Processes", "Bug Reporting", "Test Documentation", "Quality Standards", "Manual Testing", "Test Case Design", "Katalon Studio"]
    },
    {
      title: "Streaming Manager",
      company: "Binusian Gaming",
      duration: "Mar 2025 – Present",
      location: "Tangerang, Indonesia",
      description:"Managed live streaming operations and broadcast workflows for esports events, including technical setup and live production. Coordinated streamers, maintained broadcast quality, and ensured smooth execution of online events to enhance audience engagement.",
      skills: ["Streaming Management", "Content Strategy", "Community Building", "Gaming Industry", "OBS Studio", "Video Editing", "Live Production"]
    },
    {
      title: "Media and Communications Division Activist",
      company: "Persekutuan Oikoumene BINUS University",
      duration: "Mar 2025 – Present",
      location: "Tangerang, Indonesia",
      description: "Contributed to the Media and Communications Division by producing photo and video documentation, designing promotional materials, and managing digital content for organizational events. Supported event execution and audience engagement through effective communication strategies.",
      skills: ["Communication", "Content Creation", "Social Media Management", "Event Promotion", "Public Relations", "Digital Marketing"]
    },
    {
      title: "Event Coordinator",
      company: "Various Kinds of Events",
      duration: "Mar 2024 – Dec 2025",
      location: "Tangerang, Indonesia",
      description: "Planned and coordinated multiple on site and hybrid events, managing logistics, schedules, and on site operations. Collaborated with stakeholders to ensure smooth event execution, effective communication, and positive participant experiences.",
      skills: ["Event Planning", "Project Management", "Team Leadership", "Timeline Management", "Problem Solving"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-gray-800/30">
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
              Experience
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

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="bg-gradient-to-br from-gray-800/80 to-gray-700/40 p-6 rounded-xl border border-gray-700/50 backdrop-blur-sm hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{exp.title}</h3>
                    <div className="flex items-center gap-2 text-blue-400 mb-2">
                      <Building size={16} />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mb-4 text-gray-400">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{exp.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span>{exp.location}</span>
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                
                <div className="mt-4">
                  <h4 className="text-sm font-semibold text-blue-400 mb-2">Skills & Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;