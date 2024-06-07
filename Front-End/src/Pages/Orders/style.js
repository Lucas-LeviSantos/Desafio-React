import styled from "styled-components";

export const Image = styled.img`
`;

export const Order = styled.li`

width: 342px;
min-height: 101px;
margin-top: 20px;
padding: 10px;

border-radius: 14px;
background: rgba(255, 255, 255, 0.25);

list-style: none;

display: flex;
align-items: center;
justify-content: space-around;

div{
    display: flex;
    flex-direction: column;
    gap: 15px;

    width: 230px;
}

#pedido{
    color: #FFF;
    font-size: 18px;
    font-weight: 300;
    text-align: justify;
}

#cliente{
    color: #FFF;
    font-size: 18px;
    font-weight: 700;
}

button{
    background: none;
    cursor: pointer;
    border: none;
}

`