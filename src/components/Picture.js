import React from 'react';
import { connect } from 'react-redux';

const Picture = ({ pictureUrl }) => {
  return <img style={{ width: 200 }} src={pictureUrl} alt="placeholder" />;
};

const mapStateToProps = (photos, ownProps) => {
  return {
    pictureUrl: photos.find((obj) => obj.id === ownProps.id).url,
  };
};

export default connect(mapStateToProps)(Picture);
