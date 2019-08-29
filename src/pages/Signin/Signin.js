import React, {  useState } from 'react'

 const Signin = (props) => {

     

     
    const [isOnline, setIsOnline] = useState(5)
    const [email, setEmail] =useState('')
    const [password, setPassword] = useState('')
    // eslint-disable-next-line no-lone-blocks
    
        return (
            <div> 
                
                    <form action="/login" method="post"> 
                    <button onClick={()=>setIsOnline(isOnline+1)}>add</button>
                    {isOnline}
                    <label> 
                    Email:
                    <input type="text"
                         name="email"
                         value={email}
                         onChange={e=>setEmail(e.target.value)}
                          />
                    </label>
                    <label> 
                    Password:
                    <input type="text"
                         name="password"
                         value={password}
                         onChange={e=>setPassword(e.target.value)} 
                          />
                    </label>
                    <button type="submit">Submit</button>
                    </form>
            </div>
             
        )

}

export default Signin
