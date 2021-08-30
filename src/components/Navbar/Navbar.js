import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
// import { Button } from '../../globalStyles';
import { Button } from "../Button/Button";

import {
  Nav,
  NavbarContainer,
  NavLogo,
  // NavIcon,
  MobileIcon,
  NavMenu,
  // NavItem,
  NavItemBtn,
  // NavLinks,
  NavBtnLink,
} from "./Navbar.elements";
import logo from "../../images/logo.svg";

const Navbar = ({ children, authStatus, onLogout }) => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <div>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/contest-list" onClick={closeMobileMenu}>
              <img width="200px" src={logo} alt="logo" className="logo" />
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              {/* <NavItem>
                <NavLinks to='/' onClick={closeMobileMenu}>
                  PAGE 1
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/page2' onClick={closeMobileMenu}>
                  PAGE 2
                </NavLinks>
              </NavItem>
              <NavItem> 
                <NavLinks to='/page3' onClick={closeMobileMenu}>
                 PAGE 3
                </NavLinks>
              </NavItem>*/}

              <NavItemBtn>
                {button ? (
                  <NavBtnLink to="/contest-list">
                    <Button primary> Start Playing Now</Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to="/contest-list">
                    <Button onClick={closeMobileMenu} fontBig primary mobile>
                      Start Playing Now
                    </Button>
                  </NavBtnLink>
                )}
              </NavItemBtn>
              <NavItemBtn>
                {button ? (
                  <NavBtnLink to={!authStatus && "/sign-in"}>
                    <Button buttonStyle="btn--secondary" onClick={authStatus ? onLogout : () => {}}>{authStatus ? "Sign Out" : "Sign In"}</Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to={!authStatus && "/sign-in"}>
                    <Button
                      onClick={authStatus ? onLogout : closeMobileMenu}
                      fontBig
                      buttonStyle="btn--secondary"
                    >
                      Sign In
                    </Button>
                  </NavBtnLink>
                )}
              </NavItemBtn>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>

      <div>{children}</div>
    </div>
  );
};

export default Navbar;
