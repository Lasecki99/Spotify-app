import React, { useEffect } from 'react';
import styled from 'styled-components';
import { getMeFetch } from '../../store/reducers/GetMe/getMeCreator';
import { useDispatch, useSelector } from 'react-redux'

const GetMeView = styled.div`
position: fixed;
bottom: 20px;
right: 50px;
display: flex;
align-items: center;
border: 2px solid #ddd;
border-radius: 20px;
padding: 5px 10px;
cursor: pointer;

> img {
  width: 38px;
  height: 38px;
  border-radius: 50px;
  margin-left: 10px;
}

> p {
  color: ${props => props.theme.alto}
}`;

const GetMe = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.getMeReducer.user);

  useEffect(() => {
    if (!user.username) dispatch(getMeFetch());
  }, [dispatch, user])

  return (
    <GetMeView>
      {user.username ?
        <>
          <p>{user.username}</p>
          <img src={user.photo} alt='you' />
        </>
        : null}
    </GetMeView>
  );
}

export default GetMe;