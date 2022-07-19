import Link from 'next/link'
import React from 'react'
import { ChannelImage, ChannelName, Container, Details, Image, Info, Texts, Title } from './card.style'
import channelImage from '../../public/image/dantube.png';

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
              src={channelImage.src}
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