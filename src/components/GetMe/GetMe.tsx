import React, { useEffect, useRef } from 'react';
import * as S from './GetMe.styled';
import { getMeFetch } from '../../store/reducers/GetMe/getMeCreator';
import { useDispatch, useSelector } from 'react-redux';

type RootState = {
  getMeReducer: {
    user: {
      username: string,
      photo: string
    }
  }
}

const GetMe = () => {
  const list = useRef<HTMLUListElement>(null);
  const arrowUp = useRef<HTMLElement>(null);
  const arrowDown = useRef<HTMLElement>(null);
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.getMeReducer.user);

  const expandOptions = () => {
    const hide = 'hide';
    if (list.current && arrowUp.current && arrowDown.current) {
      list.current.classList.toggle(hide);
      arrowDown.current.classList.toggle(hide);
      arrowUp.current.classList.toggle(hide);
    }
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
      <S.List ref={list} className="user-list hide">
        <li onClick={logout}>Logout</li>
      </S.List>
      <S.GetMe onClick={expandOptions}>
        {user.username && (
          <>
            <i ref={arrowDown} className="fas fa-angle-down"></i>
            <i ref={arrowUp} className="fas fa-angle-up hide"></i>
            <p>{user.username}</p>
            <img src={user.photo} alt="you" />
          </>
        )}
      </S.GetMe>
    </>
  );
};

export default GetMe;
