import React from 'react';
import ReactDOM from 'react-dom';

const fiftyFifty = Math.random() < 0.5;

// New component class starts here:
class TonightsPlan extends React.Component {
  render () {
    let task;
    if (fiftyFifty = true) {
      task= '<h1>Tonight I'm going out WOOO</h1>'
    }
     else {
      task= '<h1>Tonight I'm going to bed WOOO</h1>'
    }
    return task;
  }
}

ReactDOM.render(
  <TonightsPlan />,
  document.getElementById('app')
);
