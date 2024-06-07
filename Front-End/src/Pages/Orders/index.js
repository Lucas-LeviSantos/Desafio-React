import React, { useState, useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Body from "../../Components/container";
import BoxItems from "../../Components/Menu"
import H1 from "../../Components/Title";
import Button from "../../Components/Button"

import Burguer from "../../assets/burger (1) 1.png"
import Lixeira from "../../assets/18297 4.svg"

import { Order, Image } from "./style";

const Orders = () => {

    const [orders, setOrders] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        async function fetchOrders() {
            const {data: searchedOrder} = await axios.get("http://localhost:3001/order");

            setOrders(searchedOrder);
        };
        fetchOrders()
    }, []);

    async function deleteOrder(orderId) {

        await axios.delete(`http://localhost:3001/order/${orderId}`)

        const newOrders = orders.filter((order) => order.id !== orderId);
        setOrders(newOrders);
    };

    function gobackPage(){
        navigate("/")
    }

    return (
        <Body>

            <Image alt="Code-Club-Burguer" src={Burguer} />

            <BoxItems>

                <H1>Pedidos</H1>

                <ul>
                    {orders.map((order) => (
                        <Order key={order.id}>
                            <div>
                                <p id="pedido">{order.order}</p>
                                <p id="cliente">{order.client}</p>
                            </div>
                            <button onClick={() => deleteOrder(order.id)}> <img alt="Deletar" src={Lixeira} /> </button>
                        </Order>
                    ))}
                </ul>

                <Button change={true} onClick={gobackPage}> Voltar </Button>

            </BoxItems>

        </Body>
    )
};

export default Orders;
