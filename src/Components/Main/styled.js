import styled from "styled-components";

export const Container = styled.div`
     width: 100%;
     height: 150vh;
     padding: 20px;
     
`;
export const Title = styled.h1`

    text-align: center;
    color: white;
    font-size: 80px;
    font-weight: 300;
    padding: 10px;
    
`;
export const Gallery = styled.div`
    width: 90%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    position: relative;
    border-radius: 20px;
    overflow: hidden;
    border-radius: 20px;
`;
export const Wrapper = styled.div`
    margin-top: 100px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 20px;
    background-color: #e9ecef;
    filter: brightness(0.7);

`;
export const Card = styled.div`
    max-width: 400px;
    min-height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
        .img{
    max-width: 400px;
    min-height: 500px;
    object-fit: cover;
    border-radius: 10px;
        }
`;

export const More = styled.div` 

    width: 100%;
    height: 100px;
    background-color: #adb5bd;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
`;
export const Button = styled.button`
    padding: 15px 5px;
    width:150px;
    font-size: 20px;
    font-weight: bold;
    background-color: black;
    color: white;
    border: none;
    border-radius: 10px;
    transition: all ease 0.4s;
    cursor: pointer;
    &:hover{
        filter: brightness(0.5);
    }
`;
// export const Register = styled.button``;