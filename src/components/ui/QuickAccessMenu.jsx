import React, { useState, useEffect } from 'react';
import Icon from '../AppIcon';
import Button from './Button';

const QuickAccessMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    {
      id: 'about',
      label: 'About Me',
      description: 'Developer intro & value proposition',
      estimatedTime: '30 sec',
      icon: 'User',
      href: '#about'
    },
    {
      id: 'skills',
      label: 'Technical Skills',
      description: 'Tech stack & proficiency levels',
      estimatedTime: '45 sec',
      icon: 'Code',
      href: '#skills'
    },
    {
      id: 'projects',
      label: 'Portfolio',
      description: 'Live demos & case studies',
      estimatedTime: '2 min',
      icon: 'Folder',
      href: '#projects'
    },
    {
      id: 'experience',
      label: 'Experience',
      description: 'Professional journey & credentials',
      estimatedTime: '1 min',
      icon: 'Briefcase',
      href: '#experience'
    },
    {
      id: 'contact',
      label: 'Get In Touch',
      description: 'Contact form & consultation booking',
      estimatedTime: '1 min',
      icon: 'MessageCircle',
      href: '#contact'
    }
  ];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.key === 'k') {
        e.preventDefault();
        setIsOpen(!isOpen);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/assets/resume/mashuq-resume.pdf';
    link.download = 'Mashuq-Resume.pdf';
    link.click();
    setIsOpen(false);
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="hidden lg:block fixed top-20 right-8 z-90 p-2 bg-card border border-border rounded-lg tech-shadow hover:bg-muted/50 nav-transition"
        title="Quick Access Menu (Ctrl+K)"
      >
        <Icon name="Search" size={20} className="text-muted-foreground" />
      </button>
    );
  }

  return (
    <div className="fixed inset-0 z-200 bg-background/80 backdrop-blur-sm flex items-start justify-center pt-20 p-4">
      <div className="bg-card border border-border rounded-lg w-full max-w-2xl tech-shadow animate-fade-in">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <div>
            <h3 className="text-lg font-semibold text-foreground">Quick Access</h3>
            <p className="text-sm text-muted-foreground">Navigate to any section instantly</p>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-muted-foreground hover:text-foreground nav-transition"
          >
            <Icon name="X" size={20} />
          </button>
        </div>

        {/* Menu Items */}
        <div className="p-4 space-y-2 max-h-96 overflow-y-auto">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.href)}
              className="w-full flex items-center space-x-4 p-3 rounded-lg hover:bg-muted/50 nav-transition text-left group"
            >
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 nav-transition">
                <Icon name={item.icon} size={20} className="text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium text-foreground">{item.label}</h4>
                  <span className="text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded">
                    {item.estimatedTime}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
              <Icon name="ArrowRight" size={16} className="text-muted-foreground group-hover:text-foreground nav-transition" />
            </button>
          ))}
        </div>

        {/* Footer Actions */}
        <div className="p-4 border-t border-border">
          <div className="flex space-x-3">
            <Button
              variant="outline"
              size="sm"
              onClick={handleResumeDownload}
              iconName="Download"
              iconPosition="left"
              className="flex-1"
            >
              Download Resume
            </Button>
            <Button
              variant="default"
              size="sm"
              onClick={() => scrollToSection('#contact')}
              iconName="Calendar"
              iconPosition="left"
              className="flex-1"
            >
              Book Consultation
            </Button>
          </div>
          <p className="text-xs text-muted-foreground text-center mt-3">
            Press <kbd className="px-1 py-0.5 bg-muted rounded text-xs">Ctrl+K</kbd> to open this menu anytime
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuickAccessMenu;