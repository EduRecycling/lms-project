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
  @media (max-width: 600px) {
    & {
      flex-direction: column;
    }

    &.reverse {
      flex-direction: column-reverse;
    }

    & .bend-cent {
      flex-direction: row;
      gap: 10px;
      flex-wrap: wrap;
      align-items: center;
    }
  }
`;

// eslint-disable-next-line react-refresh/only-export-components
export const Heading = {
  h1: styled.span`
    & {
      font-size: 100px;
    }
  `,

  h2: styled.span`
    & {
      font-size: calc(20px + 1.25vmin);
    }
  `,

  h3: styled.span`
    & {
      font-size: 60px;
    }
  `,

  h4: styled.span`
    & {
      font-size: 40px;
    }
  `,

  h5: styled.span`
    & {
      font-size: 20px;
    }
  `,
};
