import { BuyTitle, Center, Container, ContainerLinks, Image, Left, Links, Right, SocialMidia, Title } from './styled'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
    return (
        <Container>
            <Left>
                <Title>Social Midia</Title>
                <SocialMidia>
                    <FaFacebook className='icon' />
                    <FaInstagram className='icon' />
                    <FaXTwitter className='icon' />
                    <FaPinterest className='icon' />
                    <FaWhatsapp className='icon' />
                </SocialMidia>
            </Left>
            <Center>
                <Title>Lorem ipsum.</Title>
                <ContainerLinks>
                    <Links target='_blank' href='http://localhost:3000/'> dolor sit amet.</Links>
                    <Links target='_blank' href='http://localhost:3000/'> Assumenda deserunt fuga </Links>
                    <Links target='_blank' href='http://localhost:3000/'> sit amet consectetur</Links>
                    <Links target='_blank' href='http://localhost:3000/'> adipisicing elit.</Links>
                </ContainerLinks>
            </Center>
            <Right>
                <BuyTitle>Buy me a coffe!</BuyTitle>
                <Image src="./image/coffee.png" />
            </Right>
        </Container>
    )
}

export default Footer