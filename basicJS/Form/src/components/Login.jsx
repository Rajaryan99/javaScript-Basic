import { useEffect, useRef } from 'react'
import './Auth.css'

function Login() {


const emailRef = useRef(null)

useEffect(() => {
    const email = emailRef.current.textContent;
    console.log(email);
}, [])








  return (
    <> 

    <div className='main'>

    <div id='email' ref={emailRef}>singhrajaryan66@gmail.com</div>
</div>
    </>
  )
}

export default Login
