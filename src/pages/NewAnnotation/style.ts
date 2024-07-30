import { styled } from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 100vw;
`
export const ContainerContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`
export const Button = styled.button`
  border: none;
  background: ${props => props.theme.backgroundText};
  color: #fff;
  width: 230px;
  height: 50px;
  border-radius: 15px;

  font-weight: 800;

  transition:
    background-color 0.3s,
    color 0.3s;

  &:hover {
    background-color: #111;
    color: #fff;
  }
`

export const SeparatorInput = styled.div`
  display: flex;
  flex-direction: column;
`

export const Separator = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`

export const SeparatorButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 50px;
`
