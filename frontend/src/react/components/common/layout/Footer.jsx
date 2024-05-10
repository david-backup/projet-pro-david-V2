import { Config } from "@config";
import { Copyright, Version } from "@react/components/common/layout";
import { Button, BackToTopButton } from "@react/components/common/buttons";
import { NewLetter } from "@react/components/newLetter";
import { FaFacebookF } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { ImFileText2 } from "react-icons/im";
import { IoIosMailUnread } from "react-icons/io";
import { LuExternalLink } from "react-icons/lu";

const Footer = () => {
  return (
    <footer>
      <div className="footer_content">
        <div className="footer_content_columns title">
          <h3>David Projects</h3>
          <h4>Développement web</h4>
          <Button type={"submit"} className={"button"} text={"Espace client"} />
        </div>
        <div className="footer_content_columns contact">
          <div className="contact_title">
            <IoIosMailUnread className="contact_icons" />
            <h5>Nous contacter</h5>
          </div>
          <div className="footer_content_columns_phone">
            <MdOutlinePhoneIphone className="contact_icons" /> 06.30.78.82.30
          </div>
          <div className="footer_content_columns_email">
            <MdAlternateEmail className="contact_icons" />
            david-devcode@ovh.fr
          </div>
          <Button type={"submit"} className={"button"} text={"contact"} />
        </div>
        <div className="footer_content_columns links">
          <div className="links_title">
            <LuExternalLink className="links_icons" />
            <h5>Nous suivre</h5>
          </div>
          <a
            href="https://www.facebook.com/david.723751?locale=fr_FR"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="footer_content_columns_links"
          >
            <FaFacebookF className="links_icons" />
            <p>Facebook</p>
          </a>
          <a
            href="www.linkedin.com/in/david-changea"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="footer_content_columns_links"
          >
            <FaLinkedinIn className="links_icons" />
            <p>Linkedin</p>
          </a>
          <a
            href="https://twitter.com/DavidChangea"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="footer_content_columns_links"
          >
            <FaTwitter className="links_icons" />
            <p>Twitter</p>
          </a>
          <a
            href="https://github.com/david-backup"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="footer_content_columns_links"
          >
            <FaGithub className="links_icons" />
            <p>GitHub</p>
          </a>
        </div>
        <div className="footer_content_columns newLetter">
          <div className="newLetter_title">
            <ImFileText2 className="newLetter_icons" />
            <h5>Newsletter</h5>
          </div>
          <NewLetter />
        </div>
      </div>
      <div className="mentions">
        {<Version version={Config.version} date={"01/05/2024"} />}
        <p>||</p>
        <div className="mentions_div">Mentions légales</div>
        <Copyright />
        <BackToTopButton />
      </div>
    </footer>
  );
};

export default Footer;
