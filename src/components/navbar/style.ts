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

  @media (min-width: 721px) {
    & .menu-btn {
      display: none;
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

      flex-direction: column-reverse;
      justify-content: start;
      gap: 0;

      overflow: scroll;
    }

    & .nav-links.show-links {
      transition: 0.3s ease-in opacity visibility z-index;
      visibility: visible;
      opacity: 1;

      z-index: 1000;
    }

    & .nav-links ul {
      flex-direction: column;
      align-items: start;
    }
  }
`;
