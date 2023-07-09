import React from "react";

const Footer = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__upperBox">
          <div className="footer__title">
            <h2>SERVING YOU SINCE 2009</h2>
          </div>
            <div className="footer__row">
              <div className="footer__col-md-5">
                <a href="/" className="footer__logo">
                  WritingImpact
                </a>
                <p>
                  Quality content is the key to add value to the success of your
                  business, connect with your audience, and keep them coming
                  back for more. Writing Impact is designed to power your
                  digital content needs to the next level.
                </p>
                <div className="footer__social-widget">
                  <a href="/">
                    <i class="bx bxl-facebook"></i>
                  </a>
                  <a href="/">
                    <i class="bx bxl-linkedin"></i>
                  </a>
                  <a href="/">
                    <i class="bx bxl-twitter"></i>
                  </a>
                  <a href="/">
                    <i class="bx bxl-google"></i>
                  </a>
                </div>
              </div>
              <div className="footer__col-md-8">
                <div className="footer__col-md-3">
                  <div className="footer__widget-links">
                    <h3>Content Type</h3>
                    <ul>
                      <li>
                        <a href="/">Web Blogs</a>
                      </li>
                      <li>
                        <a href="/">Website Content</a>
                      </li>
                      <li>
                        <a href="/">SEO Articles</a>
                      </li>
                      <li>
                        <a href="/">Copywriting</a>
                      </li>
                      <li>
                        <a href="/">Ebooks</a>
                      </li>
                      <li>
                        <a href="/">Whitepapers</a>
                      </li>
                      <li>
                        <a href="/">Thought Leadership</a>
                      </li>
                      <li>
                        <a href="/">Product Descriptions</a>
                      </li>
                      <li>
                        <a href="/">Buying & Selling Guide</a>
                      </li>
                      <li>
                        <a href="/">Market Reports</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="footer__col-md-3">
                  <div className="footer__widget-links">
                    <h3>Services</h3>
                    <ul>
                      <li>
                        <a href="/">Text Content</a>
                      </li>
                      <li>
                        <a href="/">Video</a>
                      </li>
                      <li>
                        <a href="/">Graphics</a>
                      </li>
                      <li>
                        <a href="/">Audio</a>
                      </li>
                      <li>
                        <a href="/">Transcriptions</a>
                      </li>
                      <li>
                        <a href="/">Translations</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="footer__col-md-3">
                  <div className="footer__widget-links">
                    <h3>Companies</h3>
                    <ul>
                      <li>
                        <a href="/">Startups</a>
                      </li>
                      <li>
                        <a href="/">SMEs</a>
                      </li>
                      <li>
                        <a href="/">Midmarket</a>
                      </li>
                      <li>
                        <a href="/">Enterprise</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="footer__col-md-3">
                  <div className="footer__widget-links">
                    <h3>Industries</h3>
                    <ul>
                      <li>
                        <a href="/">Finance</a>
                      </li>
                      <li>
                        <a href="/">Education</a>
                      </li>
                      <li>
                        <a href="/">Technology</a>
                      </li>
                      <li>
                        <a href="/">E-commerce</a>
                      </li>
                      <li>
                        <a href="/">Fashion</a>
                      </li>
                      <li>
                        <a href="/">Travel</a>
                      </li>
                      <li>
                        <a href="/">Real Estate</a>
                      </li>
                      <li>
                        <a href="/">Hospitality</a>
                      </li>
                      <li>
                        <a href="/">Healthcare</a>
                      </li>
                      <li>
                        <a href="/">Automotive</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer__lowerBox">
            <p>
              © 2023 <a href="/">Writing Impact Marketing.</a> All Rights
              Reserved.{" "}
              <a href="/cookie-policy" className="footer__lowerBox-a">
                Cookie policy
              </a>{" "}
              |
              <a href="/privacy-policy" className="footer__lowerBox-a">
                {" "}
                Privacy policy
              </a>{" "}
              |
              <a href="/terms-of-use" className="footer__lowerBox-a">
                {" "}
                Terms of use
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
