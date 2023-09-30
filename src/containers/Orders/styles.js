import styled from 'styled-components'

import Background from '../../assets/bg.png'

export const Container = styled.div `
  background: url("${Background}");
  
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  height: 100%;
  min-height: 100vh;
  

`

export const Image = styled.img `
    width: 246px;
    height: 354px;
    margin: 11px 36px 0px 24px;
 
  

`

export const ContainerItems = styled.div `
    padding: 50px 36px;
    display: flex;
    flex-direction: column; 


`
export const H1 = styled.h1 `
    color: white;
    font-size: 28px;
    font-weight: 700;
    word-wrap: break-word;
    margin-top: -30px;
    margin-bottom: 20px;
    line-height: 40px;
    text-align: center;

    

`


export const Button= styled.button `
    width: 342px;
    height: 68px;
    background-color: rgba(255, 255, 255, 0.14);
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin: 0 auto;
    margin-top: 76px;
    

    color: white;
    font-size: 17px;
    font-weight: 900;
    word-wrap: break-word;
    padding: 5px; 
    text-align: center;

    display: flex;
    justify-content:center;
    align-items: center;
    gap: 20px;

    &:hover {
      opacity: 0.8;
    }

    &:active {
      opacity: 0.5;
    }

`


export const Order = styled.li `
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    padding: 10px;

    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 14px;

    width: 342px;
    height: 110px;

    border: none;
    outline: none;

    p {
     
        display: flex;
        flex-direction: column;
        
        color: #757575;
        font-size: 20px;
        font-weight: 600;
        word-wrap: break-word;
        padding: 5px; 
        text-align: left;

        .bold {
          color: #EEEEEE;
          font-weight: 900;
        }
    
     }
 
    
    button {
      /* position: relative; */
      margin-top: -70px;
      display: flex;
      flex-direction: row;
      justify-content: end; 
      align-items: center;
      background: none;
      border: none;
      cursor: pointer;
      /* color: rgba(255, 255, 255, 0.14); */
    }

   
`