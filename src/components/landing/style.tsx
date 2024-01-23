import styled from "styled-components";

export const BtnIcon = styled.button`
  & {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;

    border-radius: 50%;

    font-size: 2em;
    padding: 2px;
  }
`;

export const Iconic = styled.div`
  & {
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
  }

  &.circle {
    border-radius: 50%;
  }

  &.i45 {
    width: 45px;
    height: 45px;
  }

  &.i72 {
    width: 72px;
    height: 72px;
  }

  &.i90 {
    width: 90px;
    height: 90px;
  }

  &.i100 {
    width: 100px;
    height: 100px;
  }

  &.i120 {
    width: 120px;
    height: 120px;
  }

  &.adjust-size {
    width: calc(50px + 2vmin);
    height: calc(50px + 2vmin);
  }
`;

export const Bend = styled.div`
  @media (max-width: 750px) {
    &.m750 {
      flex-direction: column;
    }

    &.m750.reverse {
      flex-direction: column-reverse;
    }

    &.m750 .bend-cent {
      flex-direction: row;
      gap: 10px;
      flex-wrap: wrap;
      align-items: center;
    }
  }

  @media (max-width: 840px) {
    &.m840 {
      flex-direction: column;
    }

    &.m840.reverse {
      flex-direction: column-reverse;
    }

    &.m840 .bend-cent {
      flex-direction: row;
      gap: 10px;
      flex-wrap: wrap;
      align-items: center;
    }
  }

  & .let {
    justify-content: space-evenly;
  }

  @media (max-width: 1300px) {
    & .let {
      justify-content: start !important;
    }
  }

  @media (max-width: 600px) {
    &:not(.m750),
    &:not(.m840) {
      flex-direction: column;
    }

    &:not(.m750) .reverse,
    &:not(.m840) .reverse {
      flex-direction: column-reverse;
    }

    &:not(.m750) .bend-cent,
    &:not(.m840) .bend-cent {
      flex-direction: row;
      gap: 10px;
      flex-wrap: wrap;
      align-items: center;
    }
  }
`;

// eslint-disable-next-line react-refresh/only-export-components
export const Heading = {
  h1: styled.h1`
    & {
      font-size: calc(32px + 1.25vmin);
    }
  `,

  h2: styled.h2`
    & {
      font-size: calc(24px + 2.05vmin);
    }
  `,

  h3: styled.h3`
    & {
      font-size: calc(20px + 1.25vmin);
    }
  `,

  h4: styled.h4`
    & {
      font-size: 18px;
    }
  `,

  h5: styled.h5`
    & {
      font-size: 12px;
    }
  `,
};

export const Shorthen = styled.div`
  & {
    overflow: hidden;
  }

  &.full {
    height: fit-content !important;
    max-height: fit-content !important;
    min-height: fit-content !important;
  }
`;

export const CustomScroll = styled.div`
  & {
    scrollbar-width: 10px;
    scrollbar-color: transparent;
    scrollbar-base-color: transparent;
  }

  &::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--scroll-bar-color);
    width: 8px;
    height: 8px;
  }
`;
