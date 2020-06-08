import styled from 'styled-components';

export const Login = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10000;
  background-color: black;

  a {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-decoration: none;
    color: white;
    letter-spacing: 1px;
    border: 3px solid white;
    background-color: royalblue;
    padding: 10px 15px;
    border-radius: 30px;
    font-size: 40px;
    transition: 0.2s;

    &:hover {
      transform: translate(-50%, -50%) scale(1.2);
      transform-origin: 50% 50%;
    }
  }

  @media (max-width: 1024px) {
    a {
      width: 220px;
      font-size: 20px;
      padding: 5px 10px;
      border-width: 2px;
      text-align: center;
    }
  }
`;
