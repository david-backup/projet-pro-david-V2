import { Config } from "@config";
import { Copyright, Version } from "@react/components/common/layout";
import { Button } from "@react/components/common/buttons";
import { FaFacebookF } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="footer_content">
        <div className="footer_content_columns title">
          <h3>David Projects</h3>
          <h4>Développement web</h4>
        </div>
        <div className="footer_content_columns contact">
          <h5>Nous contacter</h5>
          <div className="footer_content_columns_phone">
            <MdOutlinePhoneIphone /> : 06.30.78.82.30
          </div>
          <div className="footer_content_columns_email">
            <MdAlternateEmail /> : david-devcode@ovh.fr
          </div>
          <Button type={"submit"} className={"button"} text={"contact"} />
        </div>
        <div className="footer_content_columns links">
          <h5>Nous suivre</h5>
          <a
            href="https://www.facebook.com/david.723751?locale=fr_FR"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="footer_content_columns_links"
          >
            <FaFacebookF />
            <p>Facebook</p>
          </a>
          <a
            href="https://twitter.com/DavidChangea"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="footer_content_columns_links"
          >
            <FaTwitter />
            <p>Twitter</p>
          </a>
          <a
            href="https://github.com/david-backup"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="footer_content_columns_links"
          >
            <FaGithub />
            <p>GitHub</p>
          </a>
          <a
            href="www.linkedin.com/in/david-changea"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="footer_content_columns_links"
          >
            <FaLinkedinIn />
            <p>Linkedin</p>
          </a>
        </div>
        <div className="footer_content_columns copyright">
          <Copyright />
        </div>
      </div>
      <div className="mentions">
        {<Version version={Config.version} date={"01/05/2024"} />}
        <div className="mentions_div">Mentions légales</div>
      </div>
    </footer>
  );
};

export default Footer;
