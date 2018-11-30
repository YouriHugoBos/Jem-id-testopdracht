import * as React from 'react';
import './App.css';

import FloridayData from './components/FloridayData';

class App extends React.Component {
  public render() {
    return (
      <div className = " light-green darken-2 ">
	  	<div className= "container">
	  		<FloridayData/>
		  </div>
      </div>
    );
  }
}

export default App;
