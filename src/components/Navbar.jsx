import { signOut } from 'firebase/auth'
import React from 'react'
import { auth } from '../firebase'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className="logo">Concord</span>
      <div className="user">
        <img src="https://i.natgeofe.com/k/093c14b4-978e-41f7-b1aa-3aff5d1c608a/gray-wolf-closeup_square.jpg" alt="" />
        <span>Elian</span>
        <button onClick={() => signOut(auth)}>Deslogar</button>
      </div>
    </div>
  )
}

export default Navbar