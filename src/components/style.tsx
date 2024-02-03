import styled from "styled-components";

export const Nav = styled.div`
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
      /* background-color: #fbfcfaf1; */
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
      background-color: transparent !important;
      border: none !important;
      margin: 0 !important;
      padding: 0 !important;
    }
  }
`;
