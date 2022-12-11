import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { login,logout } from './features/user';
import { useSelector } from 'react-redux';

export default function () {
  const user = useSelector(state => state.user.value)
  const dispatch = useDispatch();
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setpassword] = useState('');
  return (
    <div>


    { !user.name && (
      <div>
      <p>Name</p>
      <input value={name} onChange={e=>setName(e.target.value)} /><br/>
      <p>Email</p>
      <input value={email} onChange={e=>setEmail(e.target.value)} /><br/>
      <p>Password</p>
      <input value={password} onChange={e=>setpassword(e.target.value)} /> <br/>
      </div>
    )}



      { !user.name ? 
        <button onClick={()=>
            dispatch(login({
            name,
            email,
            password
        }))
        }>LOGIN</button> :

        <button onClick={()=>
            dispatch(logout())
        }>LOGOUT</button>

      }
       
       



    </div>
  )
}
