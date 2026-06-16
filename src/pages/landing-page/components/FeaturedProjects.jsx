import React, { useState, useEffect } from "react";
import Icon from "../../../components/AppIcon";
import Image from "../../../components/AppImage";
import Button from "../../../components/ui/Button";

const FeaturedProjects = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [selectedModal, setSelectedModal] = useState(null);
  const [autoPlay, setAutoPlay] = useState(true);

  /**
   * NOTE: Most of these are organization / client projects built under an
   * employer or NDA. Their source code and live URLs are private, so we only
   * showcase what they are, the organization, my role and the tech used — via
   * an in-page details popup (no public case-study pages or repo links).
   *
   * Clipzen is my own public product, so it links out to the live site.
   */
  const projects = [
    {
      id: 1,
      title: "Clipzen",
      subtitle: "AI Short-Form Video Generator",
      organization: "Personal Product · clipzen.pro",
      role: "Founder & Full-stack Developer",
      description:
        "An AI SaaS that turns long videos and podcasts into viral, ready-to-post vertical shorts — automatic hook detection, smart reframing and animated captions in minutes.",
      longDescription: `Clipzen is my own public product — an AI-powered video editor that turns long-form content (podcasts, interviews, livestreams and lectures up to a few hours long) into 10–40 scroll-stopping vertical clips in just a few minutes.\n\nThe AI Hook Detector analyses speech, emotion, facial expressions, motion and pacing to find the most engaging moments. It then auto-reframes footage to a face-aware 9:16 format, burns in animated on-beat captions, and can publish straight to TikTok, Instagram Reels, YouTube Shorts, LinkedIn and X.\n\nI designed and built the product end-to-end: the marketing site, the processing pipeline, billing/credits, and the AI + media tooling that powers the clip generation.`,
      image: "/assets/images/clipzen.png",
      technologies: [
        "Next.js",
        "TypeScript",
        "Node.js",
        "AI / ML",
        "FFmpeg",
        "PostgreSQL",
        "Tailwind CSS",
      ],
      highlights: [
        "AI Hook Detector ranks the most viral moments",
        "Face-aware auto-reframe to vertical 9:16",
        "Animated, on-beat auto captions & transcripts",
        "One-tap publishing to TikTok, Reels & Shorts",
      ],
      liveUrl: "https://clipzen.pro",
      category: "AI SaaS Product",
      isPublic: true,
      status: "Live",
    },
    {
      id: 2,
      title: "Enterprise ERP System",
      subtitle: "Business Operations Platform",
      organization: "Alfastack Solution Pvt. Ltd. (India)",
      role: "Full-stack Developer",
      description:
        "ERP modules for enterprise clients — automated workflows, computer-vision modules and backend integrations built on Frappe and Node.js.",
      longDescription: `An enterprise ERP platform I worked on at Alfastack Solution to streamline business operations for enterprise clients.\n\nI built and integrated full-stack modules on top of Frappe and Node.js, developed computer-vision modules and automated workflows, and optimized database performance for high-traffic, data-heavy operations.\n\nWork covered backend service integration, role-based access, and reusable front-end components used across multiple internal modules.`,
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      technologies: [
        "Frappe",
        "Python",
        "Node.js",
        "React.js",
        "PostgreSQL",
        "Computer Vision",
      ],
      highlights: [
        "Automated enterprise workflows",
        "Computer-vision driven modules",
        "Optimized database performance",
        "Role-based access & integrations",
      ],
      category: "ERP / Enterprise",
      isPublic: false,
      status: "Private",
    },
    {
      id: 3,
      title: "University Management System",
      subtitle: "Academic Administration Platform",
      organization: "Code Prophet (Khulna, Bangladesh)",
      role: "Frontend Developer",
      description:
        "A dynamic management system for universities — admissions, student records and results with interactive admin dashboards and reusable UI components.",
      longDescription: `A university management platform I helped build at Code Prophet to digitise academic administration for institutional clients.\n\nI developed responsive, dynamic interfaces for admissions, student records, results and faculty management using React, Node.js and Bootstrap. I implemented interactive dashboards, data visualization and a library of reusable UI components shared across modules.\n\nThe focus was a clean, responsive experience for administrators handling large volumes of student data.`,
      image:
        "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&h=400&fit=crop",
      technologies: ["React.js", "Node.js", "Bootstrap", "REST API"],
      highlights: [
        "Admissions, records & results modules",
        "Interactive admin dashboards",
        "Reusable component library",
        "Fully responsive UI",
      ],
      category: "Management System",
      isPublic: false,
      status: "Private",
    },
    {
      id: 4,
      title: "Hospital Management System",
      subtitle: "Healthcare Administration Platform",
      organization: "Code Prophet (Khulna, Bangladesh)",
      role: "Frontend Developer",
      description:
        "A hospital management platform handling patients, appointments and records with data-visualization dashboards and responsive, reusable components.",
      longDescription: `A hospital management system I worked on at Code Prophet to help healthcare clients manage day-to-day operations.\n\nI built dynamic interfaces for patient management, appointments, billing and medical records using React, Node.js and Bootstrap. I implemented interactive dashboards and data visualization so staff could track operations at a glance.\n\nReusable UI components and a responsive layout kept the experience consistent across the platform's many modules.`,
      image:
        "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=600&h=400&fit=crop",
      technologies: ["React.js", "Node.js", "Bootstrap", "Chart.js"],
      highlights: [
        "Patient, appointment & records modules",
        "Operational data-visualization dashboards",
        "Reusable, responsive UI components",
        "Built for multiple clinic clients",
      ],
      category: "Management System",
      isPublic: false,
      status: "Private",
    },
    {
      id: 5,
      title: "Restaurant Management & Ordering",
      subtitle: "Restaurant Control & Delivery System",
      organization: "Private Client Project",
      role: "Full-stack Developer",
      description:
        "A restaurant control system with menu management, online ordering, real-time order tracking and an admin dashboard for staff operations.",
      longDescription: `A restaurant management and ordering platform built for a private client to run both the customer-facing experience and back-of-house operations.\n\nIt covers menu and inventory management, online ordering for pickup or delivery, real-time order tracking, and an admin dashboard for staff. I worked across the stack on the ordering flow, dashboard and API integration.\n\nAs a private client project, the source code and live deployment aren't publicly shareable.`,
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
      technologies: ["React.js", "Node.js", "MongoDB", "Tailwind CSS"],
      highlights: [
        "Menu & inventory management",
        "Online ordering for pickup / delivery",
        "Real-time order tracking",
        "Staff operations dashboard",
      ],
      category: "Restaurant System",
      isPublic: false,
      status: "Private",
    },
    {
      id: 6,
      title: "Learning Management System",
      subtitle: "E-Learning Platform (LMS)",
      organization: "TS4U (USA)",
      role: "Frontend Developer",
      description:
        "An interactive LMS platform — course modules, dynamic components and optimized cross-browser performance, integrated with backend APIs.",
      longDescription: `A Learning Management System (LMS) I worked on at TS4U to deliver interactive, user-friendly online learning.\n\nI built dynamic course modules and interactive components with JavaScript, React.js and Node.js, optimized performance and improved cross-browser compatibility. I collaborated closely with backend engineers to integrate APIs, enhance data flow and streamline the overall learning experience.`,
      image:
        "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop",
      technologies: ["React.js", "JavaScript", "Node.js", "REST API"],
      highlights: [
        "Interactive course modules",
        "Performance-optimized components",
        "Cross-browser compatibility",
        "Close API integration with backend",
      ],
      category: "E-Learning",
      isPublic: false,
      status: "Private",
    },
  ];

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setActiveProject((prev) => (prev + 1) % projects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoPlay, projects.length]);

  const openModal = (project) => {
    setSelectedModal(project);
    setAutoPlay(false);
  };

  const closeModal = () => {
    setSelectedModal(null);
    setAutoPlay(true);
  };

  const nextProject = () => {
    setActiveProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setActiveProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const current = projects[activeProject];

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-background to-muted/10"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A mix of my own products and the organization &amp; client projects
            I've shipped. Most client work is private/under NDA, so each card
            opens a quick overview of what it is, my role and the tech used.
          </p>
        </div>

        {/* Main Project Display */}
        <div className="relative mb-12">
          <div className="bg-card border border-border rounded-lg overflow-hidden tech-shadow">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Project Image */}
              <div className="relative h-64 lg:h-96 overflow-hidden bg-muted/30">
                <Image
                  src={current.image}
                  alt={current.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      current.isPublic
                        ? "bg-success text-success-foreground"
                        : "bg-foreground/80 text-background"
                    }`}
                  >
                    {current.isPublic ? "Live · Public" : "Private · NDA"}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-card/90 backdrop-blur-sm text-foreground px-3 py-1 rounded-full text-xs font-medium">
                    {current.category}
                  </span>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-1">
                    {current.title}
                  </h3>
                  <p className="text-accent font-medium mb-2">
                    {current.subtitle}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <Icon name="Building2" size={14} />
                    <span>{current.organization}</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {current.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-3">
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {current.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-primary/10 text-primary px-3 py-1 rounded-md text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  {current.isPublic && current.liveUrl && (
                    <Button
                      variant="default"
                      onClick={() => window.open(current.liveUrl, "_blank")}
                      iconName="ExternalLink"
                      iconPosition="right"
                      className="flex-1"
                    >
                      Visit Live
                    </Button>
                  )}
                  <Button
                    variant={current.isPublic ? "outline" : "default"}
                    onClick={() => openModal(current)}
                    iconName="Eye"
                    iconPosition="right"
                    className="flex-1"
                  >
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevProject}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center tech-shadow hover:bg-muted/50 transition-colors"
          >
            <Icon name="ChevronLeft" size={20} className="text-foreground" />
          </button>
          <button
            onClick={nextProject}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center tech-shadow hover:bg-muted/50 transition-colors"
          >
            <Icon name="ChevronRight" size={20} className="text-foreground" />
          </button>
        </div>

        {/* Project Thumbnails */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <button
              key={project.id}
              onClick={() => setActiveProject(index)}
              className={`relative group overflow-hidden rounded-lg transition-all duration-300 ${
                index === activeProject
                  ? "ring-2 ring-primary tech-shadow-lg"
                  : "hover:tech-shadow"
              }`}
            >
              <div className="aspect-video overflow-hidden bg-muted/30">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex items-end p-4">
                <div className="text-left">
                  <h4 className="text-sm font-semibold text-foreground">
                    {project.title}
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    {project.category}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Project Modal */}
        {selectedModal && (
          <div
            className="fixed inset-0 z-200 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <div
              className="bg-card border border-border rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto tech-shadow"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-1">
                      {selectedModal.title}
                    </h3>
                    <p className="text-accent font-medium">
                      {selectedModal.subtitle}
                    </p>
                  </div>
                  <button
                    onClick={closeModal}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Icon name="X" size={24} />
                  </button>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <Image
                      src={selectedModal.image}
                      alt={selectedModal.title}
                      className="w-full h-56 object-cover rounded-lg mb-6 bg-muted/30"
                    />

                    {/* Meta: organization & role */}
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <Icon
                          name="Building2"
                          size={16}
                          className="text-primary mt-0.5 flex-shrink-0"
                        />
                        <div>
                          <p className="text-xs text-muted-foreground">
                            Organization
                          </p>
                          <p className="text-sm font-medium text-foreground">
                            {selectedModal.organization}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Icon
                          name="UserCog"
                          size={16}
                          className="text-primary mt-0.5 flex-shrink-0"
                        />
                        <div>
                          <p className="text-xs text-muted-foreground">My Role</p>
                          <p className="text-sm font-medium text-foreground">
                            {selectedModal.role}
                          </p>
                        </div>
                      </div>

                      {selectedModal.isPublic && selectedModal.liveUrl ? (
                        <div className="pt-2">
                          <Button
                            variant="default"
                            size="sm"
                            onClick={() =>
                              window.open(selectedModal.liveUrl, "_blank")
                            }
                            iconName="ExternalLink"
                            iconPosition="right"
                          >
                            Visit Live Site
                          </Button>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2 pt-2 text-sm text-muted-foreground">
                          <Icon name="Lock" size={14} />
                          <span>
                            Private / NDA project — source &amp; live URL not
                            publicly shareable.
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">
                        Project Overview:
                      </h4>
                      <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                        {selectedModal.longDescription}
                      </p>
                    </div>

                    {selectedModal.highlights && (
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">
                          What I Built / Highlights:
                        </h4>
                        <ul className="space-y-2">
                          {selectedModal.highlights.map((item, index) => (
                            <li
                              key={index}
                              className="flex items-start gap-2"
                            >
                              <Icon
                                name="CheckCircle"
                                size={16}
                                className="text-success mt-0.5 flex-shrink-0"
                              />
                              <span className="text-sm text-muted-foreground">
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div>
                      <h4 className="font-semibold text-foreground mb-3">
                        Technologies:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedModal.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="bg-primary/10 text-primary px-3 py-1 rounded-md text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedProjects;
