import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import BurgerBag from '../../assets/burger.png'
import Trash from '../../assets/trash.svg'
import axios from 'axios'
// const axios = require('axios/dist/browser/axios.cjs'); // browser

import { Container, H1, Image, ContainerItems, Button, Order  } from './styles'

export default function Orders () {

  const [orders, setOrders] = useState([])  // array de pedidos
  const history = useHistory()  
 

 // REACT HOOK => useEffect
 // A minha aplicação inicia o useEffect é chamado
 useEffect(() => {
    async function fetchOrders() {
      const { data: newOrders } = await axios.get("http://localhost:3002/orders")

      setOrders(newOrders)

  }

  fetchOrders()
  
 }, []) 




 async function deleteOrder(orderId){
     await axios.delete(`http://localhost:3002/orders/${orderId}`)
     const newOrders = orders.filter(order => order.id !== orderId)

     setOrders(newOrders)
  }
  

  function goBackPage(){
     
    history.push("/")

  }
   
   return(

        <Container>

          <Image  alt="logo-imagem"  src={BurgerBag}/>

          <ContainerItems>

          <H1>Pedidos</H1>

          <>
           <>
              <ul>
                  { orders.map( order => (
                      <Order key={order.id}>
                        <p>{order.order}</p> <p className='bold'>{order.clientName}</p> <p>{order.price}</p> <p>{order.status}</p> 
                        <button onClick={() => deleteOrder(order.id)}>
                          <img src={Trash} alt="lata-de-lixo"/>
                        </button> 
                      </Order>

                    ))
                  }
              </ul>
              </> 
          </>

          <Button onClick={goBackPage}>Voltar</Button>

          </ContainerItems>
           
        </Container>
   )

}

 