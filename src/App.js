import React, { useState, useRef } from 'react'

import Burger from './assets/burger1.png'
import Trash from './assets/trash.svg'

import { Container, H1, Image, ContainerItems, Label, Input, Button, ContainerOrders, ContainerLis, Order  } from './styles'

export default function App () {

  const [orders, setOrders] = useState([])   // array de pedidos
  const inputOrder = useRef()
  const inputName = useRef()

  function addNewOrder() {
    // console.log(inputOrder.current.value)
    // console.log(inputName.current.value)

    setOrders([...orders,{ id: Math.random(), order:inputOrder.current.value, name:inputName.current.value }])


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
          <ContainerOrders>
           <ContainerLis>
              <ul>
                  { orders.map( order => (
                      <Order key={order.id}>
                        <p>{order.order}</p> <p>{order.clientName}</p> <p>{order.price}</p> <p>{order.status}</p> 
                        <button><img src={Trash} alt="lata-de-lixo"/></button> 
                      </Order>

                    ))
                  }
              </ul>
              </ContainerLis> 
          </ContainerOrders>
          </ContainerItems>
           
        </Container>
   )

}

 