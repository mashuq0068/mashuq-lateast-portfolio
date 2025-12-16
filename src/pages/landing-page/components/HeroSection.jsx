import React, { useState, useEffect } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import { handleResumeDownload } from 'utils/handleResumeDownload';
import { handleBookConsultation } from 'utils/handleBookConsultation';

const HeroSection = () => {
  const [typewriterText, setTypewriterText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [availabilityStatus, setAvailabilityStatus] = useState('Available');

  const phrases = [
    'Full-Stack Developer Who Turns Ideas Into Reality',
    'React & Next.js Expert Building Modern Web Apps',
    'PostgreSQL & Node.js Specialist Creating Scalable Solutions'
  ];

  useEffect(() => {
    const currentPhrase = phrases[currentIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (typewriterText.length < currentPhrase.length) {
          setTypewriterText(currentPhrase.slice(0, typewriterText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (typewriterText.length > 0) {
          setTypewriterText(typewriterText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [typewriterText, currentIndex, isDeleting]);




  const githubContributions = [
    { day: 'Mon', commits: 3 },
    { day: 'Tue', commits: 7 },
    { day: 'Wed', commits: 2 },
    { day: 'Thu', commits: 5 },
    { day: 'Fri', commits: 8 },
    { day: 'Sat', commits: 1 },
    { day: 'Sun', commits: 4 }
  ];

  return (
    <section id="hero" className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 flex items-center justify-center px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                <span className="text-sm text-success font-medium">{availabilityStatus} for new projects</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Hi, I'm{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Mashuq
                </span>
              </h1>
              
              <div className="h-20 lg:h-24">
                <h2 className="text-xl lg:text-2xl text-muted-foreground font-medium">
                  {typewriterText}
                  <span className="animate-pulse">|</span>
                </h2>
              </div>
              
              <p className="text-lg text-muted-foreground max-w-xl">
                Crafting complete solutions with Next.js, React, Node js, PostgreSQL, MongoDB. From self-taught foundations to professional success. 
                Transforming startup ideas into scalable web applications.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="default"
                size="lg"
                onClick={handleResumeDownload}
                iconName="Download"
                iconPosition="left"
                className="tech-shadow"
              >
                Download Resume
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={handleBookConsultation}
                iconName="Calendar"
                iconPosition="left"
              >
                Book Consultation
              </Button>
            </div>

            {/* GitHub Contributions */}
            <div className="bg-card border border-border rounded-lg p-6 tech-shadow">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-foreground">GitHub Activity</h3>
                <div className="flex items-center space-x-2">
                  <Icon name="Github" size={16} className="text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">Last 7 days</span>
                </div>
              </div>
              <div className="flex items-end space-x-2">
                {githubContributions.map((day, index) => (
                  <div key={index} className="flex flex-col items-center space-y-2">
                    <div 
                      className="w-6 bg-primary/20 rounded-sm transition-all duration-300 hover:bg-primary/40"
                      style={{ height: `${Math.max(day.commits * 4, 8)}px` }}
                      title={`${day.day}: ${day.commits} commits`}
                    ></div>
                    <span className="text-xs text-muted-foreground">{day.day.charAt(0)}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-xs text-muted-foreground">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">2+</div>
                <div className="text-xs text-muted-foreground">Years Exp</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-success">100%</div>
                <div className="text-xs text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/20 tech-shadow">
                <Image
                  src="/assets/images/no_image.png"
                  alt="Mashuq - Full Stack Developer"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating Tech Icons */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-card border border-border rounded-full flex items-center justify-center tech-shadow animate-bounce">
                <Icon name="Code" size={24} className="text-primary" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-card border border-border rounded-full flex items-center justify-center tech-shadow animate-bounce" style={{ animationDelay: '0.5s' }}>
                <Icon name="Database" size={24} className="text-accent" />
              </div>
              <div className="absolute top-1/2 -left-8 w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center tech-shadow animate-bounce" style={{ animationDelay: '1s' }}>
                <Icon name="Zap" size={20} className="text-success" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-16">
          <div className="flex flex-col items-center space-y-2 animate-bounce">
            <span className="text-xs text-muted-foreground">Scroll to explore</span>
            <Icon name="ChevronDown" size={20} className="text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;