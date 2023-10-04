import React, { useState } from 'react'
import Cookies from 'js-cookie'

export default function Profile() {

    const cookieVal=Cookies.get("username")

    const [fullname,FullName] = useState('')

    const logOut=()=>{
      Cookies.remove("username")
    }

  return (
    <div>

        <section  className='place-items-center my-6'>

            <h1>Hello {fullname}</h1>
            <h3>Your user name: {cookieVal}</h3>
            <br></br>
            <button  class="btn btn-danger" onClick={logOut}>Logout</button>

        </section>
      
    </div>
  )
}
