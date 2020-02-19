import React from 'react';
import styled from 'styled-components';

const LoginView = styled.div`

  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10000;
  background-color: black;

  > a {
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
    transition: .2s;

    &:hover {
      transform: translate(-50%, -50%) scale(1.2);
      transform-origin: 50% 50%;
    }
  }
`;

const LoginPage = () => {
  return (
    <LoginView>
      <a className="login-link" href="http://localhost:8888/login">Login with Spotify</a>
    </LoginView>
  );
}
export default LoginPage;