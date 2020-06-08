import React from 'react';
import * as S from './YtLink.styled';
import yt from '../../assets/yt.webp';

type YtLinkProps = {
  name: string
  author: string
}

const YtLink = ({ name, author }: YtLinkProps) => (
  <S.Yt
    href={`https://www.youtube.com/results?search_query=${author}+-+${name}`}
    target="_blank"
  >
    <img src={yt} alt="youtube" />
  </S.Yt>
);

export default YtLink;
