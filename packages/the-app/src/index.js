import React from 'react'
import ReactDOM from 'react-dom'
import { Wink } from 'the-lib'

const wink = new Wink(200, 500)

const App = () => (
  <div>
    <h2>This is my app</h2>
    <p>going to sum up some numbers {wink.theSum()}</p>
  </div>
)

ReactDOM.render(<App />, document.getElementById('the-app'))

