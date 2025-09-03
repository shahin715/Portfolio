"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Database,
  Palette,
  Zap,
  Download,
  Send,
  MapPin,
  Phone,
} from "lucide-react";

export default function Portfolio() {
  const skills = [
    {
      name: "HTML",
      icon: Code,
      description: "Semantic markup and accessibility",
      color: "bg-teal-600",
    },
    {
      name: "CSS",
      icon: Palette,
      description: "Modern styling and animations",
      color: "bg-orange-500",
    },
    {
      name: "Tailwind CSS",
      icon: Palette,
      description: "Utility-first CSS framework",
      color: "bg-indigo-500",
    },
    {
      name: "JavaScript",
      icon: Zap,
      description: "ES6+ and modern features",
      color: "bg-teal-600",
    },
    {
      name: "React",
      icon: Code,
      description: "Component-based UI development",
      color: "bg-orange-500",
    },
    {
      name: "Next.js",
      icon: Code,
      description: "Full-stack React framework",
      color: "bg-indigo-500",
    },
    {
      name: "Redux Toolkit",
      icon: Database,
      description: "State management solution",
      color: "bg-teal-600",
    },
  ];

  const projects = [
    {
      title: "Admin Dashboard",
      description:
        "An intuitive admin dashboard for managing products, users, and viewing real-time analytics. Built with Next.js and Tailwind CSS.",
      technologies: ["Next.js", "Tailwind CSS", "JavaScript"],
      github: "https://github.com/shahin715/Admin_Portal_With_Nextjs.git",
      demo: "https://admin-portal-with-nextjs.vercel.app",
      color: "bg-teal-50",
    },
    {
      title: "E-commerce Website",
      description:
        "A fully functional e-commerce website that allows users to browse products, add them to the cart, and securely checkout. Built with React and Tailwind CSS.",
      technologies: ["React", "Tailwind CSS", "JavaScript"],
      github: "https://github.com/shahin715/VELVIX-project.git",
      demo: "https://velvix-project-ku5s.vercel.app/",
      color: "bg-orange-50",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-teal-700">Shahin Ahmed</h1>
            <div className="hidden md:flex space-x-6">
              <a
                href="#about"
                className="text-gray-600 hover:text-teal-700 transition-colors"
              >
                About
              </a>
              <a
                href="#skills"
                className="text-gray-600 hover:text-teal-700 transition-colors"
              >
                Skills
              </a>
              <a
                href="#projects"
                className="text-gray-600 hover:text-teal-700 transition-colors"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-gray-600 hover:text-teal-700 transition-colors"
              >
                Contact
              </a>
              <Button
                variant="outline"
                size="sm"
                className="ml-4 border-orange-300 text-orange-600 hover:bg-orange-50"
                asChild
              >
                <a
                  href="/cv/Shahin_Ahmed_Resume_Dev.pdf"
                  download="Shahin_Ahmed_Resume_Dev.pdf"
                  aria-label="Download Shahin Ahmed's CV"
                  onClick={() =>
                    gtag("event", "download_cv", {
                      event_category: "CV",
                      event_label: "Download",
                    })
                  }
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
                </a>
              </Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-indigo-50 opacity-30" />
        <div className="container mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-teal-100 text-teal-700 text-sm font-medium">
                  <Zap className="w-4 h-4 mr-2" />
                  Available for opportunities
                </div>
                <h2 className="text-4xl md:text-6xl font-bold text-balance text-slate-800">
                  Hi, I'm <span className="text-teal-600">Shahin Ahmed</span>
                </h2>
                <h3 className="text-2xl md:text-3xl font-semibold text-indigo-600">
                  Frontend Developer
                </h3>
                <p className="text-lg text-gray-600 max-w-lg text-pretty leading-relaxed">
                  Passionate about creating beautiful, responsive web
                  experiences with modern technologies. I transform ideas into
                  engaging digital solutions through clean, efficient code.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-teal-600 hover:bg-teal-700 text-white"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Get In Touch
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-orange-300 text-orange-600 hover:bg-orange-50"
                  asChild
                >
                  <a
                    href="/cv/Shahin_Ahmed_Resume_Dev.pdf"
                    download="Shahin_Ahmed_Resume_Dev.pdf"
                    aria-label="Download Shahin Ahmed's CV"
                    onClick={() =>
                      gtag("event", "download_cv", {
                        event_category: "CV",
                        event_label: "Download",
                      })
                    }
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download CV
                  </a>
                </Button>
              </div>

              <div className="flex items-center gap-6 pt-4">
                <Button
                  variant="ghost"
                  size="sm"
                  className="p-2 text-teal-600 hover:bg-teal-50"
                  asChild
                >
                  <a
                    href="https://github.com/shahin715?tab=repositories"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="p-2 text-indigo-600 hover:bg-indigo-50"
                  asChild
                >
                  <a
                    href="https://www.linkedin.com/in/shahin-ahmed-46546b380/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="p-2 text-orange-600 hover:bg-orange-50"
                  asChild
                >
                  <a href="mailto:shahinahmed9824@gmail.com">
                    <Mail className="w-5 h-5" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative">
              <div className="relative w-80 h-80 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-100 to-indigo-100 rounded-full" />
                <div className="absolute inset-4 bg-gradient-to-tr from-orange-100 to-transparent rounded-full" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-teal-100 rounded-full flex items-center justify-center backdrop-blur-sm border border-teal-200">
                    <Code className="w-16 h-16 text-teal-600" />
                  </div>
                </div>
                <div className="absolute top-8 right-8 animate-pulse">
                  <Badge className="bg-teal-600 text-white">React</Badge>
                </div>
                <div className="absolute bottom-12 left-4 animate-pulse delay-300">
                  <Badge className="bg-orange-500 text-white">Next.js</Badge>
                </div>
                <div className="absolute top-1/2 -right-4 animate-pulse delay-700">
                  <Badge className="bg-indigo-500 text-white">JavaScript</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-teal-700">
            About Me
          </h3>
          <div className="max-w-3xl mx-auto">
            <Card className="bg-white border-gray-200">
              <CardContent className="p-8">
                <p className="text-lg text-gray-600 leading-relaxed text-pretty">
                  I'm Shahin Ahmed, an enthusiastic frontend developer with a
                  strong foundation in modern web technologies. My journey in
                  web development started with HTML and CSS, and has evolved to
                  include React, Next.js, and state management with Redux
                  Toolkit. I'm passionate about creating user-friendly
                  interfaces that not only look great but also provide excellent
                  user experiences. Currently seeking opportunities to
                  contribute to innovative projects and grow as a developer.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>


      <section id="skills" className="py-20 px-4 bg-indigo-50">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-indigo-700">
            Technical Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {skills.map((skill, index) => (
              <Card
                key={index}
                className="bg-white border-gray-200 hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 ${skill.color} rounded-lg`}>
                      <skill.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-lg text-slate-800">
                      {skill.name}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm text-gray-600">
                    {skill.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-teal-700">
            Featured Projects
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`rounded-lg border border-gray-200 hover:shadow-xl transition-shadow ${project.color}`}
              >
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-slate-800">
                    {project.title}
                  </h4>
                  <p className="text-sm text-gray-600 mt-2">
                    {project.description}
                  </p>
                </div>
                <div className="p-6 bg-white">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-transparent border-teal-300 text-teal-600 hover:bg-teal-50 py-2 px-4 rounded-md border flex items-center justify-center"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-md flex items-center justify-center"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section id="contact" className="py-20 px-4 bg-indigo-50">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-indigo-700">
            Let's Connect
          </h3>
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        
            <div className="space-y-8">
              <div>
                <h4 className="text-2xl font-semibold mb-4 text-slate-800">
                  Get in Touch
                </h4>
                <p className="text-gray-600 text-pretty leading-relaxed">
                  I'm always interested in new opportunities and collaborations.
                  Whether you have a project in mind or just want to connect,
                  I'd love to hear from you!
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-teal-600 rounded-lg">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-800">Email</p>
                    <p className="text-gray-600">shahinahmed9824@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 bg-orange-500 rounded-lg">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-800">Phone</p>
                    <p className="text-gray-600">+880 1793776135</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 bg-indigo-500 rounded-lg">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-800">Location</p>
                    <p className="text-gray-600">Available for remote work</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <Button
                  variant="outline"
                  className="flex-1 bg-transparent border-indigo-300 text-indigo-600 hover:bg-indigo-50"
                  asChild
                >
                  <a
                    href="https://www.linkedin.com/in/shahin-ahmed-46546b380/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 bg-transparent border-teal-300 text-teal-600 hover:bg-teal-50"
                  asChild
                >
                  <a
                    href="https://github.com/shahin715?tab=repositories"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </a>
                </Button>
              </div>
            </div>

          
            <Card className="bg-white border-gray-200">
              <CardHeader>
                <CardTitle className="text-slate-800">
                  Send me a message
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Fill out the form below and I'll get back to you as soon as
                  possible.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="firstName"
                      className="text-sm font-medium text-slate-800"
                    >
                      First Name
                    </label>
                    <Input
                      id="firstName"
                      placeholder="John"
                      className="border-gray-300 focus:ring-teal-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="lastName"
                      className="text-sm font-medium text-slate-800"
                    >
                      Last Name
                    </label>
                    <Input
                      id="lastName"
                      placeholder="Doe"
                      className="border-gray-300 focus:ring-teal-500"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-slate-800"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john.doe@example.com"
                    className="border-gray-300 focus:ring-teal-500"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="text-sm font-medium text-slate-800"
                  >
                    Subject
                  </label>
                  <Input
                    id="subject"
                    placeholder="Project collaboration"
                    className="border-gray-300 focus:ring-teal-500"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-slate-800"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project or just say hello..."
                    className="min-h-[120px] resize-none border-gray-300 focus:ring-teal-500"
                  />
                </div>

                <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

   
      <footer className="py-8 px-4 border-t border-gray-200 bg-gray-50">
        <div className="container mx-auto text-center">
          <p className="text-gray-600">
            © 2025 Shahin Ahmed. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}