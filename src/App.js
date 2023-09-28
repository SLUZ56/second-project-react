import React, { useState, useRef, useEffect } from 'react'

import Burger from './assets/burger1.png'
import Trash from './assets/trash.svg'
import axios from 'axios'

import { Container, H1, Image, ContainerItems, Label, Input, Button, Order  } from './styles'

export default function App () {

  const [orders, setOrders] = useState([])   // array de pedidos
  const inputOrder = useRef()
  const inputName = useRef()

  async function addNewOrder() {
    
    const { data: newOrder } = await axios.post("http://localhost:3001/orders", { order:inputOrder.current.value, clientName:inputName.current.value , price:inputOrder.current.value, status:inputOrder.current.value })

    console.log(newOrder)

    setOrders([...orders, newOrder])

     


  }

 // REACT HOOK => useEffect
 // A minha aplicação inicia o useEffect é chamado
 useEffect(() => {
  async function fetchOrders() {
    const { data: newOrders } = await axios.get("http://localhost:3001/orders")

    setOrders(newOrders)

  }

  fetchOrders()
  
 }, [orders]) 




  function deleteOrder(orderId){
     const newOrders = orders.filter(order => order.id !== orderId)

     setOrders(newOrders)
  }
  

   
   return(

        <Container>

          <Image  alt="logo-imagem"  src={Burger}/>

          <ContainerItems>

          <H1>Faça seu pedido!</H1>

          <Label>Pedido</Label>
          <Input ref={inputOrder} placeholder='1 Coca-Cola, 1 X-Salada'/>

          <Label>Nome do Cliente</Label>
          <Input ref={inputName} placeholder='Steve Jobs'/>

          <Button onClick={addNewOrder}>Novo Pedido</Button>
          <>
           
           <>
              <ul>
                  { orders.map( order => (
                      <Order key={order.id}>
                        <p>{order.order}</p> <p>{order.name}</p> <p>{order.price}</p> <p>{order.status}</p> 
                        <button onClick={() => deleteOrder(order.id)}>
                          <img src={Trash} alt="lata-de-lixo"/>
                        </button> 
                      </Order>

                    ))
                  }
              </ul>
              </> 
          </>
          </ContainerItems>
           
        </Container>
   )

}

 