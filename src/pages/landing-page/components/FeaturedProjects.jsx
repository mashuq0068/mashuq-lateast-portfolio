import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const FeaturedProjects = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [selectedModal, setSelectedModal] = useState(null);
  const [autoPlay, setAutoPlay] = useState(true);

  const projects = [
    {
      id: 1,
      title: 'Swift-Garden',
      subtitle: 'E-commerce Plant Store',
      description: 'A modern e-commerce platform for plant enthusiasts with advanced filtering, wishlist functionality, and seamless checkout experience.',
      longDescription: `Swift-Garden is a comprehensive e-commerce solution built for plant lovers. The platform features an intuitive product catalog with advanced filtering options, user authentication, shopping cart functionality, and integrated payment processing.\n\nKey features include real-time inventory management, user reviews and ratings, wishlist functionality, and responsive design optimized for mobile shopping. The admin dashboard provides comprehensive analytics and order management capabilities.`,
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=400&fit=crop',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
      liveUrl: 'https://swift-garden-demo.vercel.app',
      githubUrl: 'https://github.com/mashuq/swift-garden',
      category: 'E-commerce',
      status: 'Live',
      metrics: {
        users: '2.5K+',
        orders: '850+',
        rating: '4.8/5',
        uptime: '99.9%'
      },
      testimonial: {
        text: "Swift-Garden transformed our plant business. The intuitive interface and robust features helped us increase online sales by 300%.",
        author: "Sarah Johnson",
        role: "Plant Store Owner"
      }
    },
    {
      id: 2,
      title: 'Bikease',
      subtitle: 'Bike Rental Platform',
      description: 'A comprehensive bike rental management system with real-time tracking, booking system, and payment integration.',
      longDescription: `Bikease revolutionizes bike rental services with a modern, user-friendly platform. The system handles everything from bike availability tracking to customer management and payment processing.\n\nFeatures include GPS tracking for rented bikes, automated pricing based on duration and bike type, customer loyalty programs, and comprehensive reporting for business insights. The mobile-responsive design ensures seamless experience across all devices.`,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
      technologies: ['Next.js', 'PostgreSQL', 'Prisma', 'Tailwind CSS', 'Stripe'],
      liveUrl: 'https://bikease-demo.vercel.app',
      githubUrl: 'https://github.com/mashuq/bikease',
      category: 'Rental Platform',
      status: 'Live',
      metrics: {
        users: '1.8K+',
        bookings: '3.2K+',
        rating: '4.7/5',
        uptime: '99.8%'
      },
      testimonial: {
        text: "Bikease streamlined our rental operations completely. The automated system reduced our manual work by 80% while improving customer satisfaction.",
        author: "Mike Chen",
        role: "Bike Rental Business Owner"
      }
    },
    {
      id: 3,
      title: 'TaskFlow Pro',
      subtitle: 'Project Management Tool',
      description: 'A collaborative project management platform with real-time updates, team collaboration features, and advanced analytics.',
      longDescription: `TaskFlow Pro is designed for modern teams who need efficient project management without complexity. The platform combines powerful features with an intuitive interface to help teams stay organized and productive.\n\nCore features include kanban boards, time tracking, team collaboration tools, file sharing, automated notifications, and comprehensive project analytics. The platform supports multiple project methodologies including Agile and Waterfall.`,
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      technologies: ['React', 'Node.js', 'Socket.io', 'PostgreSQL', 'Redis'],
      liveUrl: 'https://taskflow-pro-demo.vercel.app',
      githubUrl: 'https://github.com/mashuq/taskflow-pro',
      category: 'Productivity',
      status: 'Live',
      metrics: {
        users: '5.1K+',
        projects: '12K+',
        rating: '4.9/5',
        uptime: '99.9%'
      },
      testimonial: {
        text: "TaskFlow Pro became essential for our remote team. The real-time collaboration features and intuitive design boosted our productivity significantly.",
        author: "Emily Rodriguez",
        role: "Project Manager, Tech Startup"
      }
    },
    {
      id: 4,
      title: 'FinanceTracker',
      subtitle: 'Personal Finance Manager',
      description: 'A comprehensive personal finance management app with expense tracking, budget planning, and financial insights.',
      longDescription: `FinanceTracker helps individuals take control of their financial life through intelligent tracking and analysis. The app provides comprehensive insights into spending patterns and helps users make informed financial decisions.\n\nFeatures include automatic expense categorization, budget creation and monitoring, bill reminders, financial goal tracking, and detailed analytics with visual reports. The app also includes investment tracking and net worth calculations.`,
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'Chart.js', 'Plaid API'],
      liveUrl: 'https://financetracker-demo.vercel.app',
      githubUrl: 'https://github.com/mashuq/financetracker',
      category: 'Finance',
      status: 'Live',
      metrics: {
        users: '3.7K+',
        transactions: '45K+',
        rating: '4.6/5',
        uptime: '99.7%'
      },
      testimonial: {
        text: "FinanceTracker gave me complete visibility into my spending habits. I\'ve saved 25% more money since using this app.",
        author: "David Park",
        role: "Software Engineer"
      }
    }
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
    <section id="projects" className="py-20 bg-gradient-to-b from-background to-muted/10">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore my latest work showcasing modern web development practices, user-centered design, and scalable architecture solutions.
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
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
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
                  <h4 className="text-sm font-semibold text-foreground mb-3">Technologies Used:</h4>
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

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {Object.entries(projects[activeProject].metrics).map(([key, value]) => (
                    <div key={key} className="text-center bg-muted/20 rounded-lg p-3">
                      <div className="text-lg font-bold text-foreground">{value}</div>
                      <div className="text-xs text-muted-foreground capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    variant="default"
                    onClick={() => window.open(projects[activeProject].liveUrl, '_blank')}
                    iconName="ExternalLink"
                    iconPosition="right"
                    className="flex-1"
                  >
                    View Live Demo
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => openModal(projects[activeProject])}
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
                  ? 'ring-2 ring-primary tech-shadow-lg'
                  : 'hover:tech-shadow'
              }`}
            >
              <div className="aspect-video overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end p-4">
                <div className="text-left">
                  <h4 className="text-sm font-semibold text-foreground">{project.title}</h4>
                  <p className="text-xs text-muted-foreground">{project.category}</p>
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
                    <h3 className="text-2xl font-bold text-foreground mb-2">{selectedModal.title}</h3>
                    <p className="text-accent font-medium">{selectedModal.subtitle}</p>
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
                      className="w-full h-64 object-cover rounded-lg mb-6"
                    />
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Project Links:</h4>
                        <div className="flex gap-3">
                          <Button
                            variant="default"
                            size="sm"
                            onClick={() => window.open(selectedModal.liveUrl, '_blank')}
                            iconName="ExternalLink"
                            iconPosition="right"
                          >
                            Live Demo
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => window.open(selectedModal.githubUrl, '_blank')}
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
                      <h4 className="font-semibold text-foreground mb-3">Project Overview:</h4>
                      <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                        {selectedModal.longDescription}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Technologies:</h4>
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

                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Project Metrics:</h4>
                      <div className="grid grid-cols-2 gap-3">
                        {Object.entries(selectedModal.metrics).map(([key, value]) => (
                          <div key={key} className="bg-muted/20 rounded-lg p-3 text-center">
                            <div className="text-lg font-bold text-foreground">{value}</div>
                            <div className="text-xs text-muted-foreground capitalize">{key}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-muted/20 rounded-lg p-4">
                      <h4 className="font-semibold text-foreground mb-3">Client Testimonial:</h4>
                      <blockquote className="text-muted-foreground italic mb-3">
                        "{selectedModal.testimonial.text}"
                      </blockquote>
                      <div className="text-sm">
                        <div className="font-medium text-foreground">{selectedModal.testimonial.author}</div>
                        <div className="text-muted-foreground">{selectedModal.testimonial.role}</div>
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