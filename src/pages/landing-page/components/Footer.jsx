import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      icon: 'Github',
      url: 'https://github.com/mashuq',
      description: 'View my code repositories'
    },
    {
      name: 'LinkedIn',
      icon: 'Linkedin',
      url: 'https://linkedin.com/in/mashuq-rahman',
      description: 'Connect professionally'
    },
    {
      name: 'Twitter',
      icon: 'Twitter',
      url: 'https://twitter.com/mashuq_dev',
      description: 'Follow for tech updates'
    },
    {
      name: 'Email',
      icon: 'Mail',
      url: 'mailto:mashuq.dev@email.com',
      description: 'Send me an email'
    }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#journey' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'Web Application Development',
    'E-commerce Solutions',
    'API Development',
    'Database Design',
    'Performance Optimization',
    'Technical Consultation'
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleResumeDownload = () => {
    const link = document.createElement('a');
       // link.href = '/assets/resume/mashuq-resume.pdf';
    // link.download = 'Mashuq-Resume.pdf';
    link.click();
  };

  return (
    <footer className="bg-gradient-to-b from-background to-muted/20 border-t border-border">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-xl font-mono">M</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Mashuq</h3>
                <p className="text-sm text-muted-foreground">Full-Stack Developer</p>
              </div>
            </div>
            
            <p className="text-muted-foreground leading-relaxed">
              Transforming ideas into reality through modern web technologies. 
              Specializing in React, Next.js, and full-stack development solutions.
            </p>

            {/* Availability Status */}
            <div className="bg-card border border-border rounded-lg p-4">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                <span className="font-semibold text-foreground">Available for Projects</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Currently accepting 2 new projects for Q1 2025
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <nav className="space-y-3">
              {quickLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-muted-foreground hover:text-accent transition-colors text-left"
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-foreground">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <Icon name="CheckCircle" size={16} className="text-success mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-foreground">Get In Touch</h4>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Icon name="Mail" size={16} className="text-muted-foreground" />
                <span className="text-sm text-muted-foreground">mashuq.dev@email.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="MapPin" size={16} className="text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Dhaka, Bangladesh</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Clock" size={16} className="text-muted-foreground" />
                <span className="text-sm text-muted-foreground">GMT+6 (Available 9AM-6PM)</span>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h5 className="font-medium text-foreground mb-3">Follow Me</h5>
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-muted/50 hover:bg-primary rounded-lg flex items-center justify-center transition-colors group"
                    title={social.description}
                  >
                    <Icon 
                      name={social.icon} 
                      size={18} 
                      className="text-muted-foreground group-hover:text-black transition-colors" 
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-3">
              <Button
                variant="default"
                size="sm"
                onClick={() => scrollToSection('#contact')}
                iconName="MessageCircle"
                iconPosition="left"
                fullWidth
              >
                Start a Project
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleResumeDownload}
                iconName="Download"
                iconPosition="left"
                fullWidth
              >
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border bg-muted/10">
        <div className="container mx-auto px-4 py-6 max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © {currentYear} Mashuq Rahman. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <button 
                onClick={() => scrollToSection('#about')}
                className="hover:text-foreground transition-colors"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => scrollToSection('#contact')}
                className="hover:text-foreground transition-colors"
              >
                Terms of Service
              </button>
              <div className="flex items-center space-x-2">
                <span>Built with</span>
                <Icon name="Heart" size={14} className="text-red-400" />
                <span>using React & Tailwind CSS</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 left-8 w-12 h-12 bg-primary text-black rounded-full flex items-center justify-center tech-shadow hover:bg-primary/90 transition-colors z-50"
        title="Back to top"
      >
        <Icon name="ArrowUp" size={20} />
      </button>
    </footer>
  );
};

export default Footer;