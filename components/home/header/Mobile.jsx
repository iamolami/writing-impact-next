import React from "react";
import MenuLists from "./MenuList";
import navLinks from "@/data/dropdown";

const Mobile = ({ navbarOpen, setNavbarOpen }) => {
  const [clicked, setClicked] = React.useState("0");
  const handleToggle = (index) => {
    if (clicked === index) {
      return setClicked("0");
    }
    setClicked(index);
  };
  return (
    <nav className={navbarOpen ? "menu" : "menu__close"}>
      <div className="menu__topBox">
        <div>
          <a href="/" className="menu__logo">
            WritingImpact
          </a>
        </div>
        <button
          className="menu__burger"
          onClick={() => setNavbarOpen(false)}
        ></button>
      </div>
      <ul className="menu__menuUl">
        {navLinks.map((item, index) => (
          <MenuLists
            onToggle={() => handleToggle(index)}
            active={clicked === index}
            key={index}
            item={item}
            setNavbarOpen={setNavbarOpen}
          />
        ))}
      </ul>
      <div className="menu__menuActions">
        <button className="menu__menuBtn">See how we work</button>
      </div>
      <div className="menu__subscribeBox">
        <h2>Get notified of the best deals on our digital services</h2>
        <form>
          <input type="email" name="email" placeholder="Email Address" />
          <p>
            By clicking subscribe, you confirm that you have read and agreeing
            to our <a href="/">terms of use</a> regarding the storage of the
            data submitted through this form.
          </p>
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </nav>
  );
};

export default Mobile;
