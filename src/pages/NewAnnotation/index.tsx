import { Container, ContainerContent, Button, SeparatorInput, SeparatorButton, Separator } from "./style"

import InputTitleRegister from "../../components/InputTitleRegister"
import InputAreaNewRegister from "../../components/InputAreaRegister"

export default function NewAnnotation() {
  return <Container>
    <ContainerContent>
      <SeparatorInput>
        <InputTitleRegister type="text" placeholder="Título da anotação" width={250} height={60} />
        <Separator />
        <InputAreaNewRegister placeholder="Faça sua anotação..." />
      </SeparatorInput>

      <SeparatorButton>
        <Button>Salvar</Button>
      </SeparatorButton>

    </ContainerContent>
  </Container >
}
