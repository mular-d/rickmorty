import React from 'react'
import { render } from 'react-dom'
import App from './App'

const Main = () => {
  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}

render(<Main />, document.getElementById('root'))
