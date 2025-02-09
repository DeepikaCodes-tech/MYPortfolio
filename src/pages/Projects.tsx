import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, Code, Building2, Calendar, Award } from "lucide-react";

const Projects = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    {
      title: "GPP Banking Automation Framework",
      company: "Finastra",
      period: "2023 - Present",
      description: "Test Automation Framework",
      details: [
        "Developed comprehensive test automation framework using Rhino API and Java",
        "Achieved 90% automation coverage for Citi Bank sanity testing",
        "Integrated automated testing into CI/CD pipelines",
        "Improved testing efficiency for multiple banking clients including CITI bank, Barclays FPS",
        "Implemented robust defect management and regression testing processes"
      ],
      skills: ["Java", "Rhino API", "FFF Tool", "PayTest", "JUnit", "CI/CD"]
    },
    {
      title: "HPC Middleware Testing Suite",
      company: "Intel Corporation",
      period: "2022 - 2023",
      description: "End-to-end Testing Solution",
      details: [
        "Built end-to-end testing solution for High-Performance Computing Middleware",
        "Increased software quality by 15% through enhanced testing methodology",
        "Identified and resolved 50+ critical bugs using Linux-based testing",
        "Implemented Automated Functional Tests with JUnit framework",
        "Reduced deployment time by 25% through DevOps optimization"
      ],
      skills: ["JUnit", "Core Java", "Linux", "DevOps", "Jenkins", "Test Automation"]
    },
    {
      title: "Banking Integration Platform",
      company: "Finastra",
      period: "2023",
      description: "Banking Systems Integration",
      details: [
        "Created automated testing platform for multiple banking protocols",
        "Streamlined regression testing process for banking integrations",
        "Enhanced cross-version compatibility testing",
        "Implemented comprehensive defect management workflow",
        "Developed automated test suites for critical banking operations"
      ],
      skills: ["Selenium", "Java", "SQL", "JDBC", "Maven", "Banking Systems"]
    }
  ];

  const detailsVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { 
      opacity: 1, 
      height: "auto",
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full px-4 max-w-7xl mx-auto pb-20 mt-20"
    >
      <h1 className="text-4xl font-bold mb-12 text-center">Featured Projects</h1>
      <div className="space-y-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
            className="relative border border-border rounded-lg p-6 cursor-pointer transition-all duration-300 bg-background hover:shadow-[0_10px_40px_-15px_rgba(0,118,255,0.3)] before:absolute before:w-full before:h-[1px] before:bg-gradient-to-r before:from-transparent before:via-blue-500 before:to-transparent before:top-0 before:left-0 before:opacity-0 before:transition-opacity hover:before:opacity-100"
            onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Code className="w-5 h-5 text-blue-500" />
                  <h3 className="text-xl font-bold">{project.title}</h3>
                </div>
                <div className="flex items-center gap-2 text-primary mb-2">
                  <Building2 className="w-4 h-4" />
                  <p className="font-medium">{project.company}</p>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <p>{project.period}</p>
                </div>
              </div>
              <motion.div
                animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="w-6 h-6" />
              </motion.div>
            </div>

            <AnimatePresence>
              {expandedIndex === index && (
                <motion.div
                  variants={detailsVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="mt-6 overflow-hidden"
                >
                  <ul className="space-y-3">
                    {project.details.map((detail, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start gap-2"
                      >
                        <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-blue-500" />
                        <p className="text-muted-foreground">{detail}</p>
                      </motion.li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-100"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;