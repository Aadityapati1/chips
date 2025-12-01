import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import FarmerInput from './pages/FarmerInput';
import FarmerDetails from './pages/FarmerDetails';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/knowyourfarmer" element={<FarmerInput />} />
            <Route path="/knowyourfarmer/:batchId" element={<FarmerDetails />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
