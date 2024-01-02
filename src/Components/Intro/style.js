import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    border-top: 1px solid white;
    border-bottom: 1px solid white;
`;
export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
`;
export const Left = styled.div`
    flex: 1;
    display: flex;
    border-right: 1px solid white;
    
`;
export const Img = styled.img`
    width: 100%;
    object-fit: cover;
    border-radius: 10px;
`;
export const Right = styled.div`
    flex: 1;
`;
export const InfoContainer = styled.h1`
    width: 100%;
    height: 100%;
    padding: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: white;
    gap: 50px;
`;
export const Title = styled.h1`
    font-size: 60px;
    font-weight: 300;
`;
export const Desc = styled.p`
    font-size: 20px;
    font-weight: 300;
`;
export const Button = styled.button`

    background-color: transparent;
    border: 1px solid white;
    font-size: 40px;
    padding: 10px 30px;
    font-weight: bold;
    border-radius: 10px;
    color: white;
    transition: all ease 0.4s;
    &:hover{
        filter: brightness(0.7);
        cursor: pointer;
    }

`;