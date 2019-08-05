/* eslint no-unused-expressions: ["error", { "allowTaggedTemplates": true }] */
import { injectGlobal } from 'styled-components'

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Concert+One');
  * {
    outline: none;
    box-sizing: border-box;
  }
  body {
    padding: 0;
    margin: 0;
    font-family: sans-serif;
    font-size: 1.2rem;
  }
  body, html, #app, #app > div, main {
    height: 100%;
  }
`
