import React, {PropTypes} from 'react';
import Header from './common/Header';

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
        <Header />
        {this.props.children}
      </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
