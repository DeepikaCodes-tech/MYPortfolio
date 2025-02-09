import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, Cpu, GraduationCap, Trophy, Code } from "lucide-react";

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

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
      className="min-h-screen pt-20 px-4 max-w-4xl mx-auto"
    >
      <h1 className="text-4xl font-bold text-center mb-12">About Me</h1>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        whileHover={{ y: -5 }}
        className="relative border border-border rounded-lg p-6 cursor-pointer transition-all duration-300 bg-background hover:shadow-[0_10px_40px_-15px_rgba(0,118,255,0.3)] before:absolute before:w-full before:h-[1px] before:bg-gradient-to-r before:from-transparent before:via-blue-500 before:to-transparent before:top-0 before:left-0 before:opacity-0 before:transition-opacity hover:before:opacity-100"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex flex-col md:flex-row items-center gap-6">
          {/* Profile Image - Always visible */}
          <div className="w-52 h-52 flex-shrink-0 bg-gray-800 p-2 shadow-lg border-2 border-gray-600 rounded">
            <img
              src="/D.jpg"
              alt="My Portrait"
              className="w-full h-full object-cover rounded"
            />
          </div>
          
          {/* Content Section */}
          <div className="flex-1">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2 mb-2">
                <Cpu className="w-5 h-5 text-blue-500" />
                <h2 className="text-xl font-bold">Software Development Engineer in Test</h2>
              </div>
              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="w-6 h-6" />
              </motion.div>
            </div>
            
            <p className="text-muted-foreground mb-4">
              Dynamic SDET with expertise in implementing robust automation solutions using Rhino API 
              and Java for critical banking applications.
            </p>

            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  variants={detailsVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="overflow-hidden"
                >
                  <div className="space-y-6 pt-4 border-t border-border">
                    <div className="flex items-start gap-2">
                      <GraduationCap className="w-5 h-5 text-blue-500 mt-1" />
                      <div>
                        <h3 className="font-semibold">Education</h3>
                        <p className="text-muted-foreground">B.Tech in Computer Science and Engineering</p>
                        <p className="text-sm text-muted-foreground">RGUKT RK Valley • CGPA: 9.5 • 2019-2023</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <Code className="w-5 h-5 text-blue-500 mt-1" />
                      <div>
                        <h3 className="font-semibold">Technical Expertise</h3>
                        <ul className="mt-2 space-y-2">
                          {[
                            "Automation testing with Rhino API and Java",
                            "Test design and execution for banking systems",
                            "CI/CD pipeline integration",
                            "Defect management and regression testing",
                            "DevOps practices and tools"
                          ].map((item, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 }}
                              className="flex items-start gap-2"
                            >
                              <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-blue-500" />
                              <span className="text-muted-foreground">{item}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <Trophy className="w-5 h-5 text-blue-500 mt-1" />
                      <div>
                        <h3 className="font-semibold">Key Achievements</h3>
                        <ul className="mt-2 space-y-2">
                          {[
                            "Achieved 90% automation coverage for Citi Bank sanity testing",
                            "Improved software quality by 15% through enhanced testing",
                            "Reduced deployment time by 25% through DevOps optimization",
                            "Identified and resolved 50+ critical bugs"
                          ].map((item, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 }}
                              className="flex items-start gap-2"
                            >
                              <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-blue-500" />
                              <span className="text-muted-foreground">{item}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-4">
                      {[
                        "Java",
                        "Rhino API",
                        "JUnit",
                        "Selenium",
                        "SQL",
                        "DevOps",
                        "Jenkins",
                        "Git",
                        "Maven",
                        "Linux"
                      ].map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 text-sm rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-100"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default About;