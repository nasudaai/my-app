import express from 'express';
const app = express();
const port = 3001;

import { renderToString } from 'react-dom/server';
import App from './dist/App.mjs'

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello!')
});

app.get('/render', (req, res) => {
  const html = renderToString(App());
  res.send(html)
});


app.listen(port, () => {
  console.log(`app listening on http://localhost:${port}`)
})