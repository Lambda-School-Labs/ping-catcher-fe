import React from 'react'
import ReactDOM from 'react-dom'
import * as rtl from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

// Render a button
test('Renders the button', () => {
  const div = document.createElement('div')
  // rtl.render(<button></button>)
  ReactDOM.render(<button></button>, div)
})

// Render the title
test('render the h1 in hero', () => {
  const msg = 'Ping Catcher'
  rtl.render(<h1>Ping Catcher</h1>)
  expect(rtl.screen.getByText(msg)).toBeInTheDocument()
})
