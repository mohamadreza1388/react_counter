import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./styles/style.css"
import {Counter} from "./components/Counter.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Counter start={10} step={100} />
      <Counter start={100} step={100} />
      <Counter start={1000} step={100} />
      <Counter start={10000} step={100} />
      <Counter start={100000} step={100} />
  </StrictMode>,
)
