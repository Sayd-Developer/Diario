import { Container, ContainerContent, Button } from "./style"

import InputRegister from "../../components/InputRegister"

export default function NewAnnotation() {
  return <Container>
    <ContainerContent>
      <h1>Anotação:</h1>
      <InputRegister type="text" placeholder="Título da anotação" color="#131313" />
      <InputRegister type="text" placeholder="Desenvolvimento da anotação" />
      <Button>Salvar</Button>
    </ContainerContent>
  </Container>
}
