import { render } from 'preact'
import './api/index.ts'
import { App } from './app.tsx'
import './index.css'

render(<App />, document.getElementById('app')!)
