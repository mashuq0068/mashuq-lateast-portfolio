import React, { useState, useEffect, useRef } from 'react';
import Icon from '../../../components/AppIcon';

const DeveloperJourney = () => {
  const [visibleMilestones, setVisibleMilestones] = useState(new Set());
  const [expandedMilestone, setExpandedMilestone] = useState(null);
  const sectionRef = useRef(null);

  const milestones = [
    {
      id: 1,
      year: '2022',
      title: 'Self-Taught Journey Begins',
      subtitle: 'From Zero to Hero',
      description: 'Started learning web development through online resources, building first projects with HTML, CSS, and JavaScript.',
      achievements: [
        'Completed 500+ hours of coding practice',
        'Built 10+ personal projects',
        'Mastered JavaScript fundamentals',
        'Created responsive web designs'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'Git'],
      icon: 'BookOpen',
      color: 'text-blue-400'
    },
    {
      id: 2,
      year: '2023',
      title: 'React & Modern Stack',
      subtitle: 'Framework Mastery',
      description: 'Dove deep into React ecosystem, learning modern development practices and building complex applications.',
      achievements: [
        'Mastered React hooks and state management',
        'Built full-stack applications',
        'Learned Node.js and Express',
        'Implemented database integration'
      ],
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL'],
      icon: 'Code',
      color: 'text-cyan-400'
    },
    {
      id: 3,
      year: '2023',
      title: 'Programming Hero Certification',
      subtitle: 'Formal Recognition',
      description: 'Completed comprehensive web development course, earning certification in full-stack development.',
      achievements: [
        'Graduated with distinction',
        'Built capstone project',
        'Mentored junior developers',
        'Received industry recognition'
      ],
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Firebase'],
      icon: 'Award',
      color: 'text-yellow-400'
    },
    {
      id: 4,
      year: '2024',
      title: 'Code Prophet - Developer',
      subtitle: 'First Professional Role',
      description: 'Joined Code Prophet as a full-stack developer, working on client projects and internal tools.',
      achievements: [
        'Delivered 5+ client projects',
        'Improved application performance by 40%',
        'Led junior developer training',
        'Implemented CI/CD pipelines'
      ],
      technologies: ['React', 'Next.js', 'PostgreSQL', 'AWS', 'Docker'],
      icon: 'Briefcase',
      color: 'text-green-400'
    },
    {
      id: 5,
      year: '2024',
      title: 'TS4U - Senior Developer',
      subtitle: 'Leadership & Growth',
      description: 'Advanced to senior role at TS4U, leading development teams and architecting scalable solutions.',
      achievements: [
        'Led team of 4 developers',
        'Architected microservices platform',
        'Reduced deployment time by 60%',
        'Mentored 10+ junior developers'
      ],
      technologies: ['React', 'Node.js', 'Kubernetes', 'GraphQL', 'Redis'],
      icon: 'Users',
      color: 'text-purple-400'
    },
    {
      id: 6,
      year: '2025',
      title: 'Freelance & Consulting',
      subtitle: 'Independent Success',
      description: 'Launched independent consulting practice, helping startups and enterprises build modern web applications.',
      achievements: [
        'Serving 3+ enterprise clients',
        'Building scalable SaaS platforms',
        'Consulting on tech architecture',
        'Growing development team'
      ],
      technologies: ['Next.js', 'Supabase', 'Vercel', 'Stripe', 'OpenAI'],
      icon: 'Rocket',
      color: 'text-orange-400'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const milestoneId = parseInt(entry.target.dataset.milestoneId);
            setVisibleMilestones(prev => new Set([...prev, milestoneId]));
          }
        });
      },
      { threshold: 0.3 }
    );

    const milestoneElements = document.querySelectorAll('[data-milestone-id]');
    milestoneElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const toggleExpanded = (milestoneId) => {
    setExpandedMilestone(expandedMilestone === milestoneId ? null : milestoneId);
  };

  return (
    <section id="journey" ref={sectionRef} className="py-20 bg-gradient-to-b from-background to-muted/10">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            My Developer Journey
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From self-taught beginnings to professional success - a timeline of growth, learning, and achievement in web development.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 lg:left-1/2 lg:transform lg:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-success"></div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.id}
                data-milestone-id={milestone.id}
                className={`relative flex items-start ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } ${
                  visibleMilestones.has(milestone.id) 
                    ? 'animate-fade-in opacity-100' :'opacity-0'
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-4 lg:left-1/2 lg:transform lg:-translate-x-1/2 w-8 h-8 bg-card border-4 border-primary rounded-full flex items-center justify-center z-10">
                  <Icon name={milestone.icon} size={16} className={milestone.color} />
                </div>

                {/* Content Card */}
                <div className={`ml-16 lg:ml-0 lg:w-5/12 ${
                  index % 2 === 0 ? 'lg:mr-auto lg:pr-8' : 'lg:ml-auto lg:pl-8'
                }`}>
                  <div className="bg-card border border-border rounded-lg p-6 tech-shadow hover:tech-shadow-lg transition-all duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <span className="text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                          {milestone.year}
                        </span>
                        <div className={`w-2 h-2 rounded-full ${milestone.color.replace('text-', 'bg-')}`}></div>
                      </div>
                      <button
                        onClick={() => toggleExpanded(milestone.id)}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Icon 
                          name={expandedMilestone === milestone.id ? "ChevronUp" : "ChevronDown"} 
                          size={20} 
                        />
                      </button>
                    </div>

                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-sm text-accent font-medium mb-3">
                      {milestone.subtitle}
                    </p>
                    <p className="text-muted-foreground mb-4">
                      {milestone.description}
                    </p>

                    {/* Technology Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {milestone.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="text-xs bg-muted/50 text-muted-foreground px-2 py-1 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Expanded Content */}
                    {expandedMilestone === milestone.id && (
                      <div className="border-t border-border pt-4 animate-fade-in">
                        <h4 className="text-sm font-semibold text-foreground mb-3">
                          Key Achievements:
                        </h4>
                        <ul className="space-y-2">
                          {milestone.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start space-x-2">
                              <Icon name="CheckCircle" size={16} className="text-success mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Journey Stats */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center bg-card border border-border rounded-lg p-6 tech-shadow">
            <div className="text-2xl font-bold text-primary mb-2">3+</div>
            <div className="text-sm text-muted-foreground">Years Learning</div>
          </div>
          <div className="text-center bg-card border border-border rounded-lg p-6 tech-shadow">
            <div className="text-2xl font-bold text-accent mb-2">2</div>
            <div className="text-sm text-muted-foreground">Companies</div>
          </div>
          <div className="text-center bg-card border border-border rounded-lg p-6 tech-shadow">
            <div className="text-2xl font-bold text-success mb-2">20+</div>
            <div className="text-sm text-muted-foreground">Projects</div>
          </div>
          <div className="text-center bg-card border border-border rounded-lg p-6 tech-shadow">
            <div className="text-2xl font-bold text-warning mb-2">15+</div>
            <div className="text-sm text-muted-foreground">Technologies</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeveloperJourney;