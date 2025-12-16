import React, { useState, useEffect } from "react";
import Icon from "../../../components/AppIcon";

const SkillsShowcase = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [visibleSkills, setVisibleSkills] = useState(new Set());

  const skillCategories = [
    { id: "all", label: "All Skills", icon: "Grid3X3" },
    { id: "languages", label: "Languages", icon: "FileCode"  },
    { id: "frontend", label: "Frontend", icon: "Monitor" },
    { id: "backend", label: "Backend", icon: "Server" },
    { id: "database", label: "Database", icon: "Database" },
    { id: "tools", label: "Tools", icon: "Wrench" },
    { id: "dsa", label: "DSA & Algorithms", icon: "Hash" },
    { id: "soft-skills", label: "Soft Skills", icon: "Users" },
  ];

  const skills = [
    // Languages
    {
      id: 1,
      name: "JavaScript (ES6+)",
      category: "languages",
      proficiency: 95,
      experience: "3+ years",
      projects: 20,
      description: "Modern JS for frontend & backend development.",
      icon: "FileCode",
      color: "text-yellow-400",
      bgColor: "bg-yellow-400/10",
    },
    {
      id: 2,
      name: "TypeScript",
      category: "languages",
      proficiency: 90,
      experience: "2+ years",
      projects: 15,
      description: "Strongly typed JS for maintainable, scalable code.",
      icon: "FileCode",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      id: 3,
      name: "Python",
      category: "languages",
      proficiency: 85,
      experience: "2+ years",
      projects: 12,
      description: "General-purpose programming and backend scripting.",
      icon: "Code",
      color: "text-green-400",
      bgColor: "bg-green-400/10",
    },
    {
      id: 4,
      name: "C++",
      category: "languages",
      proficiency: 80,
      experience: "2+ years",
      projects: 8,
      description:
        "Efficient algorithms, data structures, and system programming.",
      icon: "Code",
      color: "text-gray-500",
      bgColor: "bg-gray-500/10",
    },

    // Frontend
    {
      id: 5,
      name: "React.js",
      category: "frontend",
      proficiency: 95,
      experience: "2+ years",
      projects: 18,
      description: "Building interactive UIs using hooks, context, and state.",
      icon: "Monitor",
      color: "text-blue-400",
      bgColor: "bg-blue-400/10",
    },
    {
      id: 6,
      name: "Next.js",
      category: "frontend",
      proficiency: 90,
      experience: "1.5+ years",
      projects: 12,
      description: "Full-stack React framework for SSR/SSG applications.",
      icon: "Zap",
      color: "text-gray-400",
      bgColor: "bg-gray-400/10",
    },
    {
      id: 7,
      name: "Redux",
      category: "frontend",
      proficiency: 85,
      experience: "2+ years",
      projects: 10,
      description: "State management for large-scale React apps.",
      icon: "Database",
      color: "text-purple-400",
      bgColor: "bg-purple-400/10",
    },
    {
      id: 8,
      name: "Zustand",
      category: "frontend",
      proficiency: 80,
      experience: "1+ years",
      projects: 6,
      description: "Simpler, reactive state management for React apps.",
      icon: "Database",
      color: "text-pink-400",
      bgColor: "bg-pink-400/10",
    },
    {
      id: 9,
      name: "Tailwind CSS",
      category: "frontend",
      proficiency: 95,
      experience: "2+ years",
      projects: 20,
      description: "Utility-first CSS framework for rapid UI development.",
      icon: "Palette",
      color: "text-cyan-400",
      bgColor: "bg-cyan-400/10",
    },
    {
      id: 10,
      name: "Bootstrap",
      category: "frontend",
      proficiency: 90,
      experience: "2+ years",
      projects: 15,
      description: "Responsive design framework for faster UI building.",
      icon: "Monitor",
      color: "text-indigo-400",
      bgColor: "bg-indigo-400/10",
    },

    // Backend
    {
      id: 11,
      name: "Node.js",
      category: "backend",
      proficiency: 88,
      experience: "2+ years",
      projects: 18,
      description: "Server-side JS runtime for scalable network applications.",
      icon: "Server",
      color: "text-green-400",
      bgColor: "bg-green-400/10",
    },
    {
      id: 12,
      name: "Express.js",
      category: "backend",
      proficiency: 90,
      experience: "2+ years",
      projects: 16,
      description: "Minimal and flexible Node.js framework for APIs.",
      icon: "Globe",
      color: "text-gray-500",
      bgColor: "bg-gray-500/10",
    },
    {
      id: 13,
      name: "RESTful API Design",
      category: "backend",
      proficiency: 85,
      experience: "2+ years",
      projects: 14,
      description: "Designing structured and efficient API endpoints.",
      icon: "Share2",
      color: "text-pink-400",
      bgColor: "bg-pink-400/10",
    },
    {
      id: 14,
      name: "Authentication & Authorization",
      category: "backend",
      proficiency: 85,
      experience: "2+ years",
      projects: 12,
      description: "Secure user authentication and role-based access control.",
      icon: "Lock",
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
    },
    {
      id: 15,
      name: "Microservices (Basic)",
      category: "backend",
      proficiency: 75,
      experience: "1+ years",
      projects: 6,
      description: "Modular architecture for scalable backend systems.",
      icon: "Server",
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },

    // Database
    {
      id: 16,
      name: "MongoDB",
      category: "database",
      proficiency: 80,
      experience: "1.5+ years",
      projects: 12,
      description: "NoSQL document database for flexible, scalable storage.",
      icon: "Layers",
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
    {
      id: 17,
      name: "Mongoose",
      category: "database",
      proficiency: 80,
      experience: "1.5+ years",
      projects: 10,
      description: "Object Data Modeling (ODM) library for MongoDB.",
      icon: "Layers",
      color: "text-green-400",
      bgColor: "bg-green-400/10",
    },
    {
      id: 18,
      name: "PostgreSQL",
      category: "database",
      proficiency: 85,
      experience: "1.5+ years",
      projects: 10,
      description: "Advanced relational database with complex queries.",
      icon: "Database",
      color: "text-blue-600",
      bgColor: "bg-blue-600/10",
    },
    {
      id: 19,
      name: "Prisma ORM",
      category: "database",
      proficiency: 80,
      experience: "1+ years",
      projects: 6,
      description: "Modern ORM for database access and migrations.",
      icon: "Database",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
    },

    // Tools & Platforms
    {
      id: 21,
      name: "Git & GitHub",
      category: "tools",
      proficiency: 92,
      experience: "3+ years",
      projects: 25,
      description: "Version control and collaborative workflows.",
      icon: "GitBranch",
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
    },
    {
      id: 22,
      name: "Docker",
      category: "tools",
      proficiency: 75,
      experience: "1+ years",
      projects: 6,
      description: "Containerization for consistent development & deployment.",
      icon: "Package",
      color: "text-blue-400",
      bgColor: "bg-blue-400/10",
    },
    {
      id: 23,
      name: "Postman",
      category: "tools",
      proficiency: 80,
      experience: "1+ years",
      projects: 5,
      description: "API testing and development workflows.",
      icon: "Tool",
      color: "text-indigo-400",
      bgColor: "bg-indigo-400/10",
    },
    {
      id: 24,
      name: "VS Code",
      category: "tools",
      proficiency: 90,
      experience: "3+ years",
      projects: 20,
      description: "Primary code editor for development.",
      icon: "Monitor",
      color: "text-blue-400",
      bgColor: "bg-blue-400/10",
    },
    {
      id: 25,
      name: "Linux CLI",
      category: "tools",
      proficiency: 85,
      experience: "2+ years",
      projects: 12,
      description: "Command-line proficiency for development and deployment.",
      icon: "Terminal",
      color: "text-gray-400",
      bgColor: "bg-gray-400/10",
    },
    {
      id: 26,
      name: "Cloud Deployment",
      category: "tools",
      proficiency: 75,
      experience: "1+ years",
      projects: 8,
      description: "Vercel, Render, Railway deployment experience.",
      icon: "Cloud",
      color: "text-orange-400",
      bgColor: "bg-orange-400/10",
    },
    {
      id: 27,
      name: "CI/CD (Basic)",
      category: "tools",
      proficiency: 70,
      experience: "1+ years",
      projects: 5,
      description: "Continuous integration and deployment pipelines.",
      icon: "Zap",
      color: "text-green-400",
      bgColor: "bg-green-400/10",
    },

    // DSA & Algorithms
    {
      id: 20,
      name: "Arrays, Linked Lists, Stacks, Queues, Binary Search, Heaps",
      category: "dsa",
      proficiency: 90,
      experience: "2+ years",
      projects: 0,
      description: "Proficient in fundamental data structures.",
      icon: "Hash",
      color: "text-red-400",
      bgColor: "bg-red-400/10",
    },
    {
      id: 21,
      name: "Trees, Graphs",
      category: "dsa",
      proficiency: 85,
      experience: "2+ years",
      projects: 0,
      description:
        "Experience with binary trees, BSTs, graphs, and traversal algorithms.",
      icon: "Hash",
      color: "text-red-400",
      bgColor: "bg-red-400/10",
    },
    {
      id: 22,
      name: "Sorting & Searching Algorithms",
      category: "dsa",
      proficiency: 90,
      experience: "2+ years",
      projects: 0,
      description:
        "Knowledge of common sorting and searching techniques with complexity analysis.",
      icon: "Hash",
      color: "text-red-400",
      bgColor: "bg-red-400/10",
    },
    {
      id: 23,
      name: "Recursion & Complexity Analysis",
      category: "dsa",
      proficiency: 85,
      experience: "2+ years",
      projects: 0,
      description:
        "Design recursive solutions and analyze time and space complexity.",
      icon: "Hash",
      color: "text-red-400",
      bgColor: "bg-red-400/10",
    },

    // Soft Skills
    {
      id: 28,
      name: "Problem-Solving",
      category: "soft-skills",
      proficiency: 90,
      experience: "Ongoing",
      projects: 0,
      description:
        "Ability to analyze problems and find solutions efficiently.",
      icon: "Target",
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
    },
    {
      id: 29,
      name: "Team Collaboration",
      category: "soft-skills",
      proficiency: 95,
      experience: "Ongoing",
      projects: 0,
      description:
        "Work effectively in teams, communicating and collaborating.",
      icon: "Users",
      color: "text-blue-400",
      bgColor: "bg-blue-400/10",
    },
    {
      id: 30,
      name: "Critical Thinking",
      category: "soft-skills",
      proficiency: 90,
      experience: "Ongoing",
      projects: 0,
      description: "Analyze situations logically to make better decisions.",
      icon: "Lightbulb",
      color: "text-pink-400",
      bgColor: "bg-pink-400/10",
    },
  ];

  const filteredSkills =
    activeFilter === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeFilter);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillId = parseInt(entry.target.dataset.skillId);
            setVisibleSkills((prev) => new Set([...prev, skillId]));
          }
        });
      },
      { threshold: 0.3 }
    );

    const skillElements = document.querySelectorAll("[data-skill-id]");
    skillElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [filteredSkills]);

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-b from-muted/10 to-background"
    >
      <div className="container w-full mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Technical Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical proficiencies, from
            frontend frameworks to backend technologies and development tools.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                activeFilter === category.id
                  ? "bg-primary text-black tech-shadow"
                  : "bg-card border border-border text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
            >
              <Icon name={category.icon} size={16} />
              <span className="text-sm font-medium">{category.label}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.id}
              data-skill-id={skill.id}
              className={`bg-card border border-border rounded-lg p-6 tech-shadow hover:tech-shadow-lg transition-all duration-300 ${
                visibleSkills.has(skill.id)
                  ? "animate-fade-in opacity-100"
                  : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Skill Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-12 h-12 ${skill.bgColor} rounded-lg flex items-center justify-center`}
                  >
                    <Icon name={skill.icon} size={24} className={skill.color} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {skill.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {skill.experience}
                    </p>
                  </div>
                </div>
              </div>

              {/* Proficiency Bar
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-muted-foreground">Proficiency</span>
                  <span className="text-sm font-medium text-foreground">{skill.proficiency}%</span>
                </div>
                <div className="w-full bg-muted/30 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full transition-all duration-1000 ${skill.color.replace('text-', 'bg-')}`}
                    style={{ 
                      width: visibleSkills.has(skill.id) ? `${skill.proficiency}%` : '0%' 
                    }}
                  ></div>
                </div>
              </div> */}

              {/* Description */}
              <p className="text-sm text-muted-foreground mb-4">
                {skill.description}
              </p>

              {/* Project Count */}
              <div className="flex items-center justify-between">
                {skill.projects > 0 && (
                  <div className="flex items-center space-x-2">
                    <Icon
                      name="FolderOpen"
                      size={16}
                      className="text-muted-foreground"
                    />
                    <span className="text-sm text-muted-foreground">
                      {skill.projects} projects
                    </span>
                  </div>
                )}
                <div className={`px-2 py-1 ${skill.bgColor} rounded-md`}>
                  <span className={`text-xs font-medium ${skill.color}`}>
                    {skill.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="mt-16 bg-card border border-border rounded-lg p-8 tech-shadow">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">12+</div>
              <div className="text-sm text-muted-foreground">Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">3+</div>
              <div className="text-sm text-muted-foreground">
                Years Experience
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-success mb-2">20+</div>
              <div className="text-sm text-muted-foreground">
                Projects Built
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-warning mb-2">90%</div>
              <div className="text-sm text-muted-foreground">
                Avg Proficiency
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsShowcase;
