import styled from "styled-components";

export const Container=styled.div`
    position:sticky;
    top: 0;
    background-color: ${({theme})=>theme.bgLighter};
    height: 56px;
`;

export const Wrapper=styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 100%;
    padding: 0px 20px;
    position: relative;
     & > div > input {
    width: inherit;

    /* 
      input elemnt has 
        - 1px border
        - 1px padding on top and bottom
        - 2px padding on each side 
      override input elemnt CSS to avoid overflowing parent element
    */
    border: 0px;
    padding: 0;
  }
`;

export const Search=styled.div`
    width: 40%;
    position: absolute;
    left: 0px;
    right: 0px;
    margin:auto;
    display: flex;
    align-items: center;
    justify-content:space-between;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius:3px;
`;

export const Input=styled.input`
    border:none;
    background-color: transparent;
    outline:none;
    color:${({theme})=>theme.text}
`;




