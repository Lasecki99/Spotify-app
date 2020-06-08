import React, { useEffect } from 'react';
import * as S from './NewReleases.styled';
import SearchType from '../SearchType/SearchType';
import { useSelector, useDispatch } from 'react-redux';
import { getNewReleases } from '../../../store/reducers/NewReleases/newReleasesCreators';

type RootState = {
  newReleases: {
    newReleases: []
  }
}

const NewReleases = () => {
  const newReleases = useSelector((state: RootState) => state.newReleases.newReleases);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!newReleases.length) {
      dispatch(getNewReleases());
    }
  }, [dispatch, newReleases]);

  const dataObject = [{ type: 'New Releases', data: { items: newReleases } }];

  return (
    <S.NewReleases>
      {dataObject ? (
        <div className="releases-wrapper">
          {dataObject.map(item => (
            <SearchType key={item.type} item={item} />
          ))}
        </div>
      ) : null}
    </S.NewReleases>
  );
};

export default NewReleases;
