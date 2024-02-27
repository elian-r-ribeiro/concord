import React from 'react'
import Add from "../img/Antu_insert-image.svg.png"

export const Register = () => {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='logo'>Concord</span>
            <span className='title'>Registrar</span>
            <form>
                <input type="text" placeholder='Nome de usuário'/>
                <input type="email" placeholder='E-mail'/>
                <input type="password" placeholder='Senha'/>
                <input style={{display:"none"}} type="file" id="file" />
                <label htmlFor="file">
                    <img src={Add} alt="" />
                    <span>Adicionar foto de perfil</span>
                </label>
                <button>Registrar</button>
            </form>
            <p>Já tem uma conta? Faça login aqui</p>
        </div>
    </div>
  )
}

export default Register;
