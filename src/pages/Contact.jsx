import { useState } from 'react';
import PageBanner from '../components/PageBanner';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import './Contact.css';
import contactInfoImg from '../assets/about/contact_oil_refinery.png';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch(
        'https://xfdjbixnpzoepuuvgncn.supabase.co/functions/v1/send-contact-email',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();

      if (!response.ok || result.error) {
        throw new Error(result.error || 'Failed to send message');
      }

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      <PageBanner title="Contact" />

      <section className="contact-section">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info scroll-animate" data-animate="fade-up">
              <p className="section-label">— Reach out to us</p>
              <h2>Have questions or want to know how Orriun Atlas can benefit your business?</h2>
              <p className="contact-description">
                Our team is just a message away, ready to assist with your needs.
              </p>
              <div className="contact-image">
                <img
                  src={contactInfoImg}
                  alt="Contact Orriun Atlas"
                />
              </div>
            </div>

            <div className="contact-form-wrapper scroll-animate" data-animate="fade-up" data-delay="200">
              <div className="contact-form-card">
                <h3>Contact Form</h3>
                <p>Fill out the form below and one of our representatives will get back to you shortly.</p>

                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Name*"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <Input
                      type="email"
                      name="email"
                      placeholder="Email*"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <Input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <Textarea
                      name="message"
                      placeholder="Message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <Button type="submit" className="submit-btn" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <i className="fas fa-spinner fa-spin" style={{ fontSize: '16px' }}></i>
                        SENDING...
                      </>
                    ) : (
                      <>
                        <i className="fas fa-paper-plane" style={{ fontSize: '16px' }}></i>
                        SEND MESSAGE
                      </>
                    )}
                  </Button>

                  {submitStatus === 'success' && (
                    <div className="form-status success">
                      <i className="fas fa-check-circle"></i>
                      Thank you! Your message has been sent successfully.
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="form-status error">
                      <i className="fas fa-exclamation-circle"></i>
                      Something went wrong. Please try again later.
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>

          <div className="social-links-section scroll-animate" data-animate="fade-up" data-delay="100">
            <h4 className="social-label">Follow Us On</h4>
            <div className="social-icons-wrapper">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;

