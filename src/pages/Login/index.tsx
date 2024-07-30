import { ContainerContent, ContainerLeft, ContainerRight, HeaderButtonImg, Header, Body, Footer, ContainerForm, Button, GroupInput } from "./style"

import imgLogin from '../../assets/img/imgLogin.svg';
import userLogin from "../../assets/img/userLogin.svg";
import passwordLogin from '../../assets/img/passwordLogin.svg';
import { useForm } from 'react-hook-form';
// import { zodResolver } from "@hookform/resolvers/zod";
import { z } from 'zod';
import { useNavigate } from "react-router-dom";
import { InputCustomizado } from "../../components/InputLogin/style";
import useTheme from "../../Context/hooks/useTheme"
import ThemeSwitcher from "../../components/ThemeSwitcher";

const schemaForm = z.object({
  login: z.object({
    email: z.string().min(6, 'Por favor, informe um email válido'),
    password: z.string().min(6, 'Por favor, informe uma senha válida')
  })
});

type FormProps = z.infer<typeof schemaForm>;

export default function Login() {
  const { toggleTheme } = useTheme()

  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm<FormProps>({
    // resolver: zodResolver(schemaForm),
    defaultValues: {
      login: {
        email: "",
        password: ""
      }
    }
  });

  const handleFormSubmit = (data: FormProps) => {
    console.log(data);
  };


  return (
    <>
      <ContainerForm onSubmit={handleSubmit(handleFormSubmit)}>
        <ContainerLeft>
          <HeaderButtonImg>
            <ThemeSwitcher onClick={toggleTheme} />
          </HeaderButtonImg>
          <ContainerContent>
            <Header>
              <h1>Login</h1>
              <h2>Desvende sua história, uma <br /> página por vez.</h2>
            </Header>
            <Body>
              <GroupInput>
                <img alt="" src={userLogin} width="19px" />
                <InputCustomizado {...register('login.email')} type="text" maxLength={20} />
              </GroupInput>
              {errors.login?.email && (
                <p>{errors.login.email.message}</p>
              )}

              <GroupInput>
                <img src={passwordLogin} alt="" width="19px" />
                <InputCustomizado {...register('login.password')} type="password" maxLength={20} />
              </GroupInput>
              {errors.login?.password && (
                <p>{errors.login.password.message}</p>
              )}

              <h4>Esqueceu sua senha? Clique Aqui</h4>
            </Body>
            <Footer>
              <Button type="submit">Enviar</Button>
              <Button onClick={() => navigate("/")}>Cadastrar</Button>
            </Footer>
          </ContainerContent>
        </ContainerLeft>

        <ContainerRight>
          <img src={imgLogin} alt="" />
        </ContainerRight>
      </ContainerForm>
    </>
  );
}
