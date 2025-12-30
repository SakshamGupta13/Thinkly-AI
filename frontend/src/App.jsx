import React from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import Main from './components/Main/Main'

const App = () => {
  return (
    <>
     <style>{`
        .app {
          display: flex;
          width: 100vw;
          height: 100vh;
          overflow: hidden;
        }
      `}</style>

    <div className="app">
      <Sidebar />
      <Main />
    </div>
    </>
  )
}

export default App