import styled from "styled-components";

export const Container = styled.div`
    background-color: #0d0a0b;
    width: 100%;
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
    @media screen and (max-width: 600px) {
        justify-content: space-between;
        font-size: 30px;
        padding: 0px;
  }
`;
export const Center = styled.div`
     flex: 1;
  
`;
export const SearchContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white ;
    border: 1px solid aliceblue;
    padding: 10px;
    border-radius: 20px;
    @media screen and (max-width: 600px) {
        padding: 5px;
  }
   
`;
export const Search = styled.input`
    width: 100%;
    border: none;
    outline: none;
    font-weight: 500;
    font-size: 20px;    
`;
export const Right = styled.div`
   @media screen and (max-width: 600px) {
        display: none;
  }
`;