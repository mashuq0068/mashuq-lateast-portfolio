import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

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

  const projectTypeOptions = [
    { value: '', label: 'Select project type' },
    { value: 'web-app', label: 'Web Application' },
    { value: 'ecommerce', label: 'E-commerce Platform' },
    { value: 'portfolio', label: 'Portfolio Website' },
    { value: 'saas', label: 'SaaS Platform' },
    { value: 'api', label: 'API Development' },
    { value: 'consultation', label: 'Technical Consultation' },
    { value: 'other', label: 'Other' }
  ];

  const budgetOptions = [
    { value: '', label: 'Select budget range' },
    { value: 'under-5k', label: 'Under $5,000' },
    { value: '5k-10k', label: '$5,000 - $10,000' },
    { value: '10k-25k', label: '$10,000 - $25,000' },
    { value: '25k-50k', label: '$25,000 - $50,000' },
    { value: 'over-50k', label: 'Over $50,000' },
    { value: 'discuss', label: 'Let\'s discuss' }
  ];

  const timelineOptions = [
    { value: '', label: 'Select timeline' },
    { value: 'asap', label: 'ASAP (Rush job)' },
    { value: '1-month', label: '1 Month' },
    { value: '2-3-months', label: '2-3 Months' },
    { value: '3-6-months', label: '3-6 Months' },
    { value: 'flexible', label: 'Flexible' }
  ];

  const priorityOptions = [
    { value: 'normal', label: 'Normal (48hr response)' },
    { value: 'urgent', label: 'Urgent (24hr response)' },
    { value: 'emergency', label: 'Emergency (Same day)' }
  ];

  const contactMethods = [
    {
      icon: 'Mail',
      title: 'Email',
      value: 'mashuq.dev@email.com',
      description: 'Best for detailed project discussions',
      color: 'text-blue-400'
    },
    {
      icon: 'Phone',
      title: 'Phone',
      value: '+880 1234 567890',
      description: 'Available Mon-Fri, 9AM-6PM (GMT+6)',
      color: 'text-green-400'
    },
    {
      icon: 'MessageCircle',
      title: 'WhatsApp',
      value: '+880 1234 567890',
      description: 'Quick questions and updates',
      color: 'text-green-500'
    },
    {
      icon: 'Calendar',
      title: 'Schedule Call',
      value: 'Book 30-min consultation',
      description: 'Free technical consultation',
      color: 'text-purple-400'
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
            
            {contactMethods.map((method, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-6 tech-shadow hover:tech-shadow-lg transition-all duration-300">
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
              </div>
            ))}

            {/* Availability Status */}
            <div className="bg-card border border-border rounded-lg p-6 tech-shadow">
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
            </div>
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

                <div className="grid md:grid-cols-2 gap-6">
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
                </div>

                <Select
                  label="Priority Level"
                  options={priorityOptions}
                  value={formData.priority}
                  onChange={(value) => handleSelectChange('priority', value)}
                  description={`Expected response time: ${getResponseTime()}`}
                />

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Project Description *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Please describe your project in detail. Include features, requirements, and any specific technologies you prefer..."
                    rows={6}
                    className="w-full px-3 py-2 bg-input border border-border rounded-md text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent resize-none"
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
                <h4 className="font-semibold text-foreground mb-2">What's your typical response time?</h4>
                <p className="text-sm text-muted-foreground">I respond to all inquiries within 24-48 hours, often much sooner during business hours.</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Do you work with international clients?</h4>
                <p className="text-sm text-muted-foreground">Yes! I work with clients worldwide and am comfortable with different time zones and communication preferences.</p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-foreground mb-2">What information should I include in my inquiry?</h4>
                <p className="text-sm text-muted-foreground">Project goals, timeline, budget range, and any specific requirements or technologies you prefer.</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Do you offer free consultations?</h4>
                <p className="text-sm text-muted-foreground">Yes! I offer a free 30-minute consultation to discuss your project and provide initial recommendations.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;