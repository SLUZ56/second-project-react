import React, { useState, useRef } from 'react'

import Burger from '../../assets/burger1.png'

import axios from 'axios'
// const axios = require('axios/dist/browser/axios.cjs'); // browser

import { Container, H1, Image, ContainerItems, Label, Input, Button } from './styles'

export default function App () {

  const [orders, setOrders] = useState([])   // array de pedidos
  const inputOrder = useRef() 
  const inputName = useRef()

  async function addNewOrder() {

    const { data: newOrder } = await axios.post("http://localhost:3002/orders", { order:inputOrder.current.value, clientName:inputName.current.value})

    console.log(newOrder)

    
    setOrders([...orders, newOrder])

     


  }


   return(

        <Container>

          <Image  alt="logo-imagem"  src={Burger}/>

          <ContainerItems>

          <H1>Faça seu pedido!</H1>

          <Label>Pedido</Label>
          <Input ref={(inputOrder)} placeholder='1 Coca-Cola, 1 X-Salada'/>

          <Label>Nome do Cliente</Label>
          <Input ref={inputName} placeholder='Steve Jobs'/>

          <Button onClick={addNewOrder}>Novo Pedido</Button>
         
          </ContainerItems>
           
        </Container>
   )

}

 