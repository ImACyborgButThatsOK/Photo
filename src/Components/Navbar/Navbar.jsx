import { Center, Container, Left, Logo, Right, Search, SearchContainer } from './styled'

const Navbar = () => {
    return (
        <Container>
            <Left>
                <Logo>Photo Lain</Logo>
            </Left>
            <Center>
                <SearchContainer>
                    <Search placeholder='Search...' />
                </SearchContainer>
            </Center>
            <Right></Right>
        </Container>
    )
}

export default Navbar