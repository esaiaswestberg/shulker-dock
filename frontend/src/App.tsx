import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import { panelClient } from './grpc'

function App() {
  const [response, setResponse] = React.useState<string | null>(null)

  panelClient.sayHello({ name: 'World' }).then((res) => {
    setResponse(res.response.message)
  })

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        {response ? (
          <p>
            {response}
          </p>
        ) : (
          <p>
            Waiting for response...
          </p>
        )}
      </div>
    </>
  )
}

export default App
