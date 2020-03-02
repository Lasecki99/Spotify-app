import React, { useEffect } from 'react';
import SearchType from './SearchType/SearchType';
import '../../styles/Search.css';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { getNewReleases } from '../../store/reducers/NewReleases/newReleasesCreators';

const NewReleasesView = styled.div`
  width: calc(100% - 230px);
  margin-left: 230px;
  height: 100%;

  > div {
    height: 100%;
    background-color: #121212;
    overflow: scroll;

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

  const newReleases = useSelector(state => state.newReleases.newReleases);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!newReleases.length) {
      dispatch(getNewReleases());
    }
  }, [dispatch, newReleases])

  const dataObject = [{ type: 'New Releases', data: { items: newReleases } }];

  return (
    <NewReleasesView>
      {dataObject ? dataObject.map(item => <SearchType key={item.type} item={item} />) : null}
    </NewReleasesView>
  );
}

export default NewReleases;