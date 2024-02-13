import { Iconic } from "../../landing/style";
import { CgProfile } from "react-icons/cg";
import { AiOutlineLogout } from "react-icons/ai";
import {
  FaBars,
  FaX,
  FaChevronUp,
  FaChevronDown,
  FaCertificate,
  FaComment,
} from "react-icons/fa6";
import { useContext, useEffect, useState } from "react";
import { Nav } from "./style";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { NavLink } from "react-router-dom";
import { ThemeContext, ThemeContextType } from "../../../context/ThemeContext";

const Navbar = () => {
  const [more, setMore] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [veil, setVeil] = useState(false);

  const { theme } = useContext(ThemeContext) as ThemeContextType;

  useEffect(() => {
    if (!isOpen) void enableBodyScroll(document.body);
    else void disableBodyScroll(document.body);

    // return disableBodyScroll(document.body);
  });

  return (
    <>
      <Nav
        className={`Navbar fixed w-full flex justify-between p-2 px-[4rem] items-center bg-[background] shadow-sm`}
      >
        <div className="logo">
          <Iconic className="logo i72">
            <img src="/images/logo1.png" alt="..." />
          </Iconic>
        </div>
        <button
          className={`menu-btn text-3xl transition ${
            isOpen ? "text-red-500" : ""
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {!isOpen ? <FaBars /> : <FaX />}
        </button>

        <div className={`nav-links ${isOpen && "show-links"} flex gap-10`}>
          <ul className={`main flex gap-[0.65rem] items-center`}>
            <li className="font-semibold text-lg hover:font-bold px-3 py-1">
              <NavLink to="/student/dashboard" className="nav-link">
                Dashboard
              </NavLink>
            </li>
            <li className="font-semibold text-lg hover:font-bold px-3 py-1">
              <NavLink to="/student/explore" className="nav-link">
                Explore Courses
              </NavLink>
            </li>
            <li className="font-semibold text-lg hover:font-bold px-3 py-1">
              <NavLink to="/student/notes" className="nav-link">
                Notes
              </NavLink>
            </li>
          </ul>
          <div className="profile">
            <div
              className={`screen-m ${show && "show"} ${
                theme === "dark" && "dark"
              } flex items-center gap-[1.38rem] self-stretch`}
            >
              <div className="user-profile relative">
                <button
                  onClick={() => {
                    setMore(!more);

                    setTimeout(() => {
                      setMore(false);
                    }, 10000);
                  }}
                  className="profile-btn p-[0.38rem] rounded-[2.375rem]"
                >
                  <span className="dit flex items-center gap-[0.75rem]">
                    <div className="icon w-[2.575rem] h-[2.575rem] rounded-[50%] overflow-hidden">
                      <img
                        src="/images/profile.png"
                        className="w-full h-full object-cover"
                        alt="..."
                      />
                    </div>
                    <div className="p flex gap-[0.8rem] items-center">
                      <div
                        className="b flex flex-col justify-end items-end"
                        style={{
                          lineHeight: "1.25rem",
                        }}
                      >
                        <h4 className="name font-semibold">Justin Bergson</h4>
                        <p>Justin@gmail.com</p>
                      </div>
                      <div className="ic">
                        <div className="down-btn w-[1.45rem] h-[1.45rem] grid place-content- place-items-center rounded-full">
                          {more ? <FaChevronUp /> : <FaChevronDown />}
                        </div>
                      </div>
                    </div>
                  </span>
                </button>
                <div
                  className={`inner-t absolute mt-1 right-0 w-fit p-[0.85rem] pt-[0.5rem] rounded-lg bg-[#fff] ${
                    more && "t-visible"
                  }`}
                  style={{
                    border: `1px solid ${
                      theme !== "dark" ? "#E1DFDF" : "#332e2e"
                    }`,
                  }}
                >
                  <ul className="limo relative flex flex-col w-full gap-[0.35rem] p-2">
                    <li>
                      <NavLink
                        to="/student/profile"
                        className="flex items-center gap-[0.5rem] text-lg capitalize"
                      >
                        <span className="icon">
                          <CgProfile />
                        </span>
                        <span>View Profile</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/student/feedback"
                        className="flex items-center gap-[0.5rem] text-lg capitalize"
                      >
                        <span className="icon">
                          <FaComment />
                        </span>
                        <span>Give Feedback</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/student/certificate"
                        className="flex items-center gap-[0.5rem] text-lg capitalize"
                      >
                        <span className="icon">
                          <FaCertificate />
                        </span>
                        <span>Certificate</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/logout"
                        className="flex items-center gap-[0.5rem] text-lg capitalize"
                      >
                        <span className="icon">
                          <AiOutlineLogout />
                        </span>
                        logout
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <button
              className="proof profile"
              onClick={() => {
                setVeil(true);
                setShow(!show);
              }}
            >
              <div
                className="icon w-[2.575rem] h-[2.575rem] rounded-[50%] overflow-hidden"
                style={{
                  border: "0px solid blue",
                }}
              >
                <img
                  src="/images/profile.png"
                  className="w-full h-full object-cover"
                  alt="..."
                />
              </div>
            </button>
          </div>
        </div>
      </Nav>
      <div
        className="veil fixed top-0 buttom-0 left-0 right-0 bg-[#0000003a] w-full h-full"
        style={{
          zIndex: veil ? "100" : "-1000",
          opacity: veil ? "1" : "0",
        }}
        onClick={() => {
          setShow(false);

          setVeil(false);
        }}
      ></div>
    </>
  );
};

export default Navbar;