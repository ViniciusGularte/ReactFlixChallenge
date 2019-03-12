import React from 'react'
import styled from 'styled-components'
import Play from 'components/play'
import { connect } from 'react-redux'

const Videoslist = ({ videos, handleClick  }) =>(
  <Container>
    {Object.keys(videos).map((id) => (
      <Video key={id}>
        <VideoLink href='#' onClick={handleClick(id)}>
          <VideoThumb>
            <PlayStyled />
          </VideoThumb>
          <VideoTitle>{videos[id].title}</VideoTitle>
        </VideoLink>
      </Video>
    ))}
  </Container>
)
const PlayStyled = styled(Play)`
  fill: #999;
  height: 50px;
  width: 50px;
  transition: all .15s ease-in-out;
`
const Video = styled.div`
&:hover ${PlayStyled}{
  transform:scale(1.5);
}
`
const Container = styled.div`
  padding:10px;
  display:flex;
  flex-wrap:wrap;
  & ${Video}{
      flex: 1 1 300px;
      margin:0 5px 5px;
  }
`
const VideoLink = styled.a`
  color: inherit;
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
const mapStateToProps = (state) => ({
  videos: state.videos
})
const mapDispatchToProps = (dispatch) => ({
  handleClick: (id) => (e) => {
      e.preventDefault()
      console.log("clicando videos",id)
  }
})
export default connect(mapStateToProps,mapDispatchToProps)(Videoslist)
