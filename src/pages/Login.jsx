import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';


export const Login = () => {

  const [err, setErr] = useState(false);
  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try{
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    }catch(err){
      setErr(true);
      console.log(err);
    };
  };  

  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='logo'>Concord</span>
            <span className='title'>Registrar</span>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder='E-mail'/>
                <input type="password" placeholder='Senha'/>
                <button>Logar</button>
                {err && <span>Algo deu errado</span>}
            </form>
            <p>Não tem uma conta? <Link to="/register">Registre uma aqui</Link></p>
        </div>
    </div>
  )
}

export default Login;
