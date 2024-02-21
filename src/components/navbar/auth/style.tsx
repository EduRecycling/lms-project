import styled from "styled-components";

export const Nav = styled.div`
  & {
    z-index: 1000;
  }

  & a:hover,
  & a:active,
  & a.active {
    font-weight: 500;
  }

  & .inner-t ul li {
    padding: 0.62rem 1.2rem;
    padding-left: 0.55rem;
  }

  & .inner-t ul li a {
    width: 100%;
  }

  & .inner-t ul li:hover {
    background-color: #5d5b5b1f;
    border-radius: 4px;
  }

  @media (min-width: 721px) {
    & .menu-btn {
      display: none;
    }

    & .inner-t:not(.t-visible) {
      display: none;
      visibility: hidden;
      opacity: none;
    }
  }

  @media (min-width: 1241px) {
    & button.proof.profile {
      display: none;
    }
  }

  @media (max-width: 1240px) {
    &.duke {
      position: relative;
    }

    & .screen-m {
      flex-direction: column;
      position: absolute;
      top: 4.5rem;
      right: 1rem;
      align-items: start;

      border: 1px solid #edf2f7;

      border-radius: 1.25rem;
      padding: 1rem 0.8rem;

      z-index: 1000;

      flex-direction: column-reverse;
      overflow: hidden;

      height: 0;
      visibility: hidden;

      background-color: #fff;
    }

    & .screen-m.dark {
      background-color: #171515;
      border-color: #332e2e;
    }

    & .screen-m.show {
      transition: 0.3s ease-in;
      transition-property: height opacity visibility;

      height: fit-content;
      visibility: visible;
    }

    & .screen-m .notice-btn {
      width: 100%;
      border: none !important;
      display: flex;
      gap: 0.5rem;
    }

    & .inner-t {
      position: relative;
      width: 100%;
      top: 0;
      /* background-color: transparent !important; */
      border: none !important;
      margin: 0 !important;
      padding: 0 !important;
    }
  }

  @media (max-width: 720px) {
    & .nav-links {
      position: absolute;
      background-color: #ffffff;
      top: 80px;
      left: 0;
      right: 0;
      bottom: 0;
      overflow-y: auto;
      height: 100svh;
      min-height: 100%;
      max-height: 100svh;
      width: 100%;

      padding: 40px 20px;

      visibility: hidden;
      opacity: 0;
      z-index: -1000;

      flex-direction: column;
      justify-content: start;
      gap: 0;

      overflow: hidden;
      height: 0;
    }

    & .nav-links.show-links {
      transition: 0.3s ease-in opacity visibility z-index;
      visibility: visible;
      opacity: 1;

      z-index: 1000;
      overflow: auto;
      height: 100svh;
    }

    & .nav-links ul.main {
      flex-direction: column;
      align-items: start;
    }

    & .screen-m {
      position: relative;
      border: 0;
      top: 0;

      height: fit-content;
      visibility: visible;

      border-radius: 0;
      margin-top: 20px;
      border-top: 1px solid #000;
    }

    & button.proof.profile {
      display: none;
    }

    & .ic .down-btn {
      display: none;
      visibility: hidden;
      opacity: 0;
    }
  }
`;
