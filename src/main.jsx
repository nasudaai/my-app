import React from 'react';
import { renderToString } from 'react-dom/server';
import { user } from 'data/data.js';


function Greet() {
  return (
    <h1>Hello {user.name}!!!</h1>
  )
}

const html = renderToString(<Greet />);
console.log(html);