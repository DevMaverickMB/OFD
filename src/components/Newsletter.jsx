import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import './Newsletter.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <section className="newsletter-section">
      <div className="container">
        <div className="newsletter-content">
          <div className="newsletter-info">
            <i className="fas fa-envelope" style={{fontSize: '32px'}} />
            <div>
              <h3>Subscribe Newsletter</h3>
              <p>At Orriun Atlas, our goal is to help you scale your operations</p>
            </div>
          </div>
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <Input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button type="submit">
              <i className="fas fa-paper-plane" style={{fontSize: '16px'}}></i>
              SUBSCRIBE
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
