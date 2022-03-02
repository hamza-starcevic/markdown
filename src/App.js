import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import ReactFCCtest from "react-fcctest";
import {marked} from "marked";
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      input:`# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`
      ,text:'# This is a heading',
    }
    this.updateView=this.updateView.bind(this);
  }

updateView= (event) => {
  
  this.setState(()=>{
    return {
      text:event.target.value
    }
  })
}

  render(){



    return(
    <Container  id='container' >
    <ReactFCCtest />
    <Row id='row1'>
      <Col id="blank" xs={2}></Col>
      <Col xs={8}>Markdown project</Col>
      <Col id="blank" xs={2}></Col>
    </Row>
    <Row id="row2">
      <Col id="blank" xs={2}></Col>
      <Col xs={8} >
        <textarea rows={9} cols={25} id="editor" onChange={this.updateView}>{this.state.input}</textarea>
      </Col>
      <Col id="blank" xs={2}></Col>
    </Row>
    <Row id="row3">
      <Col id="blank" xs={1}></Col>
      <Col xs={10} id="preview"
      dangerouslySetInnerHTML={{__html: marked(this.state.text, )}}></Col>
      <Col id="blank" xs={1}></Col>
    </Row>
    </Container>
    )
  }
}
export default App;
