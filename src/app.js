'use strict'

import React from 'react'
import styled, { injectGlobal } from 'styled-components'
import Play from 'components/play'
import 'normalize.css'
import 'milligram'

const App = () => (
  <Container>
    <Header>
      <h1>Reactflix</h1>
    </Header>

    <Main>
      <Videoslist>
        {Array.from({length:10}).map((item,index) => (
          <Video key={index}>
            <VideoThumb>
              <PlayStyled />
            </VideoThumb>
            <VideoTitle>Titulo do video</VideoTitle>
          </Video>
        ))}
      </Videoslist>
    </Main>
    <Footer>
      &copy; 2018
    </Footer>
  </Container>
)

injectGlobal`
  html, body, div[data-js="app"] {
    height: 100%;
  }
`

const headerHeight = '60px'
const footerHeight = '30px'

const Container = styled.div`
  height: 100%;
`

const Header = styled.header`
  height: ${headerHeight};
  background: #333;
`

const Main = styled.main`
  min-height: calc(100% - ${headerHeight} - ${footerHeight});
`
const Videoslist = styled.div`
  display:flex;
  flex-wrap:wrap;
`
const Video = styled.div`
  flex: 1 1 300px;
`
const VideoTitle = styled.div`
  font-size:18px;
`

const VideoThumb = styled.div`
  align-items: center;
  border: 1px solid #999;
  display: flex;
  height: 150px;
  justify-content: center;
`

const PlayStyled = styled(Play)`
  fill: #999;
  height: 50px;
  width: 50px;
`
const Footer = styled.footer`
   height: ${footerHeight};
  background: #333;
`

export default App
