import React from 'react'
import '../../styles/layout/footer.css'

const Footer = () => {
  return (
    <footer className="footer">
    <div className="footer-content">
      <div className="footer-links">
        <a href="/privacy">Privacy</a>
        <a href="/terms">Terms</a>
        <a href="/do-not-sell">Do Not Sell / Share My Personal Information</a>
        <a href="/web-accessibility">Web Accessibility</a>
      </div>
      <p className="footer-copyright">
        © 2024 TieTheKnot, Inc. All rights reserved.
      </p>
    </div>
  </footer>
  )
}

export default Footer