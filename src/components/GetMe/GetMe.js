import React, { useEffect } from 'react';
import * as S from './GetMe.styled';
import { getMeFetch } from '../../store/reducers/GetMe/getMeCreator';
import { useDispatch, useSelector } from 'react-redux';

const GetMe = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.getMeReducer.user);

  const expandOptions = () => {
    const hide = 'hide';
    document.body.querySelector('i.fa-angle-up').classList.toggle(hide);
    document.body.querySelector('i.fa-angle-down').classList.toggle(hide);
    document.body.querySelector('ul.user-list').classList.toggle(hide);
  };

  const logout = () => {
    localStorage.removeItem('accessToken');
    window.location.href = window.location.origin + window.location.pathname;
  };

  useEffect(() => {
    if (!user.username) dispatch(getMeFetch());
  }, [dispatch, user]);

  return (
    <>
      <S.List className="user-list hide">
        <li onClick={logout}>Logout</li>
      </S.List>
      <S.GetMe onClick={expandOptions}>
        {user.username ? (
          <>
            <i className="fas fa-angle-down"></i>
            <i className="fas fa-angle-up hide"></i>
            <p>{user.username}</p>
            <img src={user.photo} alt="you" />
          </>
        ) : null}
      </S.GetMe>
    </>
  );
};

export default GetMe;
