import React from 'react';
import ReactDOM from 'react-dom';

class QuoteMaker extends React.Component {
  render() {
    return (
      <blockquote>
  			<p>
    What is important now is to recover our senses.
  			</p>
  			<cite>
    			<a target="_blank"
      href="http://bit.ly/1LvSLUA">
      Susan Sontag
    			</a>
  			</cite>
			</blockquote>
    );
  }
};

ReactDOM.render(
  <QuoteMaker />,
  document.getElementById('app')
);
