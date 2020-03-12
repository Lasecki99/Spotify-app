import React, { useEffect } from 'react';
import styled from 'styled-components';
import { getMeFetch } from '../../store/reducers/GetMe/getMeCreator';
import { useDispatch, useSelector } from 'react-redux'

const GetMeView = styled.div`
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
  transition: .2s;

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

const ListView = styled.ul`
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
    transition: .2s;

    &:hover {
      background-color: gray;
    }
  }
`;

const GetMe = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.getMeReducer.user);

  const expandOptions = () => {
    const hide = 'hide';
    document.body.querySelector('i.fa-angle-up').classList.toggle(hide);
    document.body.querySelector('i.fa-angle-down').classList.toggle(hide);
    document.body.querySelector('ul.user-list').classList.toggle(hide);
  }

  const logout = () => {
    localStorage.removeItem('accessToken');
    window.location.href = window.location.origin;
  }

  useEffect(() => {
    if (!user.username) dispatch(getMeFetch());
  }, [dispatch, user])

  return (
    <>
      <ListView className='user-list hide'><li onClick={logout}>Logout</li></ListView>
      <GetMeView onClick={expandOptions}>
        {user.username ?
          <>
            <i className="fas fa-angle-down"></i>
            <i className="fas fa-angle-up hide"></i>
            <p>{user.username}</p>
            <img src={user.photo} alt='you' />
          </>
          : null}
      </GetMeView>
    </>
  );
}

export default GetMe;