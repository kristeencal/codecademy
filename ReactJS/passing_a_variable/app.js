import React from 'react';
import ReactDOM from 'react-dom';

// Write code here:
const myList = (
  <ul>
          <li>Today is a wonderful day.</li>
          <li>Life should be appreciated.</li>
          <li>There are a vast amount of opportunities that are available to us.</li>
          <li>We need to make the most of each and every day that is given to us.</li>
  </ul>
);

ReactDOM.render(
  myList,
  document.getElementById('app')
);
