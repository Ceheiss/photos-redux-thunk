import React, { Component } from 'react';
import Details from './Details';
import Picture from './Picture';
import { connect } from 'react-redux';
import { getPhotos } from '../actions';

class Card extends Component {
  componentDidMount() {
    this.props.getPhotos();
  }
  render() {
    return (
      <div style={{ padding: 15, border: '1px solid black' }}>
        {this.props.oneTitle ? (
          <h1>{this.props.oneTitle.title}</h1>
        ) : (
          <h2>Shit</h2>
        )}
        <Picture />
        <Details />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    oneTitle: state[0],
  };
};

export default connect(mapStateToProps, { getPhotos })(Card);
