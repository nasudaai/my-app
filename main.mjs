import React from 'react';
import { renderToString } from 'react-dom/server';
import { user } from './data/data.mjs';
function Greet() {
  return /*#__PURE__*/React.createElement("h1", null, "Hello ", user.name, "!!!");
}
const html = renderToString( /*#__PURE__*/React.createElement(Greet, null));
console.log(html);