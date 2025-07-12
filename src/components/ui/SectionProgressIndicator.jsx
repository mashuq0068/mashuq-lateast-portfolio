import React, { useState, useEffect } from 'react';

const SectionProgressIndicator = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [scrollProgress, setScrollProgress] = useState(0);

  const sections = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollProgress(scrollPercent);

      const sectionElements = sections.map(section => document.getElementById(section.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Desktop Progress Bar */}
      <div className="hidden lg:block fixed top-16 left-0 right-0 z-90 h-1 bg-muted/20">
        <div 
          className="h-full bg-accent nav-transition"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Mobile Dot Navigation */}
      <div className="lg:hidden fixed right-4 top-1/2 transform -translate-y-1/2 z-90 flex flex-col space-y-3">
        {sections.map((section, index) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className={`w-3 h-3 rounded-full nav-transition ${
              activeSection === section.id
                ? 'bg-accent scale-125' :'bg-muted-foreground/40 hover:bg-muted-foreground/60'
            }`}
            aria-label={`Go to ${section.label} section`}
          />
        ))}
      </div>

      {/* Desktop Side Navigation */}
      <div className="hidden xl:block fixed left-8 top-1/2 transform -translate-y-1/2 z-90">
        <nav className="flex flex-col space-y-6">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`group flex items-center space-x-3 nav-transition ${
                activeSection === section.id ? 'text-accent' : 'text-muted-foreground'
              }`}
            >
              <div className={`w-2 h-2 rounded-full nav-transition ${
                activeSection === section.id 
                  ? 'bg-accent scale-125' :'bg-muted-foreground/40 group-hover:bg-muted-foreground/60'
              }`} />
              <span className={`text-sm font-medium opacity-0 group-hover:opacity-100 nav-transition ${
                activeSection === section.id ? 'opacity-100' : ''
              }`}>
                {section.label}
              </span>
            </button>
          ))}
        </nav>
      </div>
    </>
  );
};

export default SectionProgressIndicator;