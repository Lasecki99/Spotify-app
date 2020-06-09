import styled from 'styled-components';

export const SongList = styled.div`
  h2 {
    color: #eee;
    padding-top: 8px;
    padding-bottom: 4px;
  }

  p {
    color: #999;
    padding-top: 5px;
    padding-bottom: 5px;
    text-align: left;
    cursor: pointer;
  }

  p.selected {
    color: #222;
    background-color: #ddd;
    font-weight: bold;
  }

  @media (max-width: 1024px) {
    h2 {
      display: none;
    }

    p {
      display: none;
    }

    p.selected {
      display: none;
    }
  }
`;
