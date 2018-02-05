import React from 'react'
import ReactDOM from 'react-dom'
import { Wink } from 'the-lib'

const wink = new Wink(200, 500)

const App = () => {
  return (
    <div>
      <h2>This is my app</h2>
      <p>going to sum up some numbers {wink.theSum()}</p>
    </div>
  )
}

console.log(process.env)
ReactDOM.render(<App/>, document.getElementById('bora-app'))

