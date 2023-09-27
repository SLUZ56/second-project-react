import React, { useState } from 'react'

import Burger from './assets/burger1.png'
import Trash from './assets/trash.svg'

import { Container, H1, Image, ContainerItems, Label, Input, Button, ContainerOrders, ContainerLis, Order  } from './styles'

export default function App () {

  const [orders, setOrders] = useState([])   // array de pedidos
  const [order, setOrder] = useState()   // array de pedidos
  

  function addNewOrder() {
    setOrders()
    
  }

  function changeInputOrder(event) {
    setOrder(event.target.value)
  }
   
   return(

        <Container>

          <Image  alt="logo-imagem"  src={Burger}/>

          <ContainerItems>

          <H1>Faça seu pedido!</H1>

          <Label>Pedido</Label>
          <Input onChange={changeInputOrder} placeholder='1 Coca-Cola, 1 X-Salada'/>

          <Label>Nome do Cliente</Label>
          <Input placeholder='Steve Jobs'/>

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

 