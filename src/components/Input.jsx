import React from 'react'
import Img from '../img/Antu_insert-image.svg.png'
import Attach from '../img/876210.png'

const Input = () => {
  return (
    <div className='input'>
      <input type='text' placeholder='Escreva sua mensagem...'></input>
      <div className="send">
        <img src={Attach} alt="" />
        <input type='file' style={{display:"none"}} id='file'></input>
        <label htmlFor='file'>
          <img src={Img} alt="" />
        </label>
        <button>Enviar</button>
      </div>
    </div>
  )
}

export default Input