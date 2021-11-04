import {FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp, } from "react-icons/fa";
import { FooterContainer,FooterLink, FooterLinkItems,FooterLinksContainer,FooterLinksWrapper,FooterLinkTitle,FooterWrap,SocialIconLink,SocialIcons,SocialLogo,SocialMedia,SocialMediaWrap,WebsiteRights,} from "./FooterElements";
import { animateScroll as scroll } from "react-scroll";

function Footer() { const toggleHome = () => {   scroll.scrollToTop();  };

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>

              <FooterLink to="/signin">Investments</FooterLink>
              <FooterLink to="/signin">Careers</FooterLink>
              <FooterLink to="/signin">FAQS</FooterLink>
            </FooterLinkItems>

            <FooterLinkItems>
              <FooterLinkTitle>Connect</FooterLinkTitle>
          
              <FooterLink to="/https://www.facebook.com/profile.php?id=100002278879305">Facebook</FooterLink>
              <FooterLink to="/signin">Instagram</FooterLink>
              <FooterLink to="/https://www.linkedin.com/in/soufiane-jaida-576a2b14b/">LinkedIn</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>

          <FooterLinksWrapper>

            <FooterLinkItems>
              <FooterLinkTitle>Contact </FooterLinkTitle>

              <FooterLink>514-294-8182</FooterLink>
              <FooterLink>s.f.j.dsapro@gmail.com</FooterLink>

            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>

        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
             Escape Rooms
            </SocialLogo>
            <WebsiteRights>
              SoufianeJD. All Rights Reserved © {new Date().getFullYear()}
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink to="https://www.facebook.com/profile.php?id=100002278879305">
                <FaFacebook />{" "}
              </SocialIconLink>
              <SocialIconLink to="/">
                <FaTwitter />{" "}
              </SocialIconLink>
              <SocialIconLink to="/">
                <FaInstagram />{" "}
              </SocialIconLink>
              <SocialIconLink to="/">
                <FaLinkedin />{" "}
              </SocialIconLink>
              <SocialIconLink to="/">
                <FaWhatsapp />{" "}
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
}

export default Footer;