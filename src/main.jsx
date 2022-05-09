import React from 'react'
import { render } from 'react-dom'
import { createTheme, NextUIProvider } from '@nextui-org/react'

import App from './App'

const Main = () => {
  const theme = createTheme({
    type: 'dark',
    theme: {
      colors: {
        primary: '000',
      },
    },
  })
  return (
    <React.StrictMode>
      <NextUIProvider theme={theme}>
        <App />
      </NextUIProvider>
    </React.StrictMode>
  )
}

render(<Main />, document.getElementById('root'))
