import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <>
      <div>
        <section>
          <h1>Project of </h1>
          <p>Deployment</p>
        </section>
        <h1>This is Registration Page</h1>
      </div>
    </>
  </StrictMode>,
)
