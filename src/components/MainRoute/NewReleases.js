import React, { useEffect } from 'react';
import SearchType from './SearchType/SearchType';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { getNewReleases } from '../../store/reducers/NewReleases/newReleasesCreators';

const NewReleasesView = styled.div`
  width: calc(100% - 230px);
  margin-left: 230px;
  height: 100%;
  overflow: scroll;

  @media (max-width: 1024px) {
    margin-left: 60px;
    width: 100%;
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
      {dataObject ? <div className='releases-wrapper'>{dataObject.map(item => <SearchType key={item.type} item={item} />)}</div> : null}
    </NewReleasesView>
  );
}

export default NewReleases;