import React, { useEffect } from 'react';
import Header from '../../components/ui/Header';
import SectionProgressIndicator from '../../components/ui/SectionProgressIndicator';
import FloatingContactCTA from '../../components/ui/FloatingContactCTA';
import QuickAccessMenu from '../../components/ui/QuickAccessMenu';
import HeroSection from './components/HeroSection';
import DeveloperJourney from './components/DeveloperJourney';
import SkillsShowcase from './components/SkillsShowcase';
import FeaturedProjects from './components/FeaturedProjects';
import AboutSection from './components/AboutSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const LandingPage = () => {
  useEffect(() => {
    // Set page title
    document.title = 'Mashuq Rahman - Full-Stack Developer | React, Next.js & Node.js Expert';
    
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Experienced full-stack developer specializing in React, Next.js, and Node.js. Transforming ideas into scalable web applications with modern technologies and best practices.'
      );
    }

    // Add structured data for SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Mashuq Rahman",
      "jobTitle": "Full-Stack Developer",
      "description": "Experienced full-stack developer specializing in React, Next.js, Node.js, and PostgreSQL",
      "url": window.location.origin,
      "sameAs": [
        "https://github.com/mashuq0068",
        "https://linkedin.com/in/md-mashuqur-rahman-3aaab8260/",
      ],
      "knowsAbout": [
        "React",
        "Next.js",
        "Node.js",
        "PostgreSQL",
        "JavaScript",
        "TypeScript",
        "Web Development",
        "Full-Stack Development"
      ],
      "alumniOf": "Programming Hero",
      "worksFor": [
        {
          "@type": "Organization",
          "name": "TS4U"
        },
        {
          "@type": "Organization", 
          "name": "Code Prophet"
        }
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    // Cleanup function
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <Header />
      
      {/* Progress Indicators */}
      <SectionProgressIndicator />
      
      {/* Quick Access Menu */}
      <QuickAccessMenu />
      
      {/* Main Content */}
      <main className="relative">
        {/* Hero Section */}
        <HeroSection />
        
        {/* About Section */}
        <AboutSection />
        
        {/* Skills Showcase */}
        <SkillsShowcase />
        
        {/* Featured Projects */}
        <FeaturedProjects />
        
        {/* Developer Journey */}
        <DeveloperJourney />
        
        {/* Testimonials */}
        <TestimonialsSection />
        
        {/* Contact Section */}
        <ContactSection />
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Floating CTAs */}
      <FloatingContactCTA />
    </div>
  );
};

export default LandingPage;