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
        <Header saving = {this.props.saving} />
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
    saving: state.ajaxCallsInProgress > 0
  };
}

export default connect(mapStateToProps)(App);
