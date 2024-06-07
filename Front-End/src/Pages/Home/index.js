import React, { useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Body from "../../Components/container";
import BoxItems from "../../Components/Menu"
import H1 from "../../Components/Title";
import Button from "../../Components/Button"

import Burguer from "../../assets/burger 1.png"

import { Image, P, Input } from "./style";

const Home = () => {

    const [orders, setOrders] = useState([]);
    const inputOrder = useRef();
    const inputClient = useRef();
    const navigate = useNavigate()

    async function addNewOrder() {

        const { data: newOrder } = await axios.post("http://localhost:3001/order",
            {
                order: inputOrder.current.value,
                client: inputClient.current.value,
            });

        setOrders([...orders, newOrder]);

        navigate("/order")
    };

    return (
        <Body>

            <Image alt="Code-Club-Burguer" src={Burguer} />

            <BoxItems>

                <H1>Faça Seu Pedido!</H1>

                <P>Pedido</P>
                <Input ref={inputOrder} placeholder="1 Coca-Cola, 1 X-Salada" />

                <P>Nome do Cliente</P>
                <Input ref={inputClient} placeholder="Nome" />

                <Button onClick={addNewOrder}> Novo Pedido </Button>

            </BoxItems>

        </Body>
    )
};

export default Home;
