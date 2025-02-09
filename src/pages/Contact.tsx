import { AnimatePresence, motion } from "framer-motion";
import { Contact2, Copy, Github, Linkedin, Mail, Send, X } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [showEmailCard, setShowEmailCard] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);
  const email = "deepikavelamakuru3@gmail.com";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full px-4 max-w-4xl mx-auto pb-20 mt-20"
    >
      <h1 className="text-4xl font-bold text-center mb-12">Contact Me</h1>
      
      <div className="space-y-6">
        {/* Contact Information Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ y: -5 }}
          className="relative border border-border rounded-lg p-6 transition-all duration-300 bg-background hover:shadow-[0_10px_40px_-15px_rgba(0,118,255,0.3)] before:absolute before:w-full before:h-[1px] before:bg-gradient-to-r before:from-transparent before:via-blue-500 before:to-transparent before:top-0 before:left-0 before:opacity-0 before:transition-opacity hover:before:opacity-100"
        >
          <div className="flex items-center gap-2 mb-6">
            <Contact2 className="w-5 h-5 text-blue-500" />
            <h2 className="text-xl font-bold">Let's Connect</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-3 text-muted-foreground group">
                <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <button
                    onClick={() => setShowEmailCard(true)}
                    className="text-sm text-blue-500 hover:text-blue-600"
                  >
                    Show Email
                  </button>
                </div>
              </div>
            </div>

            <a
              href="https://github.com/DeepikaCodes-tech"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
            >
              <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Github className="w-5 h-5" />
              </div>
              <div>
                <p className="font-medium">GitHub</p>
                <p className="text-sm">View Projects</p>
              </div>
            </a>

            <a
              href="https://linkedin.com/in/deepikavelamakuru"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
            >
              <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Linkedin className="w-5 h-5" />
              </div>
              <div>
                <p className="font-medium">LinkedIn</p>
                <p className="text-sm">Connect with me</p>
              </div>
            </a>
          </div>
        </motion.div>

        {/* Contact Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          whileHover={{ y: -5 }}
          className="relative border border-border rounded-lg p-6 transition-all duration-300 bg-background hover:shadow-[0_10px_40px_-15px_rgba(0,118,255,0.3)] before:absolute before:w-full before:h-[1px] before:bg-gradient-to-r before:from-transparent before:via-blue-500 before:to-transparent before:top-0 before:left-0 before:opacity-0 before:transition-opacity hover:before:opacity-100"
        >
          <div className="flex items-center gap-2 mb-6">
            <Send className="w-5 h-5 text-blue-500" />
            <h2 className="text-xl font-bold">Send a Message</h2>
          </div>

          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                placeholder="Your message..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground py-2 rounded-md hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              Send Message
            </button>
          </form>
        </motion.div>
      </div>

      {/* Floating Email Card */}
      <AnimatePresence>
        {showEmailCard && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={() => setShowEmailCard(false)}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="relative bg-background border border-border rounded-lg p-6 max-w-md w-full mx-4 shadow-lg"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setShowEmailCard(false)}
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="flex items-center gap-2 mb-4">
                <Mail className="w-5 h-5 text-blue-500" />
                <h3 className="text-lg font-semibold">Email Address</h3>
              </div>
              
              <div className="flex items-center gap-2 p-3 bg-muted rounded-lg">
                <p className="flex-1 font-mono text-sm">{email}</p>
                <button
                  onClick={copyToClipboard}
                  className="p-2 hover:bg-background rounded-md transition-colors"
                  title="Copy to clipboard"
                >
                  <Copy className={`w-4 h-4 ${copySuccess ? 'text-green-500' : 'text-muted-foreground'}`} />
                </button>
              </div>
              
              {copySuccess && (
                <p className="text-sm text-green-500 mt-2">Copied to clipboard!</p>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Contact;