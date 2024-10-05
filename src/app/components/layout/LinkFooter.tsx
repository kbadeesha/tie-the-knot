import React from "react";
import "../../../styles/layout/link-footer.css";
const LinkFooter = () => {
  return (
    <div className="link-footer">
      <div className="link-footer-sec">
        <section className="footer-column">
          <div className="footer-link-button-link">
            <h5>Plan Your Wedding</h5>
            <ul>
              <li>
                <a href="/link">Venues and vendors</a>
              </li>
              <li>
                <a href="/link">Guest list</a>
              </li>
              <li>
                <a href="/link">Wedding websites</a>
              </li>
              <li>
                <a href="/link">Registry</a>
              </li>
              <li>
                <a href="/link">Invites and paper</a>
              </li>
              <li>
                <a href="/link">Budget</a>
              </li>
              <li>
                <a href="/link">Boutique</a>
              </li>
              <li>
                <a href="/link">Albums</a>
              </li>
              <li>
                <a href="/link">Seating chart</a>
              </li>
              <li>
                <a href="/link">Mobile app</a>
              </li>
            </ul>
          </div>
        </section>
        <section className="footer-column">
          <div className="footer-link-button-link">
            <h5>About</h5>
            <ul>
              <li>
                <a href="/about-us">Our Story</a>
              </li>
              <li>
                <a href="/press">Become a Tie The Knot Vendor</a>
              </li>
              <li>
                <a href="/press">Refer a friend</a>
              </li>
              <li>
                <a href="/press">Reviews</a>
              </li>
              <li>
                <a href="/careers">Careers</a>
              </li>
              <li>
                <a href="/press">Press</a>
              </li>
            </ul>
          </div>
        </section>
        <section className="footer-column">
          <div className="footer-link-button-link">
            <h5>Advice and Support</h5>
            <ul>
              <li>
                <a href="/faq">FAQs</a>
              </li>
              <li>
                <a href="/contact">Contact Us</a>
              </li>
              <li>
                <a href="/support">Support Center</a>
              </li>
              <li>
                <a href="/support">Expert Advice</a>
              </li>
              <li>
                <a href="/support">FAQs</a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LinkFooter;
