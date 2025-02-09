import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, Building2, Calendar, Award } from "lucide-react";

const Experience = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const experiences = [
    {
      title: "Associate QA Engineer",
      company: "Finastra",
      period: "November 2023 - Present",
      description: "Implementing automated testing solutions for banking applications",
      details: [
        "Implemented and maintained automated test cases using Rhino API and Java for GPP product, ensuring comprehensive coverage and reliability",
        "Managed and resolved numerous defects, improving product stability for clients including CITI bank, Barclays FPS, MANT FED-ISO",
        "Led regression pack testing efforts, ensuring compatibility across software versions",
        "Utilized Rhino API-based FFF Tool to automate Citi Bank sanity pack coverage, achieving 90% automation",
        "Integrated automated testing into CI/CD pipelines, optimizing deployment processes"
      ],
      skills: ["Rhino API", "Java", "Test Automation", "CI/CD", "Banking Systems"]
    },
    {
      title: "Software Engineer Intern",
      company: "Intel Corporation",
      period: "August 2022 - May 2023",
      description: "Led testing initiatives for HPC Middleware products",
      details: [
        "Spearheaded alignment of testing activities with sprint goals, resulting in 15% increase in software quality",
        "Coordinated end-to-end testing of HPC Middleware product, meticulously designing test cases",
        "Conducted manual testing using Linux commands, identifying 50+ critical bugs",
        "Implemented Automated Functional Tests with JUnit and Core Java, achieving 30% efficiency increase",
        "Mastered DevOps practices, reducing deployment time by 25%"
      ],
      skills: ["JUnit", "Core Java", "Linux", "DevOps", "HPC Middleware"]
    }
  ];

  const cardVariants = {
    hover: {
      scale: 1.02,
      boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
      transition: { duration: 0.3 }
    }
  };

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
      className="w-full px-4 max-w-4xl mx-auto pb-20 mt-20"
    >
      <h1 className="text-4xl font-bold mb-12 text-center">Professional Experience</h1>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            variants={{
            hover: {
              y: -5,
              transition: { duration: 0.3 }
            }
          }}
            whileHover="hover"
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
            className="relative border border-border rounded-lg p-6 cursor-pointer transition-all duration-300 bg-background hover:shadow-[0_10px_40px_-15px_rgba(0,118,255,0.3)] before:absolute before:w-full before:h-[1px] before:bg-gradient-to-r before:from-transparent before:via-blue-500 before:to-transparent before:top-0 before:left-0 before:opacity-0 before:transition-opacity hover:before:opacity-100"
            onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Building2 className="w-5 h-5 text-blue-500" />
                  <h3 className="text-xl font-bold">{exp.title}</h3>
                </div>
                <div className="flex items-center gap-2 text-primary mb-2">
                  <Award className="w-4 h-4" />
                  <p className="font-medium">{exp.company}</p>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <p>{exp.period}</p>
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
                    {exp.details.map((detail, i) => (
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
                    {exp.skills.map((skill, i) => (
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

export default Experience;