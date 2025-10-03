import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from './App'

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />)
    expect(document.body).toBeTruthy()
  })

  it('contains the main application structure', () => {
    render(<App />)
    const appElement = document.getElementById('root')
    expect(appElement).toBeTruthy()
  })
})