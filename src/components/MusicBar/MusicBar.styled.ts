import styled from 'styled-components';

export const Music = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 90px;
  width: 230px;
  background-color: black;
  overflow: scroll;

  > ul {
    display: flex;
    flex-direction: column;
    margin: 30px 0 0 30px;

    > a {
      margin: 4px 0;
      z-index: 1000000;
      color: ${props => props.theme.dustyGray};

      &:hover i,
      &:hover p,
      &.active i,
      &.active p {
        color: ${props => props.theme.alto};
      }

      > p {
        z-index: -1;
        display: inline-block;
        margin-left: 10px;
        font-size: 18px;
        vertical-align: -1px;
      }

      > i {
        font-size: 19px;
        z-index: -1;
      }
    }
  }

  @media (max-width: 1024px) {
    width: 60px;

    ul {
      margin: 15px 0 0 15px;

      a {
        p {
          display: none;
        }

        i {
          font-size: 26px;
          margin: 10px 0;
        }
      }
    }
  }
`;
