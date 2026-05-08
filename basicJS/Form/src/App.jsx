
import { Routes, Route,  } from 'react-router-dom'
import Login from './components/Login'
import './App.css'


function App() {
  return (
   

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </main>
    
  )
}

export default App
