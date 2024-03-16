import { styled } from "styled-components"

export const Container = styled.div<{ isCollapsed: boolean }>`
display: flex;
flex-direction: column;
background: ${props => props.theme.primary}; 
/* width: ${({ isCollapsed }) => (isCollapsed ? '50px' : '200px')}; */
/* transition: width 0.3s ease; */
width: 18vw;
height: 100vh;
`
export const ContainerContent = styled.div`
    
`
export const Header = styled.header`
display: flex;
justify-content: flex-end;
padding: 20px;
`
export const Pages = styled.div`
    
`
export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
`
