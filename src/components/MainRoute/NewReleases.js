import React, { useEffect } from 'react';
import SearchType from './SearchType/SearchType';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getNewReleases } from '../../store/reducers/NewReleases/newReleasesCreators'

const NewReleasesView = styled.div`
  width: calc(100% - 230px);
  margin-left: 230px;
  height: 100%;

  > div {
    height: 100%;
    background-color: #121212;
    overflow: scroll;
    padding-left: 20px;

      > h2 {
          color: ${props => props.theme.alto};
          margin: 25px 0 25px 20px;
        }

      > div {
        display: inline-block;
      }
  }
`;

const NewReleases = props => {

  useEffect(() => {
    if (!props.newReleases.length) {
      props.getNewReleasesFn();
    }
  }, [props, props.newReleases])

  const dataObject = [{ type: 'New Releases', data: { items: props.newReleases } }];

  return (
    <NewReleasesView>
      {dataObject ? dataObject.map(item => <SearchType key={item.type} item={item} />) : null}
    </NewReleasesView>
  );
}

const mapStateToProps = state => ({
  newReleases: state.newReleases.newReleases
});

const mapDispatchToProps = dispatch => ({
  getNewReleasesFn: () => dispatch(getNewReleases())
})

export default connect(mapStateToProps, mapDispatchToProps)(NewReleases)