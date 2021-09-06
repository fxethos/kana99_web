import React, { useState, useEffect, useContext } from "react";
import { connect } from "react-redux";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Button } from "../Button/Button";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItemBtn,
  NavBtnLink,
} from "./Navbar.elements";
import logo from "../../images/logo.svg";
import { AuthContext } from "../../Helpers/AuthHelpers";
import { logout as signout } from "../../actions/auth";

const Navbar = (props) => {
  const { logout } = useContext(AuthContext);
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [authCTA, setAuthCTA] = useState('Sign In');
  const [authRoute, setAuthRoute] = useState('');

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

  useEffect(() => {
    if(props.auth.uuid) {
      setAuthCTA('Sign Out');
    } else {
      setAuthCTA('Sign In');
      setAuthRoute('/sign-in');
    }
  }, [props.auth.uuid])

  const handleSignout = () => {
    if (props.auth.uuid) {
      logout();
      props.dispatch(signout());
    }
  }

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
              <NavItemBtn>
                {button ? (
                  <NavBtnLink to="/match-list">
                    <Button primary> Start Playing Now</Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to="/match-list">
                    <Button onClick={closeMobileMenu} fontBig primary mobile>
                      Start Playing Now
                    </Button>
                  </NavBtnLink>
                )}
              </NavItemBtn>
              <NavItemBtn>
                {button ? (
                  <NavBtnLink to={authRoute}>
                    <Button 
                      buttonStyle="btn--secondary" 
                      onClick={props.authStatus ? handleSignout : () => {}}
                    >
                      {authCTA}
                    </Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to={authRoute}>
                    <Button
                      onClick={props.authStatus ? handleSignout : closeMobileMenu}
                      fontBig
                      buttonStyle="btn--secondary"
                    >
                    {authCTA}
                    </Button>
                  </NavBtnLink>
                )}
              </NavItemBtn>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>

      <div>{props.children}</div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state
});

export default connect(mapStateToProps)(Navbar);
