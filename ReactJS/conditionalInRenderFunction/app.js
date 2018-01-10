import React from 'react';
import ReactDOM from 'react-dom';

const fiftyFifty = Math.random() < 0.5;

// New component class starts here:
class TonightsPlan extends React.Component {
  render () {
    let task;
    if (fiftyFifty = true) {
      task = "Tonight I'm going out WOOO"
    }
    else {
      task = "Tonight I'm going to bed WOOO"
    }

    return <h1>{task}</h1>;
  }
}
