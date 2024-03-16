import { styled } from "styled-components"

export const ContainerForm = styled.form`
display: flex;
flex-direction: row;
width: 100vw;
height: 100%;
`
export const ContainerLeft = styled.div`
display: flex;
justify-content: center;
align-items: center;

width: 50vw;
height: 100vh;
background-color: ${props => props.theme.primary};

`
export const ContainerRight = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 50vw;
height: 100vh;
`

export const ContainerContent = styled.div`
display: block;
flex-direction: column;
height: 65%;
width: 65%;
`
export const Header = styled.header`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
margin-left: 4%;

h1 {
    font-size: 50px;
}
h2 {
    font-size: 34px;
    margin-bottom: 30px;
    margin-top: 30px;

}

`
export const GroupInput = styled.div`
    display: flex;
    border: 2px solid #fff;
    border-radius: 15px;
    height: 46px;
    
    padding: 8px;
   
`
export const Body = styled.div`
margin-left: 4%;

p {
    color: red;
}

h4 {
    font-size: 11px;
}

`
export const Footer = styled.div` 
display: flex;
flex-direction: row;
justify-content: space-around;
margin-top: 70px;
`

export const Input = styled.input`
padding: 10px;
border: none;
width: 100%;
outline: none;
background-color: transparent;
`
export const Button = styled.button`
    border: none;
    background: #fff;
    width: 230px;
    height: 45px;
    border-radius: 15px;
   

    font-weight: bold;

`