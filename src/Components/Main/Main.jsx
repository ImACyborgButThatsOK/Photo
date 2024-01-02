import { Button, Card, Container, Gallery, Image, More, Title, Wrapper } from "./styled"

const Main = () => {
    return (
        <Container>
            <Title>Gallery</Title>
            <Gallery>
                <Wrapper>
                    <Card><Image src="./image/main/pexel_1.jpg" /></Card>
                    <Card><Image src="./image/main/pexel_2.jpg" /></Card>
                    <Card><Image src="./image/main/pexel_3.jpg" /></Card>
                    <Card><Image src="./image/main/pexel_4.jpg" /></Card>
                    <Card><Image src="./image/main/pexel_5.jpg" /></Card>
                    <Card><Image src="./image/main/pexel_6.jpg" /></Card>
                    <Card><Image src="./image/main/pexel_7.jpg" /></Card>
                    <Card><Image src="./image/main/pexel_8.jpg" /></Card>
                    <Card><Image src="./image/main/pexel_9.jpg" /></Card>
                    <Card><Image src="./image/main/pexel_10.jpg" /></Card>
                </Wrapper>

                <More>
                    <Button>LOGIN</Button>
                    <Button>REGISTER</Button>
                </More>
            </Gallery>


        </Container>
    )
}

export default Main