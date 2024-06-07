import styled from "styled-components";

export const Button = styled.button`

    width: 342px;
    height: 68px;
    margin-top: 75px;

    background: ${props => props.change ? "rgba(255, 255, 255, 0.14)" : "#D93856"} ;
    color: #FFF;
    font-size: 17px;
    font-weight: 900;

    border: none;

&:hover{
    opacity: 0.8;
}

&:active{
    opacity: 0.5;
}

`;