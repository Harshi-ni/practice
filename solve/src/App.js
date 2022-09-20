//import logo from './logo.svg';
import './App.css';
//import Greeting from './greeting';
import React from 'react';
class App extends React.Component {
  state = {
    a: 10
  }
  function() {
    this.state({
      a: this.state.a + 1
      
    })
    console.log(this.a)
   
  }

  render() {
    console.log(" i am a  in render")
    
    this.function()
    return (
      <h1> "i am gooos"</h1>
    )

  }
}
export default App;
