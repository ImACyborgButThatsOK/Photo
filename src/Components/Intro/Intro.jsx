import React from 'react'
import { Button, Container, Desc, Img, InfoContainer, Left, Right, Title, Wrapper } from './style'

const Intro = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Img src="./image/Intro.png" />
                </Left>
                <Right>
                    <InfoContainer>
                        <Title>Lorem ipsum dolor sit amet consectetur.</Title>
                        <Desc>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, sapiente aliquam perspiciatis aspernatur sed praesentium architecto maiores asperiores consequuntur aut earum impedit velit accusamus recusandae voluptate temporibus autem sint reiciendis?</Desc>
                        <Button>Lorem dolor</Button>
                    </InfoContainer>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Intro