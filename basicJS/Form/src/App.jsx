
import { useState } from 'react'
import './App.css'

function App() {

  const [form, setForm] = useState({name:"", email:"", message:""})
  console.log(form);

  const onSubmit = (e) => {
    e.preventDefault();

  console.log("Name:", form.name)
  console.log("email:", form.email)
  console.log("message:", form.message)

  setForm({
    name: "",
    email: "",   
    message: ""
  })


  }



  return (
    <>
      <form action="" onSubmit={onSubmit}>
        <div>
        <label htmlFor="email">Email: </label>
        <input 
        type="text" 
        name="email" 
        value={form.email} 
        onChange={(e) => setForm({...form, email: e.target.value})}
        id="" 
        placeholder='jon@xmail.com' />
        </div>
        <div>
        <label htmlFor="name">Name: </label>
        <input 
        type="text" 
        name="name" 
        id="" 
        value={form.name} 
        onChange={(e) => setForm({...form, name: e.target.value})}
        placeholder='john Duo' />
        </div>
        <div>
        <label htmlFor="message">Message: </label>
        <input 
        type="text" 
        name="message"  
        id="" 
        value={form.message} 
        onChange={(e) => setForm({...form, message: e.target.value})}
        placeholder='hello.....' />
        </div>
        <button type='submit' >Submit</button>
      </form>
    </>
  )
}

export default App
