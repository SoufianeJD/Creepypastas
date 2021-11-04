import { useEffect, useState } from "react";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink, } from "./NavbarElements";
import { FaBars } from "react-icons/fa";

function Navbar({ toggle }) {
  const [scrollNav, setScrollNav] = useState(false);
  const [Hideitems, setHideItem] = useState(false);

  const changeNav = () => {
 if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  const changeNavv = () => {
    if (window.location.pathname === '/Addstory') {
         setHideItem(true);
       } else {
        setHideItem(false);
       }
     };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
    window.addEventListener("load", changeNavv);
  });

  const toggleHome = () => {
    scroll.scrollToTop();
  };


 

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>
              HOME
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks
                  to="stories"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
        Creepypasta
                </NavLinks>
              </NavItem>
              <NavItem Hideitems={Hideitems}>
                <NavLinks
                  to="publishone"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
              Publish one
                </NavLinks>
              </NavItem>      
            </NavMenu>
            <NavBtn>

              <NavBtnLink to="/SignIn">Sign In</NavBtnLink>
              
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;