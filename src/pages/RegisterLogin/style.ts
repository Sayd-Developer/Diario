import styled from "styled-components"

export const ContainerForm = styled.form`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100%;
`
export const ContainerLeft = styled.div``
export const ContainerRight = styled.div`
  h1 {
    font-size: 28px;
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 50vw;
  height: 100vh;
  background-color: ${props => props.theme.primary};
`
export const GroupInput = styled.div`
  display: flex;
  border: 2px solid #fff;
  border-radius: 15px;
  height: 65px;
  width: 455px;

  padding: 17px;
  margin-top: 10px;
`
export const Button = styled.button`
  background: #fff;
  color: #131313;
  width: 230px;
  height: 50px;
  border-radius: 15px;

  font-weight: 800;
  margin-top: 15px;
`
