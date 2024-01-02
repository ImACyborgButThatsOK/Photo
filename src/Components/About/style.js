import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
  
    margin: 200px 0px ;
`;
export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

`;
export const Transition = styled.img`
    border-radius: 10px;
    height: 210px;
    object-fit: cover;
`;
export const AboutContainer = styled.div`
    padding: 10px;
    display: flex;
    margin-top: 100px;
`;
export const Left = styled.div`
    flex:1 ;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const Image = styled.img`
    width: 85%;
    object-fit: cover;
    border-radius: 20px;
`;
export const Right = styled.div`
    flex:2 ;

    display: flex;
    align-items: center;
    justify-content: center;

    flex-direction: column;
`;
export const Info = styled.div`
    color: white;
    width: 90%;
    height:100%;

`;
export const Title = styled.h2`
    margin: 20px 0px;

    font-weight: 300;
    font-size: 80px;
`;
export const Desc = styled.p`
    font-size: 25px;
    line-height: 40px;
    font-weight: 300;
    color: silver;
`;