import styled from 'styled-components';

export const Search = styled.div`
  width: calc(100% - 230px);
  margin-left: 230px;
  height: 100%;

  input {
    width: 100%;
    background-color: ${props => props.theme.mineShaft};
    color: #eee;
    font-weight: 600;
    font-size: 30px;
    padding: 15px 40px;
    outline: none;
    border: none;
  }

  div.search-main-content {
    height: calc(100% - 67px);
    background-color: ${props => props.theme.codGray};
    overflow: scroll;
  }

  @media (max-width: 1024px) {
    margin-left: 60px;
    width: 100%;

    input {
      width: calc(100% - 60px);
      font-size: 18px;
      padding: 10px 10px;
    }
  }
`;
