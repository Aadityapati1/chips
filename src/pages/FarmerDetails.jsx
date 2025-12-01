import { useParams, useNavigate, Link } from 'react-router-dom';
import { getFarmerByBatch } from '../data/farmers';
import './FarmerDetails.css';

const FarmerDetails = () => {
  const { batchId } = useParams();
  const navigate = useNavigate();
  const farmer = getFarmerByBatch(batchId);

  if (!farmer) {
    return (
      <div className="not-found">
        <div className="not-found-content">
          <h1 className="not-found-title">😕 Farmer Not Found</h1>
          <p className="not-found-text">
            Sorry, we couldn't find a farmer associated with batch number {batchId}.
            Please check the batch number and try again.
          </p>
          <Link to="/knowyourfarmer" className="btn btn-primary">
            Back to Farmer Search
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="farmer-details">
      {/* Hero Section */}
      <div className="farmer-hero" style={{ backgroundImage: `url(${farmer.farmPhoto})` }}>
        <div className="farmer-hero-overlay"></div>
        <div className="farmer-hero-content">
          <div className="batch-info">Batch #{farmer.batchNumber}</div>
          <h1 className="farmer-hero-title">{farmer.name}</h1>
          <p className="farmer-hero-location">📍 {farmer.location}</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="farmer-content">
        <div className="container">
          <button onClick={() => navigate('/knowyourfarmer')} className="back-button">
            ← Back to All Farmers
          </button>

          <div className="farmer-main">
            <div className="farmer-photo-section">
              <div className="farmer-photo">
                <img src={farmer.photo} alt={farmer.name} />
              </div>
              <div className="farmer-badges">
                <div className="badge certified">{farmer.certified}</div>
                <div className="badge experience">{farmer.experience} Experience</div>
              </div>
            </div>

            <div className="farmer-info-section">
              <h2 className="section-heading">About {farmer.name.split(' ')[0]}</h2>
              <p className="farmer-story">{farmer.story}</p>

              <div className="farmer-details-grid">
                <div className="detail-card">
                  <div className="detail-icon">🌾</div>
                  <div className="detail-content">
                    <h3>Farm Size</h3>
                    <p>{farmer.farmSize}</p>
                  </div>
                </div>

                <div className="detail-card">
                  <div className="detail-icon">🍌</div>
                  <div className="detail-content">
                    <h3>Banana Variety</h3>
                    <p>{farmer.bananaVariety}</p>
                  </div>
                </div>

                <div className="detail-card">
                  <div className="detail-icon">📅</div>
                  <div className="detail-content">
                    <h3>Harvest Date</h3>
                    <p>{farmer.harvestDate}</p>
                  </div>
                </div>

                <div className="detail-card">
                  <div className="detail-icon">⏱️</div>
                  <div className="detail-content">
                    <h3>Experience</h3>
                    <p>{farmer.experience}</p>
                  </div>
                </div>
              </div>

              <div className="speciality-section">
                <h3 className="speciality-heading">✨ Speciality</h3>
                <p className="speciality-text">{farmer.speciality}</p>
              </div>
            </div>
          </div>

          {/* Farm Photo Section */}
          <div className="farm-showcase">
            <h2 className="section-heading center">The Farm</h2>
            <div className="farm-photo">
              <img src={farmer.farmPhoto} alt={`${farmer.name}'s farm`} />
            </div>
          </div>

          {/* Transparency Message */}
          <div className="transparency-message">
            <h2 className="transparency-title">Our Commitment to Transparency</h2>
            <p className="transparency-text">
              Every packet of SAFARY banana chips comes with complete traceability. We believe you deserve to know exactly where your food comes from and who grows it. {farmer.name} is one of our trusted farmers who follows sustainable and ethical farming practices.
            </p>
            <div className="transparency-features">
              <div className="trans-item">
                <span className="trans-emoji">✅</span>
                <p>Direct Sourcing</p>
              </div>
              <div className="trans-item">
                <span className="trans-emoji">🌱</span>
                <p>Sustainable Practices</p>
              </div>
              <div className="trans-item">
                <span className="trans-emoji">🤝</span>
                <p>Fair Trade Certified</p>
              </div>
              <div className="trans-item">
                <span className="trans-emoji">💚</span>
                <p>Organic Farming</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="farmer-cta">
            <h3>Want to explore more farmers?</h3>
            <Link to="/knowyourfarmer" className="btn btn-primary">
              View All Farmers
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmerDetails;
