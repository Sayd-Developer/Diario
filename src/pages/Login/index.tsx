import { ContainerContent, ContainerLeft, ContainerRight, Header, Body, Footer, ContainerForm, Button, Input, GroupInput } from "./style"

import imgLogin from '../../assets/img/imgLogin.svg'
import userLogin from "../../assets/img/userLogin.svg"
import passwordLogin from '../../assets/img/passwordLogin.svg'

import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from 'zod';
import { useNavigate } from "react-router-dom";

const schemaForm = z.object({
  login: z.object({
    email: z.string().min(10, 'Por favor, informe seu email'),
    password: z.string().min(6, 'Por favor, informe sua senha')
  })
})

type FormProps = z.infer<typeof schemaForm>

export default function Login() {

  const { register, handleSubmit, formState: { errors } } = useForm<FormProps>({
    criteriaMode: "all",
    mode: "all",
    resolver: zodResolver(schemaForm),
    defaultValues: {
      login: {
        email: "",
        password: ""
      }
    }
  }
  );

  const handleFormSubmit = (data: FormProps) => {
    console.log(data);
  }

  const navigate = useNavigate();

  return (
    <>
      <ContainerForm onSubmit={handleSubmit(handleFormSubmit)}>
        <ContainerLeft>
          <ContainerContent>
            <Header>
              <h1>Login</h1>
              <h2>Desvende sua história, <br />
                uma página por vez.</h2>
            </Header>
            <Body>
              <GroupInput>
                <img alt="" src={userLogin} width="19px" />
                <Input {...register('login.email')} type="text" maxLength={9} />
              </GroupInput>
              {errors.login?.email?.message && (
                <p>{errors.login?.email?.message}</p>
              )}


              <GroupInput>
                <img src={passwordLogin} alt="" width="19px" />
                <Input {...register('login.password')} type="text" maxLength={9} />
              </GroupInput>
              {errors.login?.password?.message && (
                <p>{errors.login?.password?.message}</p>
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
      </ContainerForm >
    </>
  )
}
