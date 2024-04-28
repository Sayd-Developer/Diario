import { Container, ContainerContent } from "./style"

import InputRegister from "../../components/InputRegister"

export default function NewAnnotation() {
  return <Container>
    <ContainerContent>
      <h1>Anotação:</h1>
      <InputRegister type="text" placeholder="hdbasubd" />
      <InputRegister type="text" />
      <button>dhsavduv</button>
    </ContainerContent>
  </Container>
}
