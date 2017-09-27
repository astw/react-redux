import React, {PropTypes} from 'react';
import Header from './common/Header';
import {connect} from 'react-redux';

class App extends React.Component {

  static get PropTypes(){
     return {
       children: PropTypes.any
     };
  }

  render() {
    return (
      <div>
      <div className="container-fluid">
        <Header loading = {this.props.loading} />
        {this.props.children}
      </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    loading: state.ajaxCallsInProgress > 0
  };
}

export default connect(mapStateToProps)(App);
