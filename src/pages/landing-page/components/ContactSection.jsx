import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';


const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: '',
    priority: 'normal'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errors, setErrors] = useState({});


const contactMethods = [
    {
      icon: 'Mail',
      title: 'Email',
      value: 'mashuq0068@gmail.com',
      description: 'Best for detailed project discussions',
      color: 'text-blue-400'
    },
    {
      icon: 'Phone',
      title: 'Phone(WhatsApp)',
      value: '+8801403972749',
      description: 'Available Mon-Fri, 9AM-6PM (GMT+6)',
      color: 'text-green-400'
    },
    {
     icon: 'Github', // fixed
      title: 'GitHub',
      value: 'github.com/mashuq0068',
      description: 'Check out my projects and repositories',
      color: 'text-gray-800',
      link: 'https://github.com/mashuq0068'
    },
    {
      icon: 'Linkedin',
      title: 'LinkedIn',
      value: 'linkedin.com/in/md-mashuqur-rahman-3aaab8260',
      description: 'Connect professionally on LinkedIn',
      color: 'text-blue-600',
      link: 'https://www.linkedin.com/in/md-mashuqur-rahman-3aaab8260/'
    }
  ];


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSelectChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.projectType) {
      newErrors.projectType = 'Please select a project type';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please describe your project';
    } else if (formData.message.trim().length < 20) {
      newErrors.message = 'Please provide more details (minimum 20 characters)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        projectType: '',
        budget: '',
        timeline: '',
        message: '',
        priority: 'normal'
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getResponseTime = () => {
    switch (formData.priority) {
      case 'urgent': return '24 hours';
      case 'emergency': return 'Same day';
      default: return '48 hours';
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-muted/10">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to turn your ideas into reality? Get in touch and let's discuss how I can help bring your project to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Methods */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-foreground mb-6">Get In Touch</h3>
       {contactMethods.map((method, index) => {
  const href =
    method.link ||
    (method.title === 'Email' ? `mailto:${method.value}` :
    method.title === 'Phone(WhatsApp)' ? `tel:${method.value}` : '#');

  return (
    <a
      key={index}
      href={href}
      target={method.link ? "_blank" : "_self"}
      rel={method.link ? "noopener noreferrer" : undefined}
      className="block bg-card border border-border rounded-lg p-6 tech-shadow hover:tech-shadow-lg transition-all duration-300"
    >
      <div className="flex items-start space-x-4">
        <div className="w-12 h-12 bg-muted/20 rounded-lg flex items-center justify-center">
          <Icon name={method.icon} size={24} className={method.color} />
        </div>
        <div className="flex-1">
          <h4 className="font-semibold text-foreground mb-1">{method.title}</h4>
          <p className="text-sm text-accent font-medium mb-2">{method.value}</p>
          <p className="text-xs text-muted-foreground">{method.description}</p>
        </div>
      </div>
    </a>
  );
})}


            {/* Availability Status */}
            {/* <div className="bg-card border border-border rounded-lg p-6 tech-shadow">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                <span className="font-semibold text-foreground">Currently Available</span>
              </div>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex justify-between">
                  <span>Response Time:</span>
                  <span className="text-success">Within 24 hours</span>
                </div>
                <div className="flex justify-between">
                  <span>Project Capacity:</span>
                  <span className="text-warning">2 slots remaining</span>
                </div>
                <div className="flex justify-between">
                  <span>Next Available:</span>
                  <span className="text-foreground">Immediately</span>
                </div>
              </div>
            </div> */}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-card border border-border rounded-lg p-8 tech-shadow">
              <h3 className="text-xl font-bold text-foreground mb-6">Project Inquiry Form</h3>
              
              {submitStatus === 'success' && (
                <div className="bg-success/10 border border-success/20 rounded-lg p-4 mb-6">
                  <div className="flex items-center space-x-3">
                    <Icon name="CheckCircle" size={20} className="text-success" />
                    <div>
                      <h4 className="font-semibold text-success">Message Sent Successfully!</h4>
                      <p className="text-sm text-success/80">I'll get back to you within 24 hours.</p>
                    </div>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4 mb-6">
                  <div className="flex items-center space-x-3">
                    <Icon name="AlertCircle" size={20} className="text-destructive" />
                    <div>
                      <h4 className="font-semibold text-destructive">Something went wrong</h4>
                      <p className="text-sm text-destructive/80">Please try again or contact me directly.</p>
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Input
                    label="Full Name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    required
                    error={errors.name}
                  />
                  <Input
                    label="Email Address"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@company.com"
                    required
                    error={errors.email}
                  />
                </div>

                {/* <div className="grid md:grid-cols-2 gap-6">
                  <Input
                    label="Company/Organization"
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Your company name (optional)"
                  />
                  <Select
                    label="Project Type"
                    options={projectTypeOptions}
                    value={formData.projectType}
                    onChange={(value) => handleSelectChange('projectType', value)}
                    error={errors.projectType}
                    required
                  />
                </div>
           <div className="grid md:grid-cols-2 gap-6">
                  <Select
                    label="Budget Range"
                    options={budgetOptions}
                    value={formData.budget}
                    onChange={(value) => handleSelectChange('budget', value)}
                    description="This helps me provide accurate estimates"
                  />
                  <Select
                    label="Timeline"
                    options={timelineOptions}
                    value={formData.timeline}
                    onChange={(value) => handleSelectChange('timeline', value)}
                    description="When do you need this completed?"
                  />
                </div>  */}

              

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                   Your Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Please describe your project in detail. Include features, requirements, and any specific technologies you prefer..."
                    rows={6}
                    className="w-full px-3 py-2  bg-background border border-border rounded-md text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent resize-none"
                    required
                  />
                  {errors.message && (
                    <p className="text-sm text-destructive mt-1">{errors.message}</p>
                  )}
                  <p className="text-xs text-muted-foreground mt-1">
                    {formData.message.length}/500 characters
                  </p>
                </div>

                <Button
                  type="submit"
                  variant="default"
                  size="lg"
                  loading={isSubmitting}
                  disabled={isSubmitting}
                  iconName="Send"
                  iconPosition="right"
                  fullWidth
                >
                  {isSubmitting ? 'Sending Message...' : 'Send Project Inquiry'}
                </Button>

                <div className="text-center">
                  <p className="text-xs text-muted-foreground">
                    By submitting this form, you agree to receive project-related communications. 
                    I respect your privacy and will never share your information.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>

    {/* FAQ Section */}
<div className="mt-16 bg-card border border-border rounded-lg p-8 tech-shadow">
  <h3 className="text-xl font-bold text-foreground text-center mb-8">
    Frequently Asked Questions
  </h3>
  <div className="grid md:grid-cols-2 gap-8">
    <div className="space-y-4">
      <div>
        <h4 className="font-semibold text-foreground mb-2">What kind of projects do you work on?</h4>
        <p className="text-sm text-muted-foreground">
          I mainly focus on full-stack web development, building APIs, integrating databases, and creating efficient server-side solutions. I also take freelance and remote projects occasionally.
        </p>
      </div>
      <div>
        <h4 className="font-semibold text-foreground mb-2">How quickly can you respond?</h4>
        <p className="text-sm text-muted-foreground">
          I typically respond to inquiries within 24-48 hours.
        </p>
      </div>
    </div>
    <div className="space-y-4">
      <div>
        <h4 className="font-semibold text-foreground mb-2">What information should I provide for a project?</h4>
        <p className="text-sm text-muted-foreground">
          Include the project goals, required features, preferred technologies, timeline, and any existing resources or constraints.
        </p>
      </div>
      <div>
        <h4 className="font-semibold text-foreground mb-2">Do you offer project guidance?</h4>
        <p className="text-sm text-muted-foreground">
          Yes! I provide advice on architecture, technology choices, and implementation strategies for your backend projects.
        </p>
      </div>
    </div>
  </div>
</div>

      </div>
    </section>
  );
};

export default ContactSection;