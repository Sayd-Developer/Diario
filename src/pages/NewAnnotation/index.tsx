import { Container, ContainerContent, Button, SeparatorInput, SeparatorButton, Separator } from "./style"

import InputTitleRegister from "../../components/InputTitleRegister"
import InputAreaNewRegister from "../../components/InputAreaRegister"

export default function NewAnnotation() {
  return <Container>
    <ContainerContent>
      <SeparatorInput>
        <InputTitleRegister type="text" placeholder="Título" width={250} height={60} />
        <Separator />
        <InputAreaNewRegister placeholder="Nova Anotação..." />
      </SeparatorInput>

      <SeparatorButton>
        <Button>Salvar</Button>
      </SeparatorButton>

    </ContainerContent>
  </Container >
}
