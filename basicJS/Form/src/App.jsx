
import { useState } from 'react'
import './App.css'

function App() {

  const [form, setForm] = useState({name:"", email:"", message:""})
  const [isSending, setIsSending] = useState(false)
  //console.log(form);

  const onSubmit = async (e) => {
    e.preventDefault();

  console.log("Name:", form.name)
  console.log("email:", form.email)
  console.log("message:", form.message)

    if(isSending) return;

    const formData = new FormData(e.currentTarget)


  setIsSending(true)

  try {
    
    const response  = await fetch("https://formsubmit.co/ajax/singhrajaryan66@gmail.com", {

    method: "POST",
    headers: {
      Accept: "application/json"
    },
    body: formData,
    //body: JSON.stringify(form),
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
        <button type='submit' >
          {isSending ? "sending" : "send message"}
        </button>
      </form>
    </>
  )
}

export default App
