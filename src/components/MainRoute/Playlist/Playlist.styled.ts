import styled from 'styled-components';

export const Playlist = styled.div`
  height: 100%;
  background-color: ${props => props.theme.codGray};
  overflow: scroll;
  padding-left: 20px;
  margin-left: 230px;
  color: white;

  @media (max-width: 1024px) {
    margin-left: 60px;
  }
`;
