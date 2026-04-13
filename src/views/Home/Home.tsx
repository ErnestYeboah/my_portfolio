import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../../components/Navbar";
import SocialLinks from "../../components/SocialLinks";
import "./home.css";
import WorksWrapper from "./WorksWrapper";
import { FaFilePdf } from "react-icons/fa";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash !== "#contact") return;

    const contactSection = document.getElementById("contact");
    if (!contactSection) return;

    const timeoutId = window.setTimeout(() => {
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);

    return () => window.clearTimeout(timeoutId);
  }, [location.hash]);

  return (
    <>
      <Navbar />
      <div className="hero_section">
        <div>
          <h1 className="text-4xl max-[992px]:text-center font-medium my-4 ">
            FULLSTACK DEVELOPER & <br />{" "}
            <span className="title_span">MOBILE DEVELOPER</span>
          </h1>
          <p>
            I build clean, user-friendly, and performant web applications and
            also mobile applications using flutter. I love crafting intuitive
            UI/UX experiences, an authentication system, optimizing performance,
            and staying up-to-date with the latest web technologies.
          </p>
        </div>
        <figure data-aos="fade-up-left" className="mt-4">
          <img src="/images/profile.png" alt="profile_image" />
        </figure>
        <SocialLinks />
      </div>
      <WorksWrapper />

      <footer id="contact" className="p-(--padding) shapedividers_com-6349">
        <h1
          data-aos="fade-up"
          data-aos-duration="2000"
          className="text-8xl max-[992px]:text-5xl text-wrap mb-10 text-center font-medium"
        >
          LET'S BUILD SOMETHING TOGETHER
        </h1>
        <div className="flex justify-center mb-10  items-center gap-3">
          <button className="bg-(--accent-color) rounded-[10px]  px-[1.2rem] py-2 hover:scale-105 transition duration-200">
            <a
              className="gmail_link"
              rel="noopener noreferrer"
              target="_blank"
              href="mailto:yeboahernest246@gmail.com"
            >
              Send a message
            </a>
          </button>
          <button className="outline outline-(--accent-color) px-[1.2rem] rounded-[10px] py-2 hover:scale-105 transition duration-200">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="/images/Ernest Yeboah Resume.pdf"
              className="text-center   flex items-center gap-2 "
            >
              <FaFilePdf className="text-red-500" /> View My Resume
            </a>
          </button>
        </div>
        <SocialLinks />
      </footer>
    </>
  );
};

export default Home;
