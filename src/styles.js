import styled from 'styled-components'

import Background from './assets/bg.png'

export const Container = styled.div `
  background: url("${Background}");
  
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  

`

export const Image = styled.img `
    width: 342px;
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
    margin-top: -50px;
    margin-bottom: 98px;
    line-height: 40px;
    text-align: center;

    

`

export const Label= styled.p `
    color: #EEEEEE;
    font-size: 18px;
    font-weight: 700;
    line-height: 22px;
    word-wrap: break-word;
    margin-bottom: 0px;
    margin-left: 18px;

`

export const Input= styled.input `
    width: 342px;
    height: 58px;
    color: white;
    font-size: 18px;
    font-weight: 300;
    word-wrap: break-word;

    margin: 0 auto; 
    margin-bottom: 34px;
    padding: 15px;
    background-color: #47474c;
    border: none;
    border-radius: 8px;

    // 19px 240px 18px 15px
  

`

export const Button= styled.button `
    width: 342px;
    height: 68px;
    background-color:  #D93856;
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
    height: 160px;

    border: none;
    outline: none;

    p {
     
        display: flex;
        flex-direction: column;
        
        color: #757575;
        font-size: 16px;
        font-weight: 300;
        word-wrap: break-word;
        padding: 5px; 
        text-align: left;
    
     }
 
    
    button {
      display: flex;
      justify-content: end; 
      background: none;
      border: none;
      cursor: pointer;
    }

   
`