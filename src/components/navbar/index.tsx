import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { FaBars, FaX } from "react-icons/fa6";
import { Iconic } from "../landing/style";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Nav } from "./style";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) void enableBodyScroll(document.body);
    else void disableBodyScroll(document.body);

    // return disableBodyScroll(document.body);
  });

  return (
    <Nav className="Navbar shadow-md fixed w-full bg-primary-100 flex justify-between p-1 px-10 items-center">
      <NavLink to="/">
        <Iconic className="logo i72">
          <img src="/images/logo1.png" alt="..." />
        </Iconic>
      </NavLink>
      <div className={`nav-links ${isOpen && "show-links"}`}>
        <ul className={`flex gap-[28px] items-center`}>
          <li className="font-semibold text-lg hover:font-bold hover:text-[##EDEFE8]">
            <NavLink to="/About">About Us</NavLink>
          </li>
          <li className="font-semibold text-lg hover:font-bold hover:text-[##EDEFE8]">
            <NavLink to="/Courses">Courses</NavLink>
          </li>
          <li className="font-semibold text-lg hover:font-bold hover:text-[##EDEFE8]">
            <NavLink to="/Help">Need Help?</NavLink>
          </li>
          <li className="font-semibold text-lg hover:font-bold hover:text-[##EDEFE8]">
            <NavLink to="/Login">Login</NavLink>
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
export default Navbar;
