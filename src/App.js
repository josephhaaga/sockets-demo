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
  // _post(){
  //   socket.emit('postToDictionary', this.state.dictionary);
  // }
  render() {
    console.log("+===========+")
    console.log(this.state.old_dictionary)
    console.log(this.state.dictionary)


    post("word");
    // let n = this.state.dictionary;
    // n['professional']+=1
    // this.setState({dictionary: n})
    // this._post();
    let g = Object.keys(this.state.dictionary).map((key, idx)=>{
      return <span style={{fontSize: this.state.dictionary[key] + 'em'}} >{key}</span>
    })
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          <div className="word-cloud-area">
            {g}
          </div>
        </p>
      </div>
    );
  }
}

export default App;
