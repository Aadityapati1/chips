import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-title">
            <span className="footer-icon">🦁</span>
            SAFARY
          </h3>
          <p className="footer-description">
            Bringing you the crispiest, most delicious SAFARY banana chips made from the finest bananas, sourced directly from local farmers.
          </p>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/knowyourfarmer">Know Your Farmer</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#products">Products</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">Contact Us</h4>
          <ul className="footer-contact">
            <li>📧 info@crispybanana.com</li>
            <li>📞 +91 1234567890</li>
            <li>📍 Kerala, India</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">Follow Us</h4>
          <div className="social-links">
            <a href="#" className="social-link">📘 Facebook</a>
            <a href="#" className="social-link">📷 Instagram</a>
            <a href="#" className="social-link">🐦 Twitter</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} SAFARY Banana Chips. All rights reserved. Made with ❤️ in India</p>
      </div>
    </footer>
  );
};

export default Footer;
