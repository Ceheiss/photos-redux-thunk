import React from 'react';
import { connect } from 'react-redux';

const Details = ({ title }) => {
  return <h3 style={{ textAlign: 'center', color: 'white' }}>{title}</h3>;
};

const mapStateToProps = (photos, ownProps) => {
  return {
    title: photos.find((obj) => obj.id === ownProps.id).title,
  };
};

export default connect(mapStateToProps)(Details);
