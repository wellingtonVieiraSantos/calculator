import styled from "styled-components";

export const Button = styled.button`
    font-size: 1.5em;
    font-weight: bold;
    width: 3em;
    height: 3em;
    text-align:center;
    border-radius:50%;
    border: none;
    background-color: ${props => props.operation ? "orangered" : "lightgray"};
    color: ${props => props.operation ? "white" : "black"};
    &:hover{
        transform:scale(1.2);
        transition: .3s;
    }
`