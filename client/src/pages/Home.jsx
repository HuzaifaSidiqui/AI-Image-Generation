import React from 'react'
import styled from 'styled-components'
import Searchbar from '../components/home/Searchbar'
import ImageCard from '../components/home/ImageCard'

const Container = styled.div`
height: 100%;
overflow-Y: scroll;
padding: 30px 30px;
padding-bottom: 50px;
background: ${({theme})=> theme.bg};
display: flex;
flex-direction: column;
align-items: center;
gap: 20px;
@media only screen and (max-width: 768px){
  padding: 6px 10 px;
}
`
const Headline = styled.div`
font-size : 34px;
font-weight: 500;
color: ${({theme})=> theme.text_primary};
display: flex;
align-items: center;
flex-direction: column;
@media only screen and (max-width: 768px){
  font-size: 24px;
}
`
const Span = styled.div`
font-size : 30px;
font-weight: 800;
color: ${({theme})=> theme.secondary};
@media only screen and (max-width: 768px){
  font-size: 20px;
}
`
const Wrapper = styled.div`
width: 100%;
max-width: 1400px;
padding: 32px 0px;
display: flex;
justify-content: center;
`
const CardWrapper = styled.div`
display: grid;
grid-template-columns: repeat(4,1fr);

gap: 20px;
@media (min-width: 1200px){
  grid-template-columns: repeat(4,1fr);
}
@media (min-width: 640px) and (max-width: 1199px){
  grid-template-columns: repeat(3,1fr);
}
@media (max-width: 639px){
  grid-template-columns: repeat(2,1fr);
}
`

const Home = () => {
  const item = {
    photo: "/img-1.jpg",
    author: "John Doe",
    prompt: "A beautiful sunset over the mountains",
  }
  return (
    <Container>
      <Headline>Explore popular posts in the community!
      <Span>Generated with AI</Span>
      </Headline>
      <Searchbar/>
      <Wrapper>
        <CardWrapper>
          <ImageCard item={item}/>
          <ImageCard item={item}/>
          <ImageCard item={item}/>
          <ImageCard item={item}/>
          <ImageCard item={item}/>
          <ImageCard item={item}/>
          <ImageCard item={item}/>
          <ImageCard item={item}/>
          <ImageCard item={item}/>
        </CardWrapper>
      </Wrapper>
    </Container>
  )
}

export default Home
