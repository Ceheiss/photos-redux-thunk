import React, { Component } from 'react';
import Details from './Details';
import Picture from './Picture';

class Card extends Component {
  render() {
    return (
      <div style={{ padding: 15, border: '1px solid black' }}>
        <Picture />
        <Details />
      </div>
    );
  }
}

export default Card;
