'use strict'

import React from 'React'
import styled from 'styled-components'
import { headerHeight } from 'utils/constants'
const MainHeader = () => (
  <Header>
    <HeaderTitle>Reactflix</HeaderTitle>
    <RegisterButton>Cadastrar Vídeo</RegisterButton>
  </Header>
)

const Header = styled.header`
  height: ${headerHeight};
  display:flex;
  background: #333;
  justify-content:space-between;
  align-items:center;
  padding:0 10px;
`
const RegisterButton = styled.button`
  margin-bottom:0;
`
const HeaderTitle = styled.h1`
  margin-bottom:0;
  color:white;
`
export default MainHeader
