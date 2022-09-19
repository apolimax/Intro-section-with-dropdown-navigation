import React, { useEffect, useState } from "react";
import { useSidebarContext } from "../../context/sidebarContext";
import CompanyDropDown from "./CompanyDropDown";
import FeaturesDropDown from "./FeaturesDropDown";
import HamburguerMenu from "./HamburguerMenu";
import SideBar from "./SideBar";

function Header() {
  const { showNavBar, setShowNavBar } = useSidebarContext();

  const [isMobile, setIsMobile] = useState(false);
  const [showFeatureItems, setShowFeatureItems] = useState(false);
  const [showCompanyItems, setShowCompanyItems] = useState(false);

  useEffect(() => {
    function handleWindowSize() {
      if (window.innerWidth > 800) {
        setIsMobile(false);
      } else {
        setIsMobile(true);
      }
    }

    window.addEventListener("resize", handleWindowSize);

    return () => window.removeEventListener("resize", handleWindowSize);
  }, [window.innerWidth]);

  useEffect(() => {
    function closeDropDownsAndSideBarByPressingEscapeKey(e) {
      if (e.key === "Escape") {
        setShowCompanyItems(false);
        setShowFeatureItems(false);
        setShowNavBar(false);
      }
    }

    window.addEventListener("keydown", (e) =>
      closeDropDownsAndSideBarByPressingEscapeKey(e)
    );

    return () =>
      window.removeEventListener("keydown", (e) =>
        closeDropDownsAndSideBarByPressingEscapeKey(e)
      );
  }, []);

  useEffect(() => {
    function closeFeaturesDropDown(e) {
      const wasClickedOutsideFeatureNavItem =
        e.target.parentElement?.id !== "features";
      if (wasClickedOutsideFeatureNavItem) setShowFeatureItems(false);
    }

    function closeCompanyDropDown(e) {
      const wasClickedOutsideCompanyNavItem =
        e.target.parentElement?.id !== "company";
      if (wasClickedOutsideCompanyNavItem) setShowCompanyItems(false);
    }

    window.addEventListener("click", (e) => closeFeaturesDropDown(e));
    window.addEventListener("click", (e) => closeCompanyDropDown(e));

    return () => {
      window.removeEventListener("click", (e) => closeFeaturesDropDown(e));
      window.removeEventListener("click", (e) => closeCompanyDropDown(e));
    };
  }, []);

  function toggleFeatureItems() {
    setShowFeatureItems((prevState) => !prevState);
    setShowCompanyItems(false);
  }

  function toggleCompanyItems() {
    setShowCompanyItems((prevState) => !prevState);
    setShowFeatureItems(false);
  }

  return (
    <header className={`${isMobile ? "header-mobile" : "header-desktop"}`}>
      <img src="./images/logo.svg" alt="snap logo" />
      {isMobile && !showNavBar && (
        <HamburguerMenu toggleNavBar={setShowNavBar} />
      )}
      {isMobile && showNavBar && (
        <SideBar toggleNavBar={setShowNavBar} isNavBarVisible={showNavBar} />
      )}
      {!isMobile && (
        <nav className="sidebar-nav">
          <ul>
            <li onClick={toggleFeatureItems}>
              <div id="features">
                <span>Features</span>
                <div>
                  <img src="./images/icon-arrow-down.svg" alt="" />
                </div>
              </div>
              {showFeatureItems && <FeaturesDropDown />}
            </li>
            <li onClick={toggleCompanyItems}>
              <div id="company">
                <span>Company</span>
                <div>
                  <img src="./images/icon-arrow-down.svg" alt="" />
                </div>
              </div>
              {showCompanyItems && <CompanyDropDown />}
            </li>
            <li>
              <div>Careers</div>
            </li>
            <li>
              <div>About</div>
            </li>
          </ul>
          <ul>
            <li className="sidebar-nav-loginButton">
              <button type="button">Login</button>
            </li>
            <li className="sidebar-nav-registerButton">
              <button type="button">Register</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;
