'use strict'

import React from 'react'
import styled from 'styled-components'

const RegisterVideo = () =>(
  <form>
    <h2>Cadastrar Vídeo</h2>
    
    <label htmlFor='id'>ID do video:</label>
    <input type='text' id='id' name='id' />

    <label htmlFor='title'>Titulo do video:</label>
    <input type='text' id='title' name='title' />

    <button type='submit'>Cadastrar</button>
  </form>
)
export default RegisterVideo
