import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { subscribeToDictionary, post } from './api'



class App extends Component {
  constructor(props){
    super(props)
    this.state = {dictionary: 'null', old_dictionary: 'null'}
    subscribeToDictionary((err,dictionary) => this.setState({
      old_dictionary: this.state.dictionary,
      dictionary: dictionary
    }))
  }
  _diff(){
      // see what has changed between old_dictionary & (new) dictionary
  }
  handleClick(e) {
    e.preventDefault();
    post("word");
    console.log('The link was clicked.');
  }
  render() {
    console.log("+===========+")
    console.log(this.state.old_dictionary)
    console.log(this.state.dictionary)

    // post("word");
    let g = Object.keys(this.state.dictionary).map((key, idx)=>{
      return <span style={{fontSize: this.state.dictionary[key] + 'em'}} >{key}</span>
    })
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="choices">
          <button className="no">No</button>
          <button onClick={this.handleClick} className="yes">Yes</button>
        </div>
        <div className="App-intro">
          <div className="word-cloud-area">
            {g}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
