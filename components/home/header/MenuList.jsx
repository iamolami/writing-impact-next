import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MenuLists = ({ item, onToggle, active, setNavbarOpen }) => {
  return (
    <div className="menu__menuDropBox">
      <li className="menu__menuList">
        <a
          className="menu__menuLink"
          href={item.link}
          onClick={() => setNavbarOpen(false)}
        >
          {item.text}
        </a>
        <div>
          <FontAwesomeIcon icon={item.arrow} onClick={onToggle} />
        </div>
      </li>
      <ul className={active ? "menu__openPanel" : "menu__closePanel"}>
        {item.dropdown?.map((dropdownItem) => (
          <li className="menu__dropdownList">
            <a
              href={dropdownItem.link}
              className="menu__menuDropdown"
              onClick={() => setNavbarOpen(false)}
            >
              {dropdownItem.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuLists;
