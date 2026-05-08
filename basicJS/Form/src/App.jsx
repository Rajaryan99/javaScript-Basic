
import { useState } from 'react'
import { Routes, Route, Link, Navigate } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import './App.css'

function ContactForm() {
  const [form, setForm] = useState({name:"", email:"", message:""})
  const [isSending, setIsSending] = useState(false)

  const onSubmit = async (e) => {
    e.preventDefault();

    console.log("Name:", form.name)
    console.log("email:", form.email)
    console.log("message:", form.message)

    if(isSending) return;

    const formData = new FormData(e.currentTarget)

    setIsSending(true)

    try {
      const response = await fetch("https://formsubmit.co/ajax/singhrajaryan66@gmail.com", {
        method: "POST",
        headers: {
          Accept: "application/json"
        },
        body: formData,
      })

      if(!response.ok){
        console.log('something is wrong')
      }

      if(response.ok){
        console.log("Message is send the mail")
      }
    } catch (error) {
      console.log(error, "error in semd mail")
    } finally{
      setIsSending(false)
    }

    setForm({
      name: "",
      email: "",   
      message: ""
    })
  }

  return (
    <div className="contact-form">
      <h2>Contact Us</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="email">Email: </label>
          <input 
            type="text" 
            name="email" 
            value={form.email} 
            onChange={(e) => setForm({...form, email: e.target.value})}
            placeholder='jon@xmail.com' 
          />
        </div>
        <div>
          <label htmlFor="name">Name: </label>
          <input 
            type="text" 
            name="name" 
            value={form.name} 
            onChange={(e) => setForm({...form, name: e.target.value})}
            placeholder='john Duo' 
          />
        </div>
        <div>
          <label htmlFor="message">Message: </label>
          <input 
            type="text" 
            name="message"  
            value={form.message} 
            onChange={(e) => setForm({...form, message: e.target.value})}
            placeholder='hello.....' 
          />
        </div>
        <button type='submit'>
          {isSending ? "sending" : "send message"}
        </button>
      </form>
    </div>
  )
}

function Dashboard() {
  return (
    <div className="dashboard">
      <h2>Welcome to Dashboard!</h2>
      <p>You have successfully logged in.</p>
      <ContactForm />
    </div>
  )
}

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <Link to="/" className="nav-brand">MyApp</Link>
        <div className="nav-links">
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
      </nav>

      <main className="main-content">
        <Routes>
          <Route path="/" element={<div className="home"><h1>Welcome to MyApp</h1><p>Please login or register to continue.</p></div>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
