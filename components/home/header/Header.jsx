"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import navLinks from "@/data/dropdown";

const Header = ({ setNavbarOpen }) => {
  const [scrolled, setScrolled] = React.useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });
  return (
    <header className={`header__wrapper section ${scrolled ? "mtop" : ""}`}>
      <div className="container">
        <nav className="header__row">
          <div className="header__col-3">
            <h1 className="header__logo">WritingImpact</h1>
          </div>
          <div className="header__col-3">
            <ul className="header__items">
              {navLinks.map((item, idx) => (
                <li key={idx}>
                  <a href={item.link}>
                    {item.text}
                    <FontAwesomeIcon icon={item.arrow} />
                  </a>
                  <ul className="dropdown">
                    {item.dropdown?.map((dropdownItem, idx) => (
                      <li key={idx}>
                        <a href={dropdownItem.link}>{dropdownItem.name}</a>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
            <div>
              <a href="/" className="header__btn">
                Contact Us
              </a>
            </div>
          </div>
          <div className="header__col-3">
          <button
              className="header__burger"
              onClick={() => setNavbarOpen(true)}
            ></button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
