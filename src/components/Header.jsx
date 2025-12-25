import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Eye, Menu, X } from 'lucide-react'
import { useState } from 'react'
import './Header.css'

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  return (
    <motion.header 
      className="header glass"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container header-content">
        <Link to="/" className="logo">
          <div className="logo-icon">
            <Eye size={24} />
          </div>
          <span>AI Image Detector</span>
        </Link>

        <nav className={`nav ${isOpen ? 'open' : ''}`}>
          <Link 
            to="/" 
            className={location.pathname === '/' ? 'active' : ''}
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <a href="/#features" onClick={() => setIsOpen(false)}>Features</a>
          <Link 
            to="/privacy" 
            className={location.pathname === '/privacy' ? 'active' : ''}
            onClick={() => setIsOpen(false)}
          >
            Privacy
          </Link>
          <Link 
            to="/terms" 
            className={location.pathname === '/terms' ? 'active' : ''}
            onClick={() => setIsOpen(false)}
          >
            Terms
          </Link>
        </nav>

        <a href="#download" className="btn btn-primary header-cta">
          Download
        </a>

        <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </motion.header>
  )
}

export default Header
