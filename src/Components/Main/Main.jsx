import React from "react";
import { dataImg } from "./data";
import { Button, Card, Container, Gallery, More, Title, Wrapper } from "./styled"
import { LazyLoadImage } from 'react-lazy-load-image-component';



const Main = () => {
    const CardContainer = React.memo(({ img }) => (
        <Card key={img.id}>
            <LazyLoadImage alt="pexel images" src={img.src} effect="blur" className="img" loading="lazy" />

        </Card>
    ));

    return (
        <Container>
            <Title>Gallery</Title>
            <Gallery>
                <Wrapper>
                    {dataImg.map(img => (
                        <CardContainer key={img.id} img={img} />
                    ))}
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