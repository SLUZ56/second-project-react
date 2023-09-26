import React from 'react'

import Burger from './assets/burger1.png'

import { Container, H1, Image, ContainerItems, Label, Input, Button  } from './styles'

export default function App () {
   
   return(

        <Container>

          <Image  alt="logo-imagem"  src={Burger}/>

          <ContainerItems>

          <H1>Faça seu pedido!</H1>

          <Label>Pedido</Label>
          <Input placeholder='1 Coca-Cola, 1 X-Salada'/>

          <Label>Nome do Cliente</Label>
          <Input placeholder='Steve Jobs'/>

          <Button>Novo Pedido</Button>
          </ContainerItems>
           
        </Container>
   )

}

 