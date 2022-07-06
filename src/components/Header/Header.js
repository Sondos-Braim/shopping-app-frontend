import React, { useState } from 'react';
import { Button } from '../Dashboard/Dashboard.style';
import { HeaderStyle } from './Header.style';
import Login from '../User/Login';
import {Modal} from 'react-bootstrap';
import Register from '../User/Register';

export default function Header() {
  const [openForm, setOpenForm] = useState(null);
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem('token'));
  const Logout = () => {
    localStorage.clear();
    setLoggedIn(false)
  }
   
  return (
    <>
    <HeaderStyle>
      <h1>Shopping app</h1>
     {!loggedIn ? <div>
      <Button onClick={()=>setOpenForm('login')}>Login</Button>
      <Button onClick={()=>setOpenForm('signup')}>Register</Button>
      </div>:
      <Button onClick={Logout}>Logout</Button>
      }
    </HeaderStyle>
    <Modal
        show={openForm}
        onHide={()=>setOpenForm(null)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
  {openForm==='login'? <Login setLoggedIn={setLoggedIn} setOpenForm={setOpenForm}/> : <Register setOpenForm={setOpenForm}/>}</Modal>
    </>
  )
}
