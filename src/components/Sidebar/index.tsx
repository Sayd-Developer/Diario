import { Container, Pages, Header, Button } from "./style";
import close from "../../assets/img/close.svg";
import Register from "../../assets/img/book.svg";
import User from "../../assets/img/userHome.svg";
import NewAnnotation from "../../assets/img/newAnnotationHome.svg";
import { useNavigate } from "react-router-dom";
import { useSidebar } from "../../Context/hooks/useSidebar";

export default function Sidebar() {
  const { toggleSidebar, isCollapsed } = useSidebar();

  const handleCloseSidebar = () => {
    toggleSidebar();
  };

  const navigate = useNavigate();

  return (
    <Container isCollapsed={isCollapsed}>
      <Header>
        <button onClick={handleCloseSidebar} style={{ background: "transparent", border: "none" }}>
          <img src={close} alt="" />
        </button>
      </Header>
      <Pages>
        <Button onClick={() => navigate("/")}>
          <img src={User} alt="" height="25px" />
          <span>Início</span>
        </Button>
        <Button onClick={() => navigate("/newAnnotation")}>
          <img src={NewAnnotation} alt="" height="25px" style={{ marginRight: "0px" }} />
          <span>Registrar</span>
        </Button>
        <Button onClick={() => navigate("/salvo")} >
          <img src={Register} alt=" " height="25px" />
          <span>Registros</span>
        </Button>
      </Pages>
    </Container>
  );
}