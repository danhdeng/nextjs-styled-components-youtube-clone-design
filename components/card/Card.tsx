import Link from 'next/link'
import React from 'react'
import { ChannelImage, ChannelName, Container, Details, Image, Info, Texts, Title } from './card.style'

function Card({type}:{type:string}) {
  return (
    <Container type={type}>
        <Link href="/video/:id" style={{textDecoration:"none"}}>
          <Image type={type}
            src="https://i9.ytimg.com/vi_webp/k3Vfj-e1Ma4/mqdefault.webp?v=6277c159&sqp=CIjm8JUG&rs=AOn4CLDeKmf_vlMC1q9RBEZu-XQApzm6sA" alt="" />
        </Link>
        <Details type={type}>
          <ChannelImage 
              type={type} 
              src="https://yt3.ggpht.com/yti/APfAmoE-Q0ZLJ4vk3vqmV4Kwp0sbrjxLyB8Q4ZgNsiRH=s88-c-k-c0x00ffffff-no-rj-mo"
              alt=""     
          /> 
          <Texts>
            <Title>Test Video</Title>
            <ChannelName>Dan Love Dev</ChannelName>
            <Info>660,908 views • 1 day ago</Info>
          </Texts>
      </Details>
    </Container>
  )
}

export default Card