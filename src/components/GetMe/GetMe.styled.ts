import styled from 'styled-components';

export const GetMe = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  border: 1px solid ${props => props.theme.alto};
  border-radius: 20px;
  padding: 2px 6px;
  cursor: pointer;
  background-color: ${props => props.theme.codGray};
  transition: 0.2s;

  &:hover {
    background-color: gray;
  }

  > i {
    color: white;
    margin-right: 3px;

    &.hide {
      display: none;
    }
  }

  > img {
    width: 30px;
    height: 30px;
    border-radius: 50px;
    margin-left: 10px;
  }

  > p {
    color: ${props => props.theme.alto};
    font-size: 12px;
    font-weight: bold;
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const List = styled.ul`
  position: absolute;
  display: table;
  bottom: 65px;
  right: 28px;
  color: ${props => props.theme.alto};
  border: 1px solid ${props => props.theme.alto};
  background-color: ${props => props.theme.codGray};
  border-radius: 5px;
  cursor: pointer;

  &.hide {
    display: none;
  }

  > li {
    display: table-cell;
    width: 100%;
    height: 100%;
    padding: 5px 45px;
    transition: 0.2s;

    &:hover {
      background-color: gray;
    }
  }
`;
