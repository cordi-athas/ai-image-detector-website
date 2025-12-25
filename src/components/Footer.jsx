import { Link } from 'react-router-dom'
import { Eye, Mail, Github, Twitter } from 'lucide-react'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <div className="logo-icon">
                <Eye size={20} />
              </div>
              <span>AI Image Detector</span>
            </Link>
            <p>Detect AI-generated images with 9 forensic analysis algorithms. 100% private, on-device analysis.</p>
          </div>

          <div className="footer-links">
            <h4>Product</h4>
            <Link to="/">Home</Link>
            <a href="/#features">Features</a>
            <a href="/#how-it-works">How It Works</a>
          </div>

          <div className="footer-links">
            <h4>Legal</h4>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>

          <div className="footer-links">
            <h4>Connect</h4>
            <a href="mailto:support@aiimagedetector.app">
              <Mail size={16} /> Contact Support
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} AI Image Detector. All rights reserved.</p>
          <div className="footer-social">
            <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
            <a href="#" aria-label="GitHub"><Github size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
