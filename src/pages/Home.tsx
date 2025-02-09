import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Code, GitBranch, Bot, Terminal } from "lucide-react";

const Home = () => {
  const technologies = [
    { name: "Automation", icon: Bot, color: "text-purple-500", delay: 0.6 },
    { name: "Testing", icon: Terminal, color: "text-blue-500", delay: 0.7 },
    { name: "CI/CD", icon: GitBranch, color: "text-green-500", delay: 0.8 },
    { name: "Development", icon: Code, color: "text-orange-500", delay: 0.9 },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative p-4 sm:p-6 lg:p-8 mt-16">
      {/* Main Content */}
      <div className="text-center z-10 w-full max-w-4xl mx-auto pt-8 sm:pt-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative border border-border rounded-lg p-4 sm:p-6 md:p-8 lg:p-12 backdrop-blur-sm bg-background/50 hover:shadow-lg transition-all duration-300 before:absolute before:w-full before:h-[1px] before:bg-gradient-to-r before:from-transparent before:via-blue-500 before:to-transparent before:top-0 before:left-0 before:opacity-0 before:transition-opacity hover:before:opacity-100"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-4 sm:mb-6 flex items-center justify-center"
          >
            <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">DV</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-2 sm:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"
          >
            Deepika Velamakuru
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-4 sm:mb-6"
          >
            Software Development Engineer in Test
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto px-2 sm:px-4"
          >
            Passionate about implementing robust automation solutions and driving product quality 
            through innovative testing strategies. Specialized in banking applications and test automation frameworks.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 px-2 sm:px-4"
          >
            {technologies.map((tech) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: tech.delay }}
                  className="p-3 sm:p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors"
                >
                  <Icon className={`w-6 h-6 sm:w-8 sm:h-8 ${tech.color} mx-auto mb-2`} />
                  <p className="text-xs sm:text-sm font-medium">{tech.name}</p>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="mt-6 sm:mt-8"
          >
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2 sm:px-4">
              <Link
                to="/projects"
                className="px-4 sm:px-6 py-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-sm sm:text-base w-full sm:w-auto"
              >
                View Projects
              </Link>
              <Link
                to="/contact"
                className="px-4 sm:px-6 py-2 rounded-full border border-primary/50 hover:bg-primary/10 transition-colors text-sm sm:text-base w-full sm:w-auto"
              >
                Contact Me
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Background Gradient Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/50 pointer-events-none" />
      <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />
    </div>
  );
};

export default Home;