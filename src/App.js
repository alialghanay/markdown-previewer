import React, { Component } from 'react';
import './App.css';
import MARkEDTEXT from './markedText';

const marked = require("marked");
marked.setOptions({
  breaks: true
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      markedown: MARkEDTEXT
     }
     this.handleChange = this.handleChange.bind(this)
  }

  handleChange = (e) =>{
       this.setState({
         markedown: e.target.value
       })
  }

  render() {
    const {markedown} = this.state;

    const mark = marked(markedown);
    console.log(mark);
    return ( 
      <div className="App">
      <div className="textHoleder">
        <h5>Editor</h5>
        <textarea
        id="editor"
        defaultValue={markedown}
        onChange={this.handleChange}
        />
      </div>

      <div className="view">
      <h5>Preview</h5>
      <div id="preview" dangerouslySetInnerHTML={{__html: mark}}/>
      </div>
    </div>
     );
  }
}

export default App;
