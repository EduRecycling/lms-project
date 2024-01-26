import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { FaBars, FaX } from "react-icons/fa6";
import { Iconic } from "../landing/style";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) void enableBodyScroll(document.body);
    else void disableBodyScroll(document.body);

    // return disableBodyScroll(document.body);
  });

  return (
    <Nav className="Navbar shadow-md fixed w-full bg-primary-100 flex justify-between p-1 px-10 items-center">
      <Iconic className="logo i72">
        <img src="/images/logo1.png" alt="..." />
      </Iconic>
      <div className={`nav-links ${isOpen && "show-links"}`}>
        <ul className={`flex gap-[28px] items-center`}>
          <li className="font-semibold text-lg hover:font-bold hover:text-[##EDEFE8]">
            <Link to="/About">About Us</Link>
          </li>
          <li className="font-semibold text-lg hover:font-bold hover:text-[##EDEFE8]">
            <Link to="/Courses">Courses</Link>
          </li>
          <li className="font-semibold text-lg hover:font-bold hover:text-[##EDEFE8]">
            <Link to="/Help">Need Help?</Link>
          </li>
          <li className="font-semibold text-lg hover:font-bold hover:text-[##EDEFE8]">
            <Link to="/Login">Login</Link>
          </li>
          <li className="font-semibold text-lg hover:font-bold hover:text-[##EDEFE8]">
            <button className="get-started bg-primary-60 text-white p-2 px-3 rounded hover:transition hover:bg-primary-30">
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
  & {
    z-index: 1000;
  }

  @media (min-width: 721px) {
    & .menu-btn {
      display: none;
    }
  }

  @media (max-width: 720px) {
    & .nav-links {
      position: absolute;
      background-color: #fbfcfaf1;
      top: 80px;
      left: 0;
      right: 0;
      bottom: 0;
      overflow-y: auto;
      height: calc(100svh - 80px);
      min-height: 100%;
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
