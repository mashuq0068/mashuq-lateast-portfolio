import React, { useState, useEffect, useRef } from 'react';
import Icon from '../../../components/AppIcon';

const DeveloperJourney = () => {
  const [visibleMilestones, setVisibleMilestones] = useState(new Set());
  const [expandedMilestone, setExpandedMilestone] = useState(null);
  const sectionRef = useRef(null);

 const milestones = [
  // Learning Journey
  {
    id: 1,
    year: '2022',
    title: 'Learning Journey Begins',
    subtitle: 'Buying Courses & Self-Study',
    description: 'Started learning web development through online courses, tutorials, and hands-on projects.',
    achievements: [
      'Completed multiple online courses',
      'Built first web projects with HTML, CSS, and JS',
      'Learned Git and version control',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'Git'],
    icon: 'BookOpen',
    color: 'text-blue-400'
  },
  // Professional Experience
  {
    id: 2,
    year: '01/01/2024 – 31/04/2024',
    title: 'Frontend Developer - TS4U (USA)',
    subtitle: 'Learning & Collaboration',
    description: 'Built LMS platform modules with JavaScript, React.js, Node.js. Optimized components, improved UX, integrated APIs.',
    achievements: [
      'Built interactive modules',
      'Optimized performance',
      'Collaborated with backend team',
      'Improved cross-browser compatibility'
    ],
    technologies: ['JavaScript', 'React.js', 'Node.js'],
    icon: 'Monitor',
    color: 'text-purple-400'
  },
  {
    id: 3,
    year: '01/07/2024 – 01/08/2025',
    title: 'Frontend Developer - Code Prophet (Bangladesh)',
    subtitle: 'Dynamic Management Systems',
    description: 'Developed responsive web apps for universities and hospitals using React, Node.js, Bootstrap. Implemented dashboards & reusable UI components.',
    achievements: [
      'Delivered multiple client projects',
      'Built interactive dashboards',
      'Reused UI components across projects',
      'Ensured responsive design'
    ],
    technologies: ['React.js', 'Node.js', 'Bootstrap'],
    icon: 'Monitor',
    color: 'text-green-400'
  },
  {
    id: 4,
    year: '01/08/2024 – Present',
    title: 'Full-stack Developer - Alfastack Solution (India)',
    subtitle: 'ERP & AI/ML Solutions',
    description: 'Worked on ERP applications, websites, and AI/ML-driven solutions. Developed computer vision modules, automated workflows, and backend integrations.',
    achievements: [
      'Built scalable full-stack applications',
      'Optimized database performance',
      'Integrated backend services with Node.js & Frappe',
      'Automated workflows for enterprise clients'
    ],
    technologies: ['React.js', 'Node.js', 'Frappe', 'PostgreSQL', 'AI/ML'],
    icon: 'Server',
    color: 'text-blue-400'
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
    <section id="experience" ref={sectionRef} className="py-20 bg-gradient-to-b from-background to-muted/10">
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
        {/* <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6">
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
        </div> */}
      </div>
    </section>
  );
};

export default DeveloperJourney;