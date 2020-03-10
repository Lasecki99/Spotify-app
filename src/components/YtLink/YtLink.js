import React from 'react';
import yt from '../../assets/yt.webp';
import styled from 'styled-components';

const YtView = styled.a`
position: absolute;
width: 60px;
height: 40px;
bottom: 20px;
left: 40px;

  img {
    width: 100%;
    height: 100%;
  }

  @media (max-width:1024px) {
    display: none;
  }
`;

const YtLink = ({ name, author }) => <YtView href={`https://www.youtube.com/results?search_query=${author}+-+${name}`} target='_blank'><img src={yt} alt="youtube" /></YtView>

export default YtLink;