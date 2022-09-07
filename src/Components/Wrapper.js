import styled from "styled-components"

export const Wrapper = styled.section`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    max-width: 300px;
    margin: 30px auto;
    padding: 20px 30px;
    background-color: ${({theme})=>theme.bgc.primary};
    border-radius:10px;
    box-shadow:2px 2px 10px rgba(0,0,0,0.2);
    table {
        border-spacing: .5em;
    }
    p{       
        width: 100%;
        color:white;
        text-align:right;
        padding: 10px 0;
        min-height: 20px;
    } 
`
