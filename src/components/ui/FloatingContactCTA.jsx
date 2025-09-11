import React, { useState, useEffect } from 'react';
import Button from './Button';
import Icon from '../AppIcon';

const FloatingContactCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isContactSectionVisible, setIsContactSectionVisible] = useState(false);
  const [showExitIntent, setShowExitIntent] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 500;
      setIsVisible(scrolled);

      const contactSection = document.getElementById('contact');
      if (contactSection) {
        const rect = contactSection.getBoundingClientRect();
        const isInView = rect.top <= window.innerHeight && rect.bottom >= 0;
        setIsContactSectionVisible(isInView);
      }
    };

    const handleMouseLeave = (e) => {
      if (e.clientY <= 0) {
        setShowExitIntent(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
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

  const closeExitIntent = () => {
    setShowExitIntent(false);
  };

  if (!isVisible || isContactSectionVisible) return null;

  return (
    <>
      {/* Desktop Floating CTA */}
      <div className="hidden lg:block fixed bottom-8 right-8 z-90">
        <div className="flex flex-col space-y-3">
          <Button
            variant="default"
            size="lg"
            onClick={scrollToContact}
            iconName="MessageCircle"
            iconPosition="left"
            className="tech-shadow animate-pulse"
          >
            Book Call
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={handleResumeDownload}
            iconName="Download"
            iconPosition="left"
            className="tech-shadow"
          >
            Resume
          </Button>
        </div>
      </div>

      {/* Mobile Sticky Bottom Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-90 bg-card border-t border-border p-4">
        <div className="flex space-x-3">
          <Button
            variant="outline"
            size="sm"
            onClick={handleResumeDownload}
            iconName="Download"
            iconPosition="left"
            className="flex-1"
          >
            Resume
          </Button>
          <Button
            variant="default"
            size="sm"
            onClick={scrollToContact}
            iconName="Calendar"
            iconPosition="left"
            className="flex-1"
          >
            Book Call
          </Button>
        </div>
      </div>

      {/* Exit Intent Modal */}
      {showExitIntent && (
        <div className="fixed inset-0 z-200 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-card border border-border rounded-lg p-6 max-w-md w-full tech-shadow animate-fade-in">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Wait! Don't miss out
                </h3>
                <p className="text-muted-foreground text-sm">
                  Get a free 15-minute technical consultation to discuss your project needs.
                </p>
              </div>
              <button
                onClick={closeExitIntent}
                className="text-muted-foreground hover:text-foreground nav-transition"
              >
                <Icon name="X" size={20} />
              </button>
            </div>
            
            <div className="space-y-3">
              <Button
                variant="default"
                fullWidth
                onClick={() => {
                  scrollToContact();
                  closeExitIntent();
                }}
                iconName="Calendar"
                iconPosition="left"
              >
                Book Free Consultation
              </Button>
              <Button
                variant="outline"
                fullWidth
                onClick={() => {
                  handleResumeDownload();
                  closeExitIntent();
                }}
                iconName="Download"
                iconPosition="left"
              >
                Download Resume Instead
              </Button>
            </div>
            
            <p className="text-xs text-muted-foreground text-center mt-4">
              Currently accepting 2 new projects for Q1 2025
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingContactCTA;