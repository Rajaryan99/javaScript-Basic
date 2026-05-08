import { useEffect, useRef } from 'react'
import './Auth.css'

function Login() {


const emailRef = useRef(null)

useEffect(() => {
    const email = emailRef.current.textContent;
    console.log(email);
}, [])



const copyMail = () => {
    const email = emailRef.current.textContent;
    navigator.clipboard.writeText(email);
    alert('copied!')
}






  return (
    <> 

    <div className='main'>

    <div id='email' onClick={copyMail} ref={emailRef}>singhrajaryan66@gmail.com</div>
</div>
    </>
  )
}

export default Login
