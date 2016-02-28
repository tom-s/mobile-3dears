import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(nextValue) {
    browserHistory.push(`/${nextValue}`);
  }

  render() {
    const { children } = this.props;
    console.log("here", children);
    return (
      <div>
        {children}
      </div>
    );
  }
}

App.propTypes = {
  // Injected by React Redux
  // Injected by React Router
  children: PropTypes.node
};

function mapStateToProps(state) {
  return {
    errorMessage: state.errorMessage
  };
}

export default connect(mapStateToProps)(App);