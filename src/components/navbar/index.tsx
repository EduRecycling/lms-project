/* eslint-disable @typescript-eslint/no-explicit-any */
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { FaBars, FaX } from "react-icons/fa6";
import { Iconic } from "../landing/style";
import { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Nav } from "./style";
import { UseAuth } from "../../firebase/authFuntions";
import { ThemeContext, ThemeContextType } from "../../context/ThemeContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logOut } = UseAuth();
  const navigate = useNavigate();
  const { setRoutePage } = useContext(ThemeContext) as ThemeContextType;

  const handleSignOut = async () => {
    await logOut()
      .then(() => {
        console.log("User logged out successfully");
        navigate("/login"); // Redirect to the login page after logout
      })
      .catch((error: any) => console.error(error));
  };

  useEffect(() => {
    if (!isOpen) void enableBodyScroll(document.body);
    else void disableBodyScroll(document.body);

    // return disableBodyScroll(document.body);
  });

  return (
    <Nav className="Navbar shadow-md fixed w-full bg-primary-100 flex justify-between p-1 px-10 items-center">
      <NavLink
        onClick={() => {
          setRoutePage("/");
        }}
        to="/"
      >
        <Iconic className="logo i72">
          <img src="/images/logo1.png" alt="..." />
        </Iconic>
      </NavLink>
      <div className={`nav-links ${isOpen && "show-links"}`}>
        <ul className={`flex gap-[28px] items-center`}>
          {user && (
            <li className="font-semibold text-lg hover:font-bold px-3 py-1 hover:text-[##EDEFE8]">
              <NavLink
                onClick={() => {
                  setRoutePage("/dashboard");
                }}
                to="/dashboard"
                className="nav-link"
              >
                Dashboard
              </NavLink>
            </li>
          )}
          <li className="font-semibold text-lg hover:font-bold hover:text-[##EDEFE8]">
            <NavLink
              onClick={() => {
                setRoutePage("/about");
              }}
              to="/About"
            >
              About Us
            </NavLink>
          </li>
          <li className="font-semibold text-lg hover:font-bold hover:text-[##EDEFE8]">
            <NavLink
              onClick={() => {
                setRoutePage("/courses");
              }}
              to="/Courses"
            >
              Courses
            </NavLink>
          </li>
          <li className="font-semibold text-lg hover:font-bold hover:text-[##EDEFE8]">
            <NavLink
              onClick={() => {
                setRoutePage("/help");
              }}
              to="/Help"
            >
              Need Help?
            </NavLink>
          </li>
          {user ? (
            <button
              className="get-started bg-primary-60 text-white p-2 px-3 rounded hover:transition hover:bg-primary-30"
              onClick={handleSignOut}
            >
              Logout
            </button>
          ) : (
            <li className="font-semibold text-lg hover:font-bold hover:text-[##EDEFE8]">
              <NavLink to="/Login">Login</NavLink>
            </li>
          )}
          {!user && (
            <li className="font-semibold text-lg hover:font-bold hover:text-[##EDEFE8]">
              <button
                onClick={() => navigate("/dashboard")}
                className="get-started bg-primary-60 text-white p-2 px-3 rounded hover:transition hover:bg-primary-30"
              >
                Get Started
              </button>
            </li>
          )}
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
