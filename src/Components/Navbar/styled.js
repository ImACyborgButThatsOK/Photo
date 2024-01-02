import styled from "styled-components";

export const Container = styled.div`
    background-color: #0d0a0b;
    height: 80px;
    padding: 10px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;    
`;

export const Left = styled.div`
    flex: 1;
`;
export const Logo = styled.h1`
    font-size: 40px;
    font-weight: 300;
    padding-left: 60px;
`;
export const Center = styled.div`
     flex: 1;
`;
export const SearchContainer = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white ;
    border: 1px solid aliceblue;
    padding: 10px;
    border-radius: 10px;
`;
export const Search = styled.input`
    width: 90%;
    border: none;
    outline: none;
    font-weight: 500;
    font-size: 20px;    
`;
export const Right = styled.div`
     flex:2;
`;