import React, { useEffect, useState } from "react";
import CompanyDropDown from "./CompanyDropDown";
import FeaturesDropDown from "./FeaturesDropDown";

function SideBar({ toggleNavBar, isNavBarVisible }) {
  const [showFeatureItems, setShowFeatureItems] = useState(false);
  const [showCompanyItems, setShowCompanyItems] = useState(false);

  useEffect(() => {
    /* console.log(document.getElementById("sidebar").childNodes); */

    function closeSideBarByClickingOutside(e) {
      /* console.log("e target", e.target.parentElement); */
    }

    window.addEventListener("click", (e) => closeSideBarByClickingOutside(e));

    return () =>
      window.addEventListener("click", (e) => closeSideBarByClickingOutside(e));
  }, []);

  return (
    <div
      id="sidebar"
      className={`sidebar-container ${
        isNavBarVisible ? "navbar-transitions" : ""
      }`}
    >
      <div className="sidebar-closeIcon" onClick={() => toggleNavBar(false)}>
        <img src="./images/icon-close-menu.svg" alt="close sidebar" />
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li onClick={() => setShowFeatureItems((prevState) => !prevState)}>
            <div>
              <span>Features</span>
              <div>
                <img src="./images/icon-arrow-down.svg" alt="" />
              </div>
            </div>
            {showFeatureItems && (
              <FeaturesDropDown class_on_mobile="innerNavItems" />
            )}
          </li>
          <li onClick={() => setShowCompanyItems((prevState) => !prevState)}>
            <div>
              <span>Company</span>
              <div>
                <img src="./images/icon-arrow-down.svg" alt="" />
              </div>
            </div>
            {showCompanyItems && (
              <CompanyDropDown class_on_mobile="innerNavItems" />
            )}
          </li>
          <li>
            <div>Careers</div>
          </li>
          <li>
            <div>About</div>
          </li>
          <li className="sidebar-nav-loginButton">
            <button type="button">Login</button>
          </li>
          <li className="sidebar-nav-registerButton">
            <button type="button">Register</button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default SideBar;
