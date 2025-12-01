import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllFarmers } from '../data/farmers';
import './FarmerInput.css';

const FarmerInput = () => {
  const [batchNumber, setBatchNumber] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const allFarmers = getAllFarmers();

  const handleSubmit = (e) => {
    e.preventDefault();
    const batch = parseInt(batchNumber);

    if (!batchNumber) {
      setError('Please enter a batch number');
      return;
    }

    if (isNaN(batch) || batch < 1 || batch > 10) {
      setError('Please enter a valid batch number (1-10)');
      return;
    }

    // Navigate to farmer details page
    navigate(`/knowyourfarmer/${batch}`);
  };

  const handleFarmerClick = (farmerId) => {
    navigate(`/knowyourfarmer/${farmerId}`);
  };

  return (
    <div className="farmer-input-page">
      <div className="input-section">
        <div className="container">
          <div className="input-content">
            <h1 className="page-title">Know Your Farmer</h1>
            <p className="page-subtitle">
              Enter the batch number from your SAFARY packet QR code to discover the story behind your banana chips
            </p>

            <form onSubmit={handleSubmit} className="batch-form">
              <div className="input-group">
                <label htmlFor="batchNumber" className="input-label">
                  Batch Number (1-10)
                </label>
                <input
                  type="text"
                  id="batchNumber"
                  className={`batch-input ${error ? 'error' : ''}`}
                  placeholder="Enter batch number"
                  value={batchNumber}
                  onChange={(e) => {
                    setBatchNumber(e.target.value);
                    setError('');
                  }}
                  maxLength={2}
                />
                {error && <p className="error-message">{error}</p>}
              </div>
              <button type="submit" className="btn btn-primary btn-large">
                View Farmer Details
              </button>
            </form>

            <div className="qr-info">
              <div className="qr-icon">📱</div>
              <p>Scan the QR code on your packet for direct access to farmer information</p>
            </div>
          </div>
        </div>
      </div>

      <div className="farmers-gallery">
        <div className="container">
          <h2 className="gallery-title">Meet All Our Farmers</h2>
          <p className="gallery-subtitle">
            Click on any farmer to learn their story
          </p>
          <div className="farmers-grid">
            {allFarmers.map((farmer) => (
              <div
                key={farmer.id}
                className="farmer-card"
                onClick={() => handleFarmerClick(farmer.id)}
              >
                <div className="farmer-card-image">
                  <img src={farmer.photo} alt={farmer.name} />
                  <div className="batch-badge">Batch {farmer.batchNumber}</div>
                </div>
                <div className="farmer-card-content">
                  <h3 className="farmer-name">{farmer.name}</h3>
                  <p className="farmer-location">📍 {farmer.location}</p>
                  <p className="farmer-variety">🍌 {farmer.bananaVariety}</p>
                  <div className="farmer-certified">{farmer.certified}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmerInput;
