import React, { useState, useEffect } from "react";
import colors from "../styles/colors";
import Logo from "../assets/Icon.png";
import Nombre from "../assets/Nombre.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const headerStyle = {
  backgroundColor: colors.primary,
  color: colors.white,
} as const;

const nav = {
  home: "Home",
  about: "Acerca de Nosotros",
  signIn: "Iniciar Sesión",
  signUp: "Crear Cuenta",
  contact: "Contáctenos",
} as const;

const Header: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleResize = () => {
    const width = window.innerWidth;
    setIsMobile(width <= 768);
    setIsTablet(width > 768 && width < 992);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header
      className="navbar d-flex justify-content-between align-items-center"
      style={{
        ...headerStyle,
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
        padding: "10px 20px",
        boxSizing: "border-box",
      }}
    >
      <h1 className={isMobile ? "ms-3" : "ms-5"}>
        {isMobile ? (
          <img
            src={Logo}
            alt="Logo"
            width="40"
            height="40"
            className="d-inline-block align-text-top me-2"
          />
        ) : isTablet ? (
          <img
            src={Logo}
            alt="Logo"
            width="60"
            height="60"
            className="d-inline-block align-text-top me-4"
          />
        ) : (
          <img
            src={Logo}
            alt="Logo"
            width="80"
            height="80"
            className="d-inline-block align-text-top me-5"
          />
        )}
        {isMobile ? (
          <img
            src={Nombre}
            alt="Entre Amigos"
            width="120"
            className="d-inline-block align-text-top"
          />
        ) : isTablet ? (
          <img
            src={Nombre}
            alt="Entre Amigos"
            width="210"
            className="d-inline-block align-text-top"
          />
        ) : (
          <img
            src={Nombre}
            alt="Entre Amigos"
            width="230"
            className="d-inline-block align-text-top"
          />
        )}
      </h1>
      {isMobile && (
        <FontAwesomeIcon
          icon={faBars}
          style={{ color: headerStyle.color, cursor: "pointer" }}
          className="ms-auto me-3"
          onClick={toggleMenu}
        />
      )}
      {isMobile && showMenu && (
        <nav
          style={{
            position: "fixed",
            top: "60px",
            right: "0",
            width: "190px",
            backgroundColor: headerStyle.backgroundColor,
            zIndex: 1000,
            textAlign: "center",
          }}
        >
          <ul
            style={{ color: headerStyle.color }}
            className="nav dropdown-menu"
          >
            <li className="dropdown-item">
              <a className="nav-link active" aria-current="page" href="#">
                {nav.home}
              </a>
            </li>
            <li className="dropdown-item">
              <a className="nav-link active" aria-current="page" href="#">
                {nav.about}
              </a>
            </li>
            <li className="dropdown-item">
              <a className="nav-link active" aria-current="page" href="#">
                {nav.signIn}
              </a>
            </li>
            <li className="dropdown-item">
              <a className="nav-link active" aria-current="page" href="#">
                {nav.signUp}
              </a>
            </li>
            <li className="dropdown-item">
              <a className="nav-link active" aria-current="page" href="#">
                {nav.contact}
              </a>
            </li>
          </ul>
        </nav>
      )}
      {!isMobile && (
        <nav className="me-5">
          <ul
            style={{ color: headerStyle.color }}
            className="nav"
          >
            <li className="nav-item">
              <a style={{ color:headerStyle.color }} className="nav-link active" aria-current="page" href="#">
                {nav.home}
              </a>
            </li>
            <li className="nav-item">
              <a style={{ color:headerStyle.color }} className="nav-link active" aria-current="page" href="#">
                {nav.about}
              </a>
            </li>
            <li className="nav-item">
              <a style={{ color:headerStyle.color }} className="nav-link active" aria-current="page" href="#">
                {nav.signIn}
              </a>
            </li>
            <li className="nav-item">
              <a style={{ color:headerStyle.color }} className="nav-link active" aria-current="page" href="#">
                {nav.signUp}
              </a>
            </li>
            <li className="nav-item">
              <a style={{ color:headerStyle.color }} className="nav-link active" aria-current="page" href="#">
                {nav.contact}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
