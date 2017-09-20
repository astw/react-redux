import React, {PropTypes} from 'react';

class App extends React.Component {

  static get PropTypes(){
     return {
       children: PropTypes.any
     };
  }

  render() {
    return (
      <div className="container-fluid">
        <p> Header here. </p>
        {this.props.children}
      </div>
    );
  }
}

App.prototype = {
  children: PropTypes.object.isRequired
};

export default App;
