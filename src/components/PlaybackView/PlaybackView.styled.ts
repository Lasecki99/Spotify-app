import styled from 'styled-components';

export const Playback = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 90px;
  width: 100vw;
  background-color: ${props => props.theme.mineShaft};

  > div.audio-player {
      background-color: ${props => props.theme.mineShaft};
      width: 500px;
      margin: 0 auto;
      box-shadow: none;
  }

  @media (max-width: 1024px) {
      div.audio-player {
          width: 360px;
      }
  }

    /* > div.playback-text {
        position: absolute;
        display: inline-block;
        bottom: 15px;
        left: 15px;
        > p {
            color: ${props => props.theme.alto};
            text-align: center;
        }
    } */
`;
