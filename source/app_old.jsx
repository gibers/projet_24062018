'use strict';
import React from 'react';
import { render } from 'react-dom';
const Appa = React.createClass({
  render() {
    return (
      <section>
        <h1>My scaffold</h1>
        <p>Hello world toto </p>
      </section>
    );
  }
});

render (
  <Appa />,
    document.getElementById('containera')
);


