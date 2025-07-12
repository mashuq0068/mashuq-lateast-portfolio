import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CTO',
      company: 'TechStart Solutions',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      text: `Mashuq delivered exceptional work on our e-commerce platform. His attention to detail and ability to understand complex requirements made the entire development process smooth. The final product exceeded our expectations and has significantly improved our conversion rates.`,
      project: 'E-commerce Platform',
      metrics: {
        timeline: 'Delivered 2 weeks early',
        performance: '40% faster load times',
        result: '300% increase in sales'
      }
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Product Manager',
      company: 'InnovateLab',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      text: `Working with Mashuq was a game-changer for our startup. He not only built our MVP but also provided valuable insights on user experience and scalability. His proactive communication and technical expertise made him feel like part of our team.`,
      project: 'SaaS MVP Development',
      metrics: {
        timeline: 'On-time delivery',
        quality: 'Zero critical bugs',
        result: 'Successful funding round'
      }
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Founder',
      company: 'GreenTech Innovations',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      text: `Mashuq transformed our outdated website into a modern, responsive platform that truly represents our brand. His understanding of both technical requirements and business goals is remarkable. I highly recommend him for any web development project.`,
      project: 'Corporate Website Redesign',
      metrics: {
        timeline: 'Completed ahead of schedule',
        performance: '60% improvement in speed',
        result: '150% increase in leads'
      }
    },
    {
      id: 4,
      name: 'David Park',
      role: 'Operations Director',
      company: 'LogiFlow Systems',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      text: `The project management dashboard Mashuq built for us has revolutionized how we handle our operations. His ability to translate complex business processes into intuitive software solutions is outstanding. Excellent communication throughout the project.`,
      project: 'Project Management System',
      metrics: {
        timeline: 'Delivered on schedule',
        efficiency: '50% reduction in manual work',
        result: 'Team productivity up 75%'
      }
    },
    {
      id: 5,
      name: 'Lisa Thompson',
      role: 'Marketing Director',
      company: 'CreativeHub Agency',
      avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      text: `Mashuq's expertise in React and modern web technologies helped us create a portfolio platform that showcases our work beautifully. His attention to performance optimization and user experience details made all the difference in the final product.`,
      project: 'Portfolio Platform',
      metrics: {
        timeline: 'Early delivery',
        performance: 'Perfect Lighthouse scores',result: '200% increase in client inquiries'
      }
    }
  ];

  const companyLogos = [
    { name: 'TechStart Solutions', logo: 'Building' },
    { name: 'InnovateLab', logo: 'Lightbulb' },
    { name: 'GreenTech Innovations', logo: 'Leaf' },
    { name: 'LogiFlow Systems', logo: 'Workflow' },
    { name: 'CreativeHub Agency', logo: 'Palette' }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Icon
        key={index}
        name="Star"
        size={16}
        className={index < rating ? 'text-yellow-400 fill-current' : 'text-muted-foreground'}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-muted/10 to-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            What Clients Say About My Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real feedback from real clients who trusted me with their projects. See how I've helped businesses achieve their goals through quality development.
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="relative mb-12">
          <div className="bg-card border border-border rounded-lg p-8 lg:p-12 tech-shadow">
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              {/* Testimonial Content */}
              <div className="lg:col-span-2 space-y-6">
                <div className="flex items-center space-x-2 mb-4">
                  {renderStars(testimonials[activeTestimonial].rating)}
                  <span className="text-sm text-muted-foreground ml-2">
                    {testimonials[activeTestimonial].rating}.0/5
                  </span>
                </div>

                <blockquote className="text-lg lg:text-xl text-foreground leading-relaxed">
                  "{testimonials[activeTestimonial].text}"
                </blockquote>

                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary/20">
                    <Image
                      src={testimonials[activeTestimonial].avatar}
                      alt={testimonials[activeTestimonial].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground">
                      {testimonials[activeTestimonial].name}
                    </h4>
                    <p className="text-accent font-medium">
                      {testimonials[activeTestimonial].role}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonials[activeTestimonial].company}
                    </p>
                  </div>
                </div>

                <div className="bg-muted/20 rounded-lg p-4">
                  <h5 className="font-semibold text-foreground mb-2">
                    Project: {testimonials[activeTestimonial].project}
                  </h5>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
                    {Object.entries(testimonials[activeTestimonial].metrics).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="font-medium text-foreground">{value}</div>
                        <div className="text-muted-foreground capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Navigation & Controls */}
              <div className="space-y-6">
                <div className="flex justify-center lg:justify-start space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setActiveTestimonial(index);
                        setIsAutoPlaying(false);
                      }}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === activeTestimonial
                          ? 'bg-primary scale-125' :'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                      }`}
                    />
                  ))}
                </div>

                <div className="flex justify-center lg:justify-start space-x-3">
                  <button
                    onClick={() => {
                      setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
                      setIsAutoPlaying(false);
                    }}
                    className="w-10 h-10 bg-muted/50 hover:bg-muted rounded-full flex items-center justify-center transition-colors"
                  >
                    <Icon name="ChevronLeft" size={20} className="text-foreground" />
                  </button>
                  <button
                    onClick={() => {
                      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
                      setIsAutoPlaying(false);
                    }}
                    className="w-10 h-10 bg-muted/50 hover:bg-muted rounded-full flex items-center justify-center transition-colors"
                  >
                    <Icon name="ChevronRight" size={20} className="text-foreground" />
                  </button>
                </div>

                <button
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground transition-colors mx-auto lg:mx-0"
                >
                  <Icon name={isAutoPlaying ? "Pause" : "Play"} size={16} />
                  <span>{isAutoPlaying ? 'Pause' : 'Play'} Auto-rotation</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Company Logos */}
        <div className="mb-12">
          <h3 className="text-center text-lg font-semibold text-foreground mb-8">
            Trusted by Companies Worldwide
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
            {companyLogos.map((company, index) => (
              <div key={index} className="flex items-center space-x-3 opacity-60 hover:opacity-100 transition-opacity">
                <div className="w-8 h-8 bg-muted/50 rounded-lg flex items-center justify-center">
                  <Icon name={company.logo} size={20} className="text-muted-foreground" />
                </div>
                <span className="text-sm font-medium text-muted-foreground">
                  {company.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Summary */}
        <div className="bg-card border border-border rounded-lg p-8 tech-shadow">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">4.9</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-success mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Project Success</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-warning mb-2">24hr</div>
              <div className="text-sm text-muted-foreground">Response Time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;