import styled from 'styled-components';

export const NowPlaying = styled.div`
  color: #999;
  padding-top: 10px;

  > h2 {
    color: #eee;
    padding-top: 15px;
    font-size: 22px;
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;
