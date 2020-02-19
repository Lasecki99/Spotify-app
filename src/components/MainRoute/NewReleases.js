import React, { useContext } from 'react';
import { NewReleasesContext } from '../../contexts/NewReleasesContextProvider';
import SearchType from './SearchType/SearchType';
import styled from 'styled-components';

const NewReleasesView = styled.div`
  width: calc(100% - 230px);
  margin-left: 230px;
  height: 100%;

  > div {
    height: 100%;
    background-color: #121212;
    overflow: scroll;
    padding-left: 20px;

      > h2 {
          color: ${props => props.theme.alto};
          margin: 25px 0 25px 20px;
        }

      > div {
        display: inline-block;
      }
  }
`;

const NewReleases = () => {

  const { newReleases } = useContext(NewReleasesContext);
  const dataObject = [{ type: 'New Releases', data: { items: newReleases?.items } }];

  return (
    <NewReleasesView>
      {dataObject ? dataObject.map(item => <SearchType key={item.type} item={item} />) : null}
    </NewReleasesView>
  );
}

export default NewReleases;