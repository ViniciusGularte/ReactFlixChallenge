'use strict'

import React from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'

const RegisterVideo = ({onSubmit}) =>(
  <form onSubmit={onSubmit}>
    <h2>Cadastrar Vídeo</h2>

    <label htmlFor='id'>ID do video:</label>
    <input type='text' id='id' name='id' />

    <label htmlFor='title'>Titulo do video:</label>
    <input type='text' id='title' name='title' />

    <button type='submit'>Cadastrar</button>
  </form>
)
const mapDispatchToProps = (dispatch) => ({
  onSubmit: (e) => {
    e.preventDefault()
    dispatch({
      type:'videos:ADD_VIDEO',
      payload:{
        id:'',
        title:''
      }
    })
  }
})
export default connect(null,mapDispatchToProps)(RegisterVideo)
