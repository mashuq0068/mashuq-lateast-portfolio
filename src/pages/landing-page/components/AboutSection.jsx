import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const AboutSection = () => {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const [activeTab, setActiveTab] = useState('overview');

  const developerTraits = [
    {
      id: 1,
      title: 'Problem Solver',
      description: 'I thrive on breaking down complex challenges into manageable solutions, using analytical thinking and creative approaches.',
      icon: 'Lightbulb',
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-400/10'
    },
    {
      id: 2,
      title: 'Continuous Learner',
      description: 'Technology evolves rapidly, and I stay ahead by constantly learning new frameworks, tools, and best practices.',
      icon: 'BookOpen',
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/10'
    },
    {
      id: 3,
      title: 'Team Collaborator',
      description: 'I believe great software is built by great teams. I excel in collaborative environments and mentoring others.',
      icon: 'Users',
      color: 'text-green-400',
      bgColor: 'bg-green-400/10'
    },
    {
      id: 4,
      title: 'Quality Focused',
      description: 'Clean, maintainable code is my priority. I write code that not only works but is also scalable and readable.',
      icon: 'Shield',
      color: 'text-purple-400',
      bgColor: 'bg-purple-400/10'
    },
    {
      id: 5,
      title: 'User-Centric',
      description: 'Every line of code I write considers the end user experience, ensuring applications are intuitive and accessible.',
      icon: 'Heart',
      color: 'text-red-400',
      bgColor: 'bg-red-400/10'
    },
    {
      id: 6,
      title: 'Innovation Driver',
      description: 'I love exploring new technologies and implementing innovative solutions that push boundaries and create value.',
      icon: 'Rocket',
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-400/10'
    }
  ];

  const tabContent = {
    overview: {
      title: 'Developer Overview',
      content: `I'm a passionate full-stack developer who transforms ideas into reality through modern web technologies. My journey from self-taught enthusiast to professional developer has been driven by curiosity, dedication, and a love for creating meaningful digital experiences.\n\nWith expertise spanning React, Next.js, Node.js, and PostgreSQL, I build scalable applications that solve real-world problems. My approach combines technical excellence with user-centered design, ensuring every project delivers both functionality and exceptional user experience.\n\nI believe in writing clean, maintainable code and staying current with industry best practices. Whether working independently or as part of a team, I bring enthusiasm, reliability, and a commitment to delivering high-quality solutions.`
    },
    philosophy: {
      title: 'Development Philosophy',
      content: `My development philosophy centers on three core principles: simplicity, scalability, and sustainability.\n\nSimplicity means writing code that is easy to understand and maintain. I believe the best solutions are often the most elegant ones, avoiding unnecessary complexity while solving problems effectively.\n\nScalability ensures that applications can grow with user needs and business requirements. I design architectures that can handle increased load and feature expansion without major rewrites.\n\nSustainability focuses on long-term maintainability and team collaboration. I write documentation, follow coding standards, and create systems that other developers can easily understand and contribute to.\n\nThese principles guide every decision I make, from choosing the right technology stack to structuring code architecture.`
    },
    values: {
      title: 'Core Values',content: `Integrity is fundamental to my work. I believe in honest communication about project timelines, challenges, and capabilities. When I commit to a deadline or feature, I deliver on that promise.\n\nContinuous improvement drives my professional growth. I regularly invest time in learning new technologies, refining my skills, and staying updated with industry trends. This commitment ensures I can offer the most current and effective solutions.\n\nCollaboration enhances every project. I value diverse perspectives and believe the best results come from teams where everyone's input is heard and respected. I actively contribute to a positive, productive work environment.\n\nQuality over quantity guides my approach to development. I'd rather deliver fewer features that work perfectly than many features that are buggy or poorly implemented.`
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardId = parseInt(entry.target.dataset.cardId);
            setVisibleCards(prev => new Set([...prev, cardId]));
          }
        });
      },
      { threshold: 0.3 }
    );

    const cardElements = document.querySelectorAll('[data-card-id]');
    cardElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-muted/10 to-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get to know the developer behind the code - my journey, values, and what drives me to create exceptional web experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Personal Info */}
          <div className="space-y-8">
            <div className="bg-card border border-border rounded-lg p-8 tech-shadow">
              <div className="flex items-center space-x-6 mb-6">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-primary/20">
                  <Image
                    src="/assets/images/mashuq-official.jpeg"
                    alt="Mashuq - Full Stack Developer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Mashuq Rahman</h3>
                  <p className="text-accent font-medium mb-1">Full-Stack Developer</p>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                    <span className="text-sm text-success">Available for projects</span>
                  </div>
                </div>
              </div>

              {/* Quick Facts */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center bg-muted/20 rounded-lg p-4">
                  <Icon name="MapPin" size={20} className="text-primary mx-auto mb-2" />
                  <div className="text-sm font-medium text-foreground">Location</div>
                  <div className="text-xs text-muted-foreground">Khulna, Bangladesh</div>
                </div>
                <div className="text-center bg-muted/20 rounded-lg p-4">
                  <Icon name="Calendar" size={20} className="text-accent mx-auto mb-2" />
                  <div className="text-sm font-medium text-foreground">Experience</div>
                  <div className="text-xs text-muted-foreground">3+ Years</div>
                </div>
                <div className="text-center bg-muted/20 rounded-lg p-4">
                  <Icon name="Code" size={20} className="text-success mx-auto mb-2" />
                  <div className="text-sm font-medium text-foreground">Projects</div>
                  <div className="text-xs text-muted-foreground">20+ Completed</div>
                </div>
                <div className="text-center bg-muted/20 rounded-lg p-4">
                  <Icon name="Star" size={20} className="text-warning mx-auto mb-2" />
                  <div className="text-sm font-medium text-foreground">Rating</div>
                  <div className="text-xs text-muted-foreground">4.9/5 Average</div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" size={16} className="text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">mashuq.dev@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" size={16} className="text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">+880 1234 567890</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Globe" size={16} className="text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Available for remote work</span>
                </div>
              </div>
            </div>

            {/* Tab Navigation */}
            <div className="bg-card border border-border rounded-lg p-6 tech-shadow">
              <div className="flex space-x-1 mb-6 bg-muted/20 rounded-lg p-1">
                {Object.keys(tabContent).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-all duration-200 ${
                      activeTab === tab
                        ? 'bg-primary text-black tech-shadow'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-foreground">
                  {tabContent[activeTab].title}
                </h4>
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                  {tabContent[activeTab].content}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Developer Traits */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-8">What Makes Me Different</h3>
            
            {developerTraits.map((trait, index) => (
              <div
                key={trait.id}
                data-card-id={trait.id}
                className={`bg-card border border-border rounded-lg p-6 tech-shadow hover:tech-shadow-lg transition-all duration-300 ${
                  visibleCards.has(trait.id) 
                    ? 'animate-fade-in opacity-100' :'opacity-0'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 ${trait.bgColor} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <Icon name={trait.icon} size={24} className={trait.color} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      {trait.title}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {trait.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievement Stats */}
        {/* <div className="bg-card border border-border rounded-lg p-8 tech-shadow">
          <h3 className="text-xl font-bold text-foreground text-center mb-8">
            Professional Achievements
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Project Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">48hrs</div>
              <div className="text-sm text-muted-foreground">Avg Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-success mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-warning mb-2">2+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default AboutSection;