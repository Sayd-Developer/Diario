import { styled } from "styled-components"

export const ContainerForm = styled.form`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100%;

  @media screen and (max-width: 1290px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
export const ContainerLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  flex: 1;
  height: 100vh;
  background-color: ${props => props.theme.backgroundColor};
`
export const ContainerRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  height: 100vh;

  @media screen and (max-width: 1290px) {
    display: none;
  }
`

export const ContainerContent = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (width: 450px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h4 {
    color: ${props => props.theme.textColor};
  }
`

export const HeaderButtonImg = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 57%;

  @media screen and (max-width: 450px) {
    width: 47%;
  }
`

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  color: ${props => props.theme.textColor};

  h1 {
    font-size: 50px;
  }
  h2 {
    font-size: 27px;
    margin-bottom: 30px;
    margin-top: 30px;

    @media screen and (max-width: 450px) {
      font-size: 23px;
    }
  }

  @media screen and (max-width: 450px) {
    width: 350px;
  }
`
export const GroupInput = styled.div`
  display: flex;
  border: 2px solid #fff;
  border-radius: 15px;
  height: 65px;
  width: 410px;

  padding: 17px;
  margin-top: 10px;

  @media screen and (max-width: 450px) {
    width: 350px;
  }
`
export const Body = styled.div`
  p {
    margin-top: 10px;
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
  margin-top: 10px;

  @media screen and (max-width: 450px) {
    width: 350px;
  }
`

export const Button = styled.button`
  border: none;
  background: ${props => props.theme.buttonColor};
  color: ${props => props.theme.buttonTextColor};
  width: 180px;
  height: 50px;
  border-radius: 15px;
  transition:
    background-color 0.3s,
    color 0.3s;

  font-weight: 800;

  &:hover {
    background-color: #111;
    color: #fff;
  }

  @media screen and (max-width: 450px) {
    width: 150px;
  }
`
