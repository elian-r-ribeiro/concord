import React from 'react'
import Add from "../img/Antu_insert-image.svg.png"

export const Login = () => {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='logo'>Concord</span>
            <span className='title'>Registrar</span>
            <form>
                <input type="email" placeholder='E-mail'/>
                <input type="password" placeholder='Senha'/>
                <button>Logar</button>
            </form>
            <p>Não tem uma conta? Registre uma aqui</p>
        </div>
    </div>
  )
}

export default Login;
