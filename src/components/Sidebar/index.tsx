import { Container, ContainerContent, Pages, Header, Button } from "./style"

import close from "../../assets/img/close.svg"
import Register from "../../assets/img/registerHome.svg"
import User from "../../assets/img/userHome.svg"
import NewAnnotation from "../../assets/img/newAnnotationHome.svg"
import { useState } from "react"

export default function Sidebar() {


  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed((prev) => !prev);
  };

  return (
    <Container isCollapsed={isCollapsed}>
      <ContainerContent>
        <Header>
          <button onClick={toggleSidebar}>
            <img src={close} alt="" />
          </button>
        </Header>
        <Pages>
          <Button>
            <img src={User} alt="" height="25px" />
            Início
          </Button>
          <Button>
            <img src={NewAnnotation} alt="" height="25px" />
            Nova Anotação
          </Button>
          <Button>
            <img src={Register} alt=" " height="25px" />
            Registro de Anotação
          </Button>
        </Pages>
      </ContainerContent>
    </Container>
  )
}
