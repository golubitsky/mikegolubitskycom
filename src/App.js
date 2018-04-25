import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>
          Hello! My name is Mike Golubitsky.
        </p>
        <p>
          I'm currently focused on <a href="//golubitsky.github.io/ml-blog/">studying machine learning</a>.
        </p>
        <p>
          I <a href="//linkedin.com/in/mikegolubitsky/">have experience</a> designing, building, continuously deploying, monitoring, and maintaining comprehensively unit-tested microservices in a production setting. 
        </p>
        <p>
          Here's a fun <a href="//golubitsky.github.io/maze_solver/">Maze Generator &amp; Solver</a> I made a while back.
        </p>
        <p>
          <a href="mailto:mike617@gmail.com">Contact</a>
        </p>
      </div>
    );
  }
}

export default App;
