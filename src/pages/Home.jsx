import { motion } from 'framer-motion'
import { 
  Eye, Shield, Zap, BarChart3, Target, Share2, 
  Cpu, Lock, Globe, ChevronRight, Apple, Sparkles,
  ScanSearch, Fingerprint, Image
} from 'lucide-react'
import './Home.css'

const features = [
  { icon: ScanSearch, title: '9 Analysis Algorithms', desc: 'Multiple forensic techniques including metadata, frequency analysis, and texture detection.', color: '#4F46E5' },
  { icon: Lock, title: '100% Private', desc: 'All analysis happens on your device. Your images never leave your phone.', color: '#10B981' },
  { icon: Zap, title: 'Instant Results', desc: 'Get detailed analysis results in seconds with confidence scores.', color: '#F59E0B' },
  { icon: BarChart3, title: 'Detailed Reports', desc: 'See which algorithms detected AI signals and understand why.', color: '#EC4899' },
  { icon: Target, title: 'Source-Aware', desc: 'Tell us where the image came from for more accurate analysis.', color: '#7C3AED' },
  { icon: Share2, title: 'Share Results', desc: 'Generate beautiful result cards to share your findings.', color: '#3B82F6' },
]

const steps = [
  { num: '01', title: 'Select Image', desc: 'Choose any image from your photo library', icon: Image },
  { num: '02', title: 'Choose Source', desc: 'Tell us where the image came from', icon: Globe },
  { num: '03', title: 'Get Results', desc: 'See AI probability with detailed breakdown', icon: BarChart3 },
]

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-glow" />
          <div className="hero-grid" />
        </div>
        
        <div className="container hero-content">
          <motion.div 
            className="hero-badge"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Sparkles size={16} />
            <span>AI Detection Technology</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Is That Image <span className="gradient-text">Real</span> or <span className="gradient-text">AI-Generated?</span>
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            AI Image Detector uses 9 forensic analysis algorithms to analyze images and estimate the probability they were created by artificial intelligence.
          </motion.p>

          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a href="#download" className="btn btn-primary">
              <Apple size={20} />
              Download on App Store
            </a>
            <a href="#features" className="btn btn-secondary">
              Learn More
              <ChevronRight size={18} />
            </a>
          </motion.div>

          {/* Phone Mockup */}
          <motion.div 
            className="hero-phone"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="phone-frame">
              <div className="phone-notch" />
              <div className="phone-screen">
                <div className="screen-header">
                  <Eye size={32} className="screen-icon" />
                  <h3>AI Image Detector</h3>
                </div>
                <div className="screen-gauge">
                  <div className="gauge-circle">
                    <svg viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="45" className="gauge-bg" />
                      <circle cx="50" cy="50" r="45" className="gauge-fill" />
                    </svg>
                    <div className="gauge-text">
                      <span className="gauge-value">72%</span>
                      <span className="gauge-label">AI</span>
                    </div>
                  </div>
                </div>
                <div className="screen-verdict likely-ai">
                  Likely AI Generated
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features" id="features">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-badge">Features</span>
            <h2>Powerful Detection <span className="gradient-text">Capabilities</span></h2>
            <p>Our advanced algorithms examine multiple aspects of images to detect AI-generated content.</p>
          </motion.div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <motion.div 
                key={feature.title}
                className="feature-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
              >
                <div className="feature-icon" style={{ background: `${feature.color}20`, color: feature.color }}>
                  <feature.icon size={24} />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works" id="how-it-works">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-badge">How It Works</span>
            <h2>Simple <span className="gradient-text">3-Step</span> Process</h2>
            <p>Analyze any image in seconds with our intuitive interface.</p>
          </motion.div>

          <div className="steps-container">
            {steps.map((step, index) => (
              <motion.div 
                key={step.num}
                className="step-card"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="step-number">{step.num}</div>
                <div className="step-content">
                  <div className="step-icon">
                    <step.icon size={24} />
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta" id="download">
        <div className="container">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="cta-glow" />
            <h2>Ready to Detect AI Images?</h2>
            <p>Download AI Image Detector and start analyzing images today. Free to use with premium features available.</p>
            <a href="#" className="btn btn-primary btn-lg">
              <Apple size={24} />
              Download on App Store
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home
