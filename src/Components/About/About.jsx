import { Container, Content, AboutContainer, Desc, Image, Info, Left, Right, Title, Transition } from './style'

const About = () => {
    return (
        <Container>
            <Content>
                <Transition src="./image/transition.png" />
            </Content>

            <AboutContainer>
                <Left>
                    <Image src="./image/about.png" />
                </Left>
                <Right>
                    <Info>
                        <Title>Lorem ipsum dolor sit amet consectetur.</Title>
                        <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id velit quae voluptatem minima? Eos, voluptatibus amet voluptas sequi optio cupiditate maiores consectetur? Cupiditate reprehenderit similique molestias id, repudiandae tenetur odio magnam dolorem eos, sint molestiae reiciendis ad deserunt nobis nam quibusdam hic facilis perferendis fuga laborum eaque quaerat? Quae, aspernatur! Adipisci culpa recusandae delectus et, sit incidunt at iste harum sunt quas maxime dolor ipsam, eum modi facere laudantium facilis, possimus quos vero eaque quod. Est exercitationem natus esse officiis, a repudiandae rem ab autem recusandae error amet provident voluptatibus quae molestias earum qui accusantium aperiam laudantium! Distinctio, mollitia quisquam.</Desc>
                    </Info>
                </Right>
            </AboutContainer>

        </Container>
    )
}

export default About