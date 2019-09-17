import React from 'react';
import './App.css';
import marked from "marked";
import hljs from 'highlight.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    content: '### Type Markdown Here'
  }
  }
rawMarkup() {
  marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: true,
    smartLists: true,
    smartypants: false,
    highlight(code) {
      return hljs.highlightAuto(code).value
    }
  })

  var rawMarkup = marked(this.state.content, {sanitize: true})
  return {
    __html: rawMarkup
  }
}
  
  handleChange = (event) => {
  this.setState({
    content: event.target.value
  })
}
 
  render() {
  return (
    
      <div className="wrapper">
        <h1>ReactJS Markdown Editor</h1>
      <div className="parent">
        <div className="markdown-container">
          <h3>Markdown</h3>
          <textarea className="markdown" defaultValue={this.state.content} 
            onChange={this.handleChange}></textarea>
        </div>
        <div>
          <h3>Preview</h3>
          <div id="preview" dangerouslySetInnerHTML={this.rawMarkup()}></div>
        </div>
      </div>  
      </div>
    
  )
}
}

export default App;
