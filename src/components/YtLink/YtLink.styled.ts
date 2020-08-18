import styled from "styled-components";

export const Yt = styled.a`
  position: absolute;
  width: 60px;
  height: 40px;
  bottom: 20px;
  left: 40px;

  img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;
