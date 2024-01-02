import styled from "styled-components";

export const Container = styled.div`

    width: 100%;
    height: 50vh;
    border-top: 1px solid silver;
    display: flex;
    color: silver;
    padding: 20px;
`;

export const Title = styled.h1`
    text-align: center;
    font-size: 50px;
    font-weight: 300;
   
`;
export const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 40px;
`;
export const SocialMidia = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    
    gap: 20px;
    font-size: 50px;
    .icon{
        transition: all ease 0.4s;
        cursor: pointer;
    &:hover{
        filter: brightness(0.5);
    }  

    }
`;
export const Center = styled.div`
    flex: 1;


`
export const ContainerLinks = styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
`;
export const Links = styled.a`

    list-style: none;
    text-decoration: none;
    color: silver;
    font-size: 30px;
    font-weight: 300;

    transition: all ease 0.4s;
    &:hover{
        filter: brightness(0.5);
    }

`;
export const Right = styled.div`
    flex: 1;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;
export const BuyTitle = styled.a`

    font-size: 50px;
    font-weight: 300px;
    text-decoration: none;
    color: #b7e4c7;

`;
export const Image = styled.img`
    width: 40%;
`;