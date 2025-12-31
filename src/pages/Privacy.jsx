import { motion } from 'framer-motion'
import { Shield, Lock, Database, Users, Bell, Mail } from 'lucide-react'
import './Legal.css'

function Privacy() {
  return (
    <div className="legal-page">
      <div className="legal-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="legal-icon">
              <Shield size={32} />
            </div>
            <h1>Privacy Policy</h1>
            <p className="legal-updated">Last updated: December 2024</p>
          </motion.div>
        </div>
      </div>

      <div className="container">
        <motion.div 
          className="legal-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="highlight-box">
            <Lock size={24} />
            <div>
              <h3>Key Privacy Point</h3>
              <p>All image analysis is performed entirely on your device. Your photos are never uploaded to our servers or any third-party services.</p>
            </div>
          </div>

          <section>
            <h2>Introduction</h2>
            <p>AI Image Detector ("we", "our", or "the app") is committed to protecting your privacy. This Privacy Policy explains how we handle information when you use our mobile application.</p>
          </section>

          <section>
            <h2>Information We Collect</h2>
            <ul>
              <li><strong>Images you analyze:</strong> Processed locally on your device only - never uploaded</li>
              <li><strong>Device identifiers:</strong> For advertising purposes (if you consent)</li>
              <li><strong>Anonymous usage analytics:</strong> To improve the app experience</li>
              <li><strong>Purchase history:</strong> For subscription management through Apple</li>
            </ul>
          </section>

          <section>
            <h2>How We Process Your Data</h2>
            <h3>On-Device Processing</h3>
            <p>All image analysis is performed entirely on your device using our 9 forensic analysis algorithms. Your photos never leave your device and are never uploaded to any server.</p>
            
            <h3>No Image Storage</h3>
            <p>We do not store, save, or retain any images you analyze. Once analysis is complete, the image data is not kept by the app.</p>

            <h3>Face and Biometric Data</h3>
            <p>FakeSnap does NOT collect, process, or analyze face data or any biometric information. Our forensic algorithms analyze technical image properties such as:</p>
            <ul>
              <li>Pixel patterns and compression artifacts</li>
              <li>Image metadata (EXIF data)</li>
              <li>Color histograms and frequency analysis</li>
              <li>JPEG quality and encoding characteristics</li>
            </ul>
            <p>These algorithms detect signs of AI generation without identifying, recognizing, or processing any facial features or biometric data. Images are processed locally and discarded immediately after analysis.</p>
          </section>

          <section>
            <h2>Third-Party Services</h2>
            <h3>Google AdMob</h3>
            <p>We use Google AdMob to display advertisements. AdMob may collect device identifiers and usage data to serve personalized ads. You can opt out of personalized advertising in your device settings.</p>
            
            <h3>Apple App Store</h3>
            <p>Subscription purchases are processed through Apple's App Store. Apple's privacy policy governs how payment information is handled.</p>
          </section>

          <section>
            <h2>Data Sharing</h2>
            <p>We do not sell, trade, or share your personal information with third parties except as required by law or as described in this policy regarding advertising partners.</p>
          </section>

          <section>
            <h2>Your Rights</h2>
            <ul>
              <li>Request deletion of any personal data we may have</li>
              <li>Opt out of personalized advertising</li>
              <li>Request information about data we collect</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </section>

          <section>
            <h2>Children's Privacy</h2>
            <p>Our app is not intended for children under 13. We do not knowingly collect personal information from children under 13.</p>
          </section>

          <section>
            <h2>Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.</p>
          </section>

          <div className="contact-box">
            <Mail size={24} />
            <div>
              <h3>Contact Us</h3>
              <p>If you have any questions about this Privacy Policy, please contact us at:</p>
              <a href="mailto:athascordi@gmail.com">athascordi@gmail.com</a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Privacy
