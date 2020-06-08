import styled from 'styled-components';

export const SearchType = styled.div`
  display: inline-block;

  h2 {
    color: ${props => props.theme.alto};
    margin: 25px 0 25px 20px;
  }

  div.song {
    display: inline-block;
    width: 210px;
    height: 258px;

    img {
      display: block;
      width: 170px;
      height: 170px;
      cursor: pointer;
      margin: 0 auto;
      border-radius: 5px;
    }

    p {
      cursor: pointer;
      color: ${props => props.theme.alto};
      text-align: center;
      margin-top: 10px;
    }
  }

  @media (max-width: 1024px) {
    width: calc(100% - 60px);

    div.song {
      width: 100%;
      margin: 0 auto;
    }

    h2 {
      text-align: center;
      margin: 25px auto;
    }
  }
`;
