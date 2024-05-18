import { styled } from "styled-components"

export const Container = styled.div<{ isCollapsed: boolean }>`
  display: flex;
  flex-direction: column;
  background: ${props => props.theme.primary};
  width: ${props => (props.isCollapsed ? "25%" : "60px")};
  transform: ${props => (props.isCollapsed ? "true" : "scaleX(-1)")};
  transition: width 0.9s ease;
  height: 100vh;
  span {
    display: ${props => (props.isCollapsed ? "" : "none")};
  }
`

export const Header = styled.header`
  display: flex;
  justify-content: flex-end;
  padding: 20px;
`
export const Pages = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 250px;
`
export const Button = styled.button`
  display: flex;
  width: 77%;
  height: 42px;
  display: flex;
  align-items: center;
  background: white;
  border-radius: 4px;
  border: none;
  padding: 15px;
  font-weight: 800;

  span {
    margin-right: 5px;
    flex-grow: 1;
  }
`
