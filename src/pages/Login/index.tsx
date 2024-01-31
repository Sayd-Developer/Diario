import { Container, ContainerContent, ContainerLeft, ContainerRight } from "./style"

import imgLogin from "../../assets/img/imgLogin.svg"


export default function Login() {
  return (
    <Container>
    <ContainerContent>
        <ContainerLeft>
            Login
        </ContainerLeft>
        <ContainerRight>
          <img src={imgLogin} alt="" />
        </ContainerRight>
    </ContainerContent>
  </Container>
)
}
