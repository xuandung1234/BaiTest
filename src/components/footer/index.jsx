import logoFooter from "../../assets/logoFooter.svg";
import linkedinIcon from "../../assets/icon/linkedin.svg";
import twitterIcon from "../../assets/icon/twitter.svg";
import youtubeIcon from "../../assets/icon/youtube.svg";
import { FooterContainer, FooterContent } from "./footer.style";
import { UseMediaQuery } from "../../hooks";

const Footer = () => {
  const { isMobile } = UseMediaQuery();

  return (
    <FooterContainer>
      <div className="content-footer">
        <div>
          <img src={logoFooter} className="logo-footer" />
          <p className="text-address">Valletta Buildings, South Street, Valletta - VLT 1103 Malta</p>
          {isMobile && (
            <p className="text-address">
              COPYRIGHT © 2015-2024 ALL RIGHTS RESERVED.
            </p>
          )}
          <div className="icon">
            <img src={twitterIcon} alt="Twitter" />
            <img src={youtubeIcon} alt="YouTube" />
            <img src={linkedinIcon} alt="LinkedIn" />
          </div>
        </div>
        <FooterContent>
          <div>
            <h5>WEB MAP</h5>
            <i className="fa-solid fa-plus"></i>
            <p>Home</p>
            <p>Games</p>
            <p>News</p>
            <p>Math</p>
            <p>Company</p>
            <p>Events</p>
            <p>Partners</p>
          </div>
          <div>
            <h5>ABOUT US</h5>
            <i className="fa-solid fa-plus"></i>
            <p>Licensing</p>
            <p>Certification</p>
            <p>Responsible Gaming</p>
            <p>Exhibitions</p>
            <p>Copyright Protection</p>
            <p>Privacy Policy</p>
          </div>
          <div>
            <h5>EVENTS</h5>
            <i className="fa-solid fa-plus"></i>
            <p>PG ICE 2017</p>
            <p>PG ICE 2018</p>
            <p>PG ICE 2019</p>
            <p>About ICE</p>
          </div>
          <div>
            <h5>OUR PARTNERS</h5>
            <i className="fa-solid fa-plus"></i>
            <p>Relax Gaming</p>
            <p>Leander Games</p>
          </div>
        </FooterContent>
      </div>

      <div className="footer-copyright">
        {!isMobile && (
          <p>
            COPYRIGHT © 2015-2024 ALL RIGHTS RESERVED.
          </p>
        )}
      </div>

    </FooterContainer>
  );
};

export default Footer;
