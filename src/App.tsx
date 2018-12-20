import * as React from 'react';

import 'src/css/materialize.css';
import 'src/js/materialize.js';

import FloridayData from './components/FloridayData';
import Header from './components/Header';

class App extends React.Component { 
  public render() {
    return (
      <div>
	  	<Header/>
	  	<div className= "container">
	  		<FloridayData/>
		  </div>
      </div>
    );
  }
}

export default App;
