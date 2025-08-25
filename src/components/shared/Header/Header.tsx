import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import "./hader.css";
import { User } from "lucide-react";

function Header({ schangebackground }: { schangebackground: string }) {
  const headerRef = useRef<HTMLElement | null>(null);
  const [openNav, setOpenNav] = useState(false);
  const [activeLinke, setActiveLinke] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        headerRef.current.style.background = window.scrollY
          ? "#D39C80"
          : schangebackground;

        headerRef.current.style.color = window.scrollY ? "#f8f2EE" : "#353431";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [schangebackground]);

  useEffect(() => {
    const handleClikOutSide = (e: MouseEvent) => {
      const target = e.target as Element | null;
      if (
        openNav &&
        target &&
        !target.closest(".nav-links") &&
        !target.closest(".menu-icon")
      ) {
        setOpenNav(false);
      }
    };

    window.addEventListener("click", handleClikOutSide);

    return () => {
      window.removeEventListener("click", handleClikOutSide);
    };
  }, [openNav]);
  const Links = [
    { linkname: "Home", to: "/" },
    { linkname: "Offers", to: "/Offers" },
    { linkname: "Contact", to: "/ Contact" },
    { linkname: "About", to: "/Contact" },
  ];

  function handleActiveLinke(link: string) {
    setActiveLinke(link);
  }
  function toggleNav() {
    setOpenNav(!openNav);
  }
  return (
    <header ref={headerRef} className="header ">
      <Link to={"/"} className="logo font-2 ">
        Our journey
      </Link>
      <nav>
        <ul className={`nav-links ${openNav === true ? "show" : ""}`}>
          {Links.map((link, index) => {
            return (
              <li key={index}>
                <NavLink
                  onClick={() => handleActiveLinke(link.linkname)}
                  to={link.to}
                  className={`nav-link ${
                    activeLinke === link.linkname ? "active" : ""
                  } ${openNav ? "show" : ""}`}
                >
                  {link.linkname}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="icon-links">
        <Link to={"/"}>
          <User />
        </Link>

        <div onClick={toggleNav} className="menu-icon">
          {[1, 2, 3].map((_, index) => (
            <span
              key={index}
              className={`menu-bar ${openNav ? "active-menu" : ""}`}
            ></span>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Header;
