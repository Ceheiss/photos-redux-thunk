import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPhotos } from '../actions';
import './CardList.css';
import Card from './Card';

class CardList extends Component {
  componentDidMount() {
    this.props.getPhotos();
  }

  loadCards() {
    const { photos } = this.props;
    if (!photos) {
      return 'Loading...';
    } else {
      return photos.map((blog) => <Card key={blog.id} id={blog.id} />);
    }
  }

  render() {
    return <div className="CardList">{this.loadCards()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    photos: state,
  };
};

export default connect(mapStateToProps, { getPhotos })(CardList);
