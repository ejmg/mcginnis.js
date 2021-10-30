import React from 'react'
import ReactDOM from 'react-dom'
import {Theme} from './Theme'
import './index.css'

function App () {
  return (
    <>
        <div className="container">
            <Theme/>
        </div>
    </>
  )
}

ReactDOM.render (
  // create new react element under the hood via babel
  <App />,
  document.getElementById("app")
)
