import React, { useState, useEffect } from "react";
import Icon from "../../../components/AppIcon";
import Image from "../../../components/AppImage";
import Button from "../../../components/ui/Button";

const FeaturedProjects = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [selectedModal, setSelectedModal] = useState(null);
  const [autoPlay, setAutoPlay] = useState(true);

  const projects = [
    {
      id: 1,
      title: "Swift-Garden",
      subtitle: "E-commerce Plant Store",
      description:
        "A modern e-commerce platform for plant enthusiasts with advanced filtering, wishlist functionality, and seamless checkout experience.",
      longDescription: `Swift-Garden is a comprehensive e-commerce solution built for plant lovers. The platform features an intuitive product catalog with advanced filtering options, user authentication, shopping cart functionality, and integrated payment processing.\n\nKey features include real-time inventory management, user reviews and ratings, wishlist functionality, and responsive design optimized for mobile shopping. The admin dashboard provides comprehensive analytics and order management capabilities.`,
      image:
        "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=400&fit=crop",
      technologies: ["Next js", "Node js",
        "Express", "PostgresSQL", "Prisma", "Express", "Stripe"],
      liveUrl: "https://swift-garden-frontned.vercel.app/",
      githubUrl: "https://github.com/mashuq/swift-garden",
      category: "E-commerce",
      status: "Live",
      metrics: {
        users: "2.5K+",
        orders: "850+",
        rating: "4.8/5",
        uptime: "99.9%",
      },
      testimonial: {
        text: "Swift-Garden transformed our plant business. The intuitive interface and robust features helped us increase online sales by 300%.",
        author: "Sarah Johnson",
        role: "Plant Store Owner",
      },
      caseStudyLink:
        "https://portfolio-mashuq.vercel.app/projects/676edf92298c166a20883b8b",
    },
    {
      id: 2,
      title: "Bikease",
      subtitle: "Bike Rental Platform",
      description:
        "A comprehensive bike rental management system with real-time tracking, booking system, and payment integration.",
      longDescription: `Bikease revolutionizes bike rental services with a modern, user-friendly platform. The system handles everything from bike availability tracking to customer management and payment processing.\n\nFeatures include GPS tracking for rented bikes, automated pricing based on duration and bike type, customer loyalty programs, and comprehensive reporting for business insights. The mobile-responsive design ensures seamless experience across all devices.`,
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
      technologies: [
        "React js",
        "Node js",
        "Express",
        "MongoDB",
        "Tailwind CSS",
    
      ],
      liveUrl: "https://bike-rental-frontend-xi.vercel.app/",
      githubUrl: "https://github.com/mashuq/bikease",
      category: "Rental Platform",
      status: "Live",
      metrics: {
        users: "1.8K+",
        bookings: "3.2K+",
        rating: "4.7/5",
        uptime: "99.8%",
      },
      testimonial: {
        text: "Bikease streamlined our rental operations completely. The automated system reduced our manual work by 80% while improving customer satisfaction.",
        author: "Mike Chen",
        role: "Bike Rental Business Owner",
      },
      caseStudyLink:
        "https://portfolio-mashuq.vercel.app/projects/676edf92298c166a20883b8c",
    },
    {
      id: 3,
      title: "Pet Care",
      subtitle: "Social Media for Pet Owners",
      description:
        "A social media platform dedicated to pet owners for sharing experiences, tips, and connecting with other pet enthusiasts.",
      longDescription: `Pet Care is a web-based social media platform tailored for pet lovers to connect, share, and explore all things related to pet care. Users can create profiles for themselves and their pets, post updates, share pet care tips, and engage with a community of like-minded individuals. The platform features discussion forums, event planning for pet meetups, and resources for pet health and grooming. Pet Care fosters a vibrant and supportive community while helping pet owners access trusted advice and services.`,
      image:
        "https://res.cloudinary.com/dhe24bfs8/image/upload/v1735321412/Screenshot_2024-12-19_135023_qvicnk.png",
      technologies: ["Next js",  "PostgreSQL", "Node js",
        "Express",],
      liveUrl: "https://pet-care-client-eight.vercel.app/",
      githubUrl: "https://github.com/mashuq/taskflow-pro",
      category: "Productivity",
      status: "Live",
      metrics: {
        users: "5.1K+",
        projects: "12K+",
        rating: "4.9/5",
        uptime: "99.9%",
      },
      testimonial: {
        text: "TaskFlow Pro became essential for our remote team. The real-time collaboration features and intuitive design boosted our productivity significantly.",
        author: "Emily Rodriguez",
        role: "Project Manager, Tech Startup",
      },
      caseStudyLink:
        "https://portfolio-mashuq.vercel.app/projects/676edf92298c166a20883b8e",
    },
    {
      id: 4,
      title: "Sportize",
      subtitle: "Sell Sports Equipment Online",
      description:
        "A dynamic e-commerce platform for buying and selling sports equipment with user reviews, secure payments, and inventory management.",
      longDescription: `Sportize is an all-in-one e-commerce solution designed for sports enthusiasts to buy and sell sports equipment. The platform features a user-friendly interface, advanced search and filtering options, secure payment processing, and a robust inventory management system for sellers.\n\nKey functionalities include user reviews and ratings, wishlists, promotional discounts, and a responsive design optimized for both desktop and mobile shopping experiences. Sportize empowers users to find the best deals on sports gear while providing sellers with the tools they need to manage their online stores effectively.`,
      image:
        "https://res.cloudinary.com/dhe24bfs8/image/upload/v1735321320/Screenshot_2024-12-19_135328_vldhkj.png",
      technologies: [
    
        "Node.js",
        "MongoDB",
        "React js"
      ],
      liveUrl: "https://sportize-client.vercel.app/",
      githubUrl: "https://sportize-client.vercel.app/",
   
      status: "Live",
      metrics: {
        users: "3.7K+",
        transactions: "45K+",
        rating: "4.6/5",
        uptime: "99.7%",
      },
      testimonial: {
        text: "FinanceTracker gave me complete visibility into my spending habits. I've saved 25% more money since using this app.",
        author: "David Park",
        role: "Software Engineer",
      },
    },
    {
      id: 5,
      title: "MAKERZ",
      subtitle: "Wood Cutter Hiring Platform",
      description:
        "A platform connecting customers with professional wood cutters for on-demand services, featuring scheduling, reviews, and secure payments.",
      longDescription: `MAKERZ is a specialized platform that connects customers with skilled wood cutters for various woodworking needs. The platform allows users to browse profiles of professional wood cutters, read reviews, and book services directly through the app.\n\nKey features include real-time availability scheduling, secure payment processing, customer reviews and ratings, and a user-friendly interface for both customers and service providers. MAKERZ aims to streamline the process of finding and hiring reliable wood cutting services while ensuring quality and customer satisfaction.

      This is a private project and the partial source code publicly available.
      
      `,
      image:
        "https://res.cloudinary.com/dilkirxwz/image/upload/v1765879339/Screenshot_2025-12-16_155632_zneb0h.png",
      technologies: [
        "React Js",
        "Node.js",
        "PostgreSQL",
   
        
      ],
      liveUrl: "https://makerz-client.vercel.app/",
      githubUrl: "https://github.com/mashuq0068/wood-cutter",
   
      status: "Live",
      metrics: {
        users: "3.7K+",
        transactions: "45K+",
        rating: "4.6/5",
        uptime: "99.7%",
      },
      testimonial: {
        text: "FinanceTracker gave me complete visibility into my spending habits. I've saved 25% more money since using this app.",
        author: "David Park",
        role: "Software Engineer",
      },
    },
    {
      id: 6,
      title: "BigSpontino",
      subtitle: "Resturant Website & Delivery App",
      description:
        "A full-featured restaurant website and delivery app with menu browsing, online ordering, real-time order tracking, and customer reviews.",
      longDescription: `BigSpontino is a comprehensive restaurant management platform that includes both a customer-facing website and a delivery application. The platform allows users to browse the restaurant menu, place online orders for pickup or delivery, and track their orders in real-time.\n\nKey features include an intuitive menu interface with detailed item descriptions and images, secure payment processing, customer reviews and ratings, and a responsive design optimized for both desktop and mobile devices. The delivery app includes GPS tracking for orders, estimated delivery times, and notifications to keep customers informed throughout the process. BigSpontino aims to enhance the dining experience by providing convenience and efficiency for both customers and restaurant staff.
      
      As this is a private project, the partial source code is publicly available.`,
      image:
        "https://res.cloudinary.com/dilkirxwz/image/upload/v1765879319/Screenshot_2025-12-16_153939_k0egsy.png",
      technologies: [
        "React js",
        "Node.js",
        "MongoDB",
       
      ],
      liveUrl: "https://bigspontino-old.vercel.app/",
      githubUrl: "https://github.com/mashuq0068/bigspontino",

      status: "Live",
      metrics: {
        users: "3.7K+",
        transactions: "45K+",
        rating: "4.6/5",
        uptime: "99.7%",
      },
      testimonial: {
        text: "FinanceTracker gave me complete visibility into my spending habits. I've saved 25% more money since using this app.",
        author: "David Park",
        role: "Software Engineer",
      },
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
            Explore my latest work showcasing modern web development practices,
            user-centered design, and scalable architecture solutions.
          </p>
        </div>

        {/* Main Project Display */}
        <div className="relative mb-12">
          <div className="bg-card border border-border rounded-lg overflow-hidden tech-shadow">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Project Image */}
              <div className="relative h-64 lg:h-96 overflow-hidden">
                <Image
                  src={projects[activeProject].image}
                  alt={projects[activeProject].title}
                  className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-success text-success-foreground px-3 py-1 rounded-full text-xs font-medium">
                    {projects[activeProject].status}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-card/90 backdrop-blur-sm text-foreground px-3 py-1 rounded-full text-xs font-medium">
                    {projects[activeProject].category}
                  </span>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {projects[activeProject].title}
                  </h3>
                  <p className="text-accent font-medium mb-4">
                    {projects[activeProject].subtitle}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {projects[activeProject].description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-3">
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {projects[activeProject].technologies.map((tech, index) => (
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
                  <Button
                    variant="default"
                    onClick={() =>
                      window.open(projects[activeProject].liveUrl,  "_blank")
                    }
                    iconName="ExternalLink"
                    iconPosition="right"
                    className="flex-1"
                  >
                    View Live Demo
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() =>
                      projects[activeProject]?.caseStudyLink
                        ? (window.location.href =
                            projects[activeProject].caseStudyLink, "_blank")
                        : openModal(projects[activeProject])
                    }
                    iconName="Eye"
                    iconPosition="right"
                    className="flex-1"
                  >
                    Case Study
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
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
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
              <div className="aspect-video overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end p-4">
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
          <div className="fixed inset-0 z-200 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-card border border-border rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto tech-shadow">
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
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
                      className="w-full h-64 object-contain  rounded-lg mb-6"
                    />

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">
                          Project Links:
                        </h4>
                        <div className="flex gap-3">
                          <Button
                            variant="default"
                            size="sm"
                            onClick={() =>
                              window.open(selectedModal.liveUrl, "_blank")
                            }
                            iconName="ExternalLink"
                            iconPosition="right"
                          >
                            Live Demo
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() =>
                              window.open(selectedModal.githubUrl, "_blank")
                            }
                            iconName="Github"
                            iconPosition="right"
                          >
                            Source Code
                          </Button>
                        </div>
                      </div>
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
