import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">
            Snack On <span className="highlight">SAFARY</span>
          </h1>
          <p className="hero-subtitle">
            Premium banana chips with irresistible flavors - Made from Kerala's finest farms
          </p>
          <div className="hero-buttons">
            <Link to="/knowyourfarmer" className="btn btn-primary">
              Know Your Farmer 🌱
            </Link>
            <a href="#products" className="btn btn-secondary">
              Our Products
            </a>
          </div>
        </div>
        <div className="hero-scroll">
          <span>Scroll Down</span>
          <div className="scroll-arrow">↓</div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2 className="section-title">Our Story</h2>
              <p className="about-description">
                SAFARY brings you on a flavor adventure with our premium banana chips. We started with a passion to create snacks that are not just delicious but also transparent about their origins.
              </p>
              <p className="about-description">
                Every packet of SAFARY tells a story - a story of dedicated farmers, sustainable practices, and the rich agricultural heritage of Kerala and Tamil Nadu. From Cream & Onion to fiery Peri-Peri, we bring you irresistible flavors.
              </p>
              <div className="about-features">
                <div className="feature">
                  <span className="feature-icon">🌿</span>
                  <h3>100% Organic</h3>
                  <p>No pesticides, no chemicals, just pure goodness</p>
                </div>
                <div className="feature">
                  <span className="feature-icon">🤝</span>
                  <h3>Fair Trade</h3>
                  <p>Supporting farmers with fair prices and practices</p>
                </div>
                <div className="feature">
                  <span className="feature-icon">✨</span>
                  <h3>Handcrafted</h3>
                  <p>Traditional methods for authentic taste</p>
                </div>
              </div>
            </div>
            <div className="about-image">
              <img src="https://images.unsplash.com/photo-1603833665858-e61d17a86224?w=600&h=700&fit=crop" alt="Banana chips" />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="products">
        <div className="container">
          <h2 className="section-title center">Our Products</h2>
          <p className="section-subtitle">
            Crafted with care, delivered with love
          </p>
          <div className="products-grid">
            <div className="product-card cream-onion">
              <div className="product-image">
                <img src="https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=400&h=300&fit=crop" alt="Cream & Onion" />
              </div>
              <h3 className="product-name">Cream & Onion</h3>
              <p className="product-description">
                Creamy, savory perfection with a hint of onion - our signature flavor
              </p>
              <div className="product-badge">Best Seller</div>
            </div>

            <div className="product-card peri-peri">
              <div className="product-image">
                <img src="https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=400&h=300&fit=crop" alt="Peri-Peri" />
              </div>
              <h3 className="product-name">Peri-Peri</h3>
              <p className="product-description">
                Fiery, bold, and absolutely addictive - for those who love the heat
              </p>
              <div className="product-badge hot">Hot 🔥</div>
            </div>

            <div className="product-card classic">
              <div className="product-image">
                <img src="https://images.unsplash.com/photo-1587248720327-d4a58f7d8f39?w=400&h=300&fit=crop" alt="Classic Salted" />
              </div>
              <h3 className="product-name">Classic Salted</h3>
              <p className="product-description">
                Pure, crispy goodness with just the right amount of sea salt
              </p>
              <div className="product-badge">Original</div>
            </div>

            <div className="product-card masala">
              <div className="product-image">
                <img src="https://images.unsplash.com/photo-1610440042810-0b4f1c3229dd?w=400&h=300&fit=crop" alt="Masala" />
              </div>
              <h3 className="product-name">Masala Magic</h3>
              <p className="product-description">
                A burst of Indian spices for an authentic flavor experience
              </p>
              <div className="product-badge new">New!</div>
            </div>
          </div>
        </div>
      </section>

      {/* Transparency Section */}
      <section className="transparency">
        <div className="container">
          <div className="transparency-content">
            <h2 className="section-title">Know Where Your Food Comes From</h2>
            <p className="transparency-text">
              Scan the QR code on your packet to meet the farmer who grew your bananas. We believe in complete transparency from farm to packet.
            </p>
            <div className="transparency-features">
              <div className="trans-feature">
                <span className="trans-icon">📱</span>
                <h4>Scan QR Code</h4>
                <p>Every packet has a unique code</p>
              </div>
              <div className="trans-feature">
                <span className="trans-icon">🌾</span>
                <h4>Meet Your Farmer</h4>
                <p>Learn their story and practices</p>
              </div>
              <div className="trans-feature">
                <span className="trans-icon">✅</span>
                <h4>Full Traceability</h4>
                <p>From harvest to your hands</p>
              </div>
            </div>
            <Link to="/knowyourfarmer" className="btn btn-primary">
              Explore Farmer Profiles
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2 className="cta-title">Ready to Snack on SAFARY?</h2>
          <p className="cta-text">
            Join thousands of happy customers who trust SAFARY for quality, flavor, and transparency
          </p>
          <button className="btn btn-large">Order Now</button>
        </div>
      </section>
    </div>
  );
};

export default Home;
