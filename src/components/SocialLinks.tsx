import { BiLogoGmail } from "react-icons/bi";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaPhoneAlt,
} from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className="social_links col-span-2 items-center flex max-[992px]:overflow-x-scroll gap-4 justify-center ">
      <a
        className="social_link"
        rel="noopener noreferrer"
        href="https://web.facebook.com/people/Ernest-Yeboah/pfbid04UudmeQN7w1tYb63DCwmzspcLsP5DemXggA5EUT7se2VyfXqCi3ebde1B8V49RJDl/"
      >
        <FaFacebookF className="icon" />
        Facebook
      </a>
      <a
        className="social_link"
        rel="noopener noreferrer"
        href="mailto:yeboahernest246@gmail.com"
      >
        <BiLogoGmail className="icon" />
        yeboahernest246@gmail.com
      </a>
      <a
        className="social_link"
        target="_blank"
        rel="noopener noreferrer"
        href="www.linkedin.com/in/ernest-kwame-yeboah-93303b304"
      >
        <FaLinkedinIn className="icon" /> LinkedIn
      </a>
      <a
        className="social_link"
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/ErnestYeboah"
      >
        <FaGithub className="icon" />
        GitHub
      </a>

      <a
        className="social_link"
        target="_blank"
        rel="noopener noreferrer"
        href="tel:0591431484"
      >
        <FaPhoneAlt />
        0591431484
      </a>
    </div>
  );
};

export default SocialLinks;
