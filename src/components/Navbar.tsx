import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  function handleContactClick(event: React.MouseEvent<HTMLAnchorElement>) {
    if (location.pathname !== "/") {
      navigate("/#contact");
      return;
    }

    event.preventDefault();

    const contactSection = document.getElementById("contact");
    if (!contactSection) return;

    contactSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <nav className="navbar w-[98%] mx-auto p-(--padding-min) flex items-center justify-between border-b border-b-gray-200">
      <h3 data-aos="fade-right" className="text-2xl">
        ERNEST YEBOAH
      </h3>
      <div className="navlinks flex gap-4 ">
        <Link data-aos-delay="300" data-aos="fade-up" to="/">
          HOME
        </Link>
        <Link data-aos-delay="400" data-aos="fade-up" to="/about">
          ABOUT
        </Link>
        <Link
          data-aos-delay="500"
          data-aos="fade-up"
          to="/#contact"
          onClick={handleContactClick}
        >
          CONTACT
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
