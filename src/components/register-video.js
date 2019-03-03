'use strict'

import React from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'
import { registerVideo } from 'reducers/videos/action-creators'

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
  onSubmit: async (e) => {
    e.preventDefault()
    e.persist()
    const {
      id:{ value: id },
      title:{ value: title }
    } = e.target
    e.target.reset()
    e.target[0].focus()
    await dispatch(registerVideo({ id, title }))

  }
})
export default connect(null,mapDispatchToProps)(RegisterVideo)
