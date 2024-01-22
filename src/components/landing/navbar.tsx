import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { FaBars, FaX } from "react-icons/fa6";
import logo from "../../assets/logo.png";
import { Iconic } from "./style";
import styled from "styled-components";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) void enableBodyScroll(document.body);
    else void disableBodyScroll(document.body);

    // return disableBodyScroll(document.body);
  });

  return (
    <Nav className="Navbar flex justify-between p-3 px-10 items-center">
      <Iconic className="logo i72">
        <img src={logo} alt="..." />
      </Iconic>
      <div className={`nav-links ${isOpen && "show-links"}`}>
        <ul className={`flex gap-[28px] items-center`}>
          <li className="font-semibold text-lg hover:font-bold hover:text-[##EDEFE8]">
            <a href="/About">About Us</a>
          </li>
          <li className="font-semibold text-lg hover:font-bold hover:text-[##EDEFE8]">
            <a href="/Courses">Courses</a>
          </li>
          <li className="font-semibold text-lg hover:font-bold hover:text-[##EDEFE8]">
            <a href="/Help">Need Help?</a>
          </li>
          <li className="font-semibold text-lg hover:font-bold hover:text-[##EDEFE8]">
            <a href="/Login">Login</a>
          </li>
          <li className="font-semibold text-lg hover:font-bold hover:text-[##EDEFE8]">
            <button className="get-started bg-[#98D685] text-white p-2 px-3 rounded hover:transition hover:bg-[#082100]">
              Get Started
            </button>
          </li>
        </ul>
      </div>
      <button
        className={`menu-btn text-3xl transition ${
          isOpen ? "text-red-500" : ""
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {!isOpen ? <FaBars /> : <FaX />}
      </button>
    </Nav>
  );
};

const Nav = styled.div`
  @media (min-width: 721px) {
    & .menu-btn {
      display: none;
    }
  }

  @media (max-width: 720px) {
    & .nav-links {
      position: absolute;
      background-color: #f6fdf3e1;
      top: 95px;
      left: 0;
      right: 0;
      bottom: 0;
      height: 100%;
      width: 100%;

      padding: 40px 20px;

      visibility: hidden;
      opacity: 0;
      z-index: -1000;
    }

    & .nav-links.show-links {
      transition: 0.3s ease-in opacity visibility z-index;
      visibility: visible;
      opacity: 1;

      z-index: 1000;
    }

    & .nav-links ul {
      flex-direction: column;
    }
  }
`;

export default Navbar;
