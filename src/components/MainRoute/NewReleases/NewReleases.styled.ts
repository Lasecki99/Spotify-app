import styled from 'styled-components';

export const NewReleases = styled.div`
  width: calc(100% - 230px);
  margin-left: 230px;
  height: 100%;
  overflow: scroll;

  @media (max-width: 1024px) {
    margin-left: 60px;
    width: 100%;
  }
`;
