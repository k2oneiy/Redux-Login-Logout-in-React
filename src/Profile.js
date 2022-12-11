import React from 'react'
import { useSelector } from 'react-redux';

export default function Profile() {
  const user = useSelector(state => state.user.value)
  if(!user.name){
    return
  }
  return (
    <div>
      <h3>Profile Info</h3>
        <h5>Name : {user.name} </h5> 
        <h5>Email : {user.email} </h5>
        <h5>Password : {user.password} </h5>
    </div>
  )
}
