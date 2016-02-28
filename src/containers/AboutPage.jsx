import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class AboutPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        about page
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    errorMessage: state.errorMessage
  };
}

export default connect(mapStateToProps)(AboutPage);