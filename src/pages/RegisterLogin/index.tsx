import { ContainerForm, ContainerLeft, ContainerRight, GroupInput, Button } from "./style"

import imgLogin from "../../assets/img/imgLogin.svg"
import userLogin from "../../assets/img/userLogin.svg"
import passwordLogin from "../../assets/img/passwordLogin.svg"

import { InputCustomizado } from "../../components/InputLogin/style"

export default function RegisterLogin() {
    return (
        <ContainerForm>
            <ContainerLeft>
                <img src={imgLogin} alt="" />
            </ContainerLeft>
            <ContainerRight>
                <h1>Login</h1>
                <GroupInput>
                    <img src={userLogin} alt="" />
                    <InputCustomizado />
                </GroupInput>
                <GroupInput>
                    <img src={passwordLogin} alt="" />
                </GroupInput>
                <GroupInput>
                    <img src={passwordLogin} alt="" />
                </GroupInput>

                <Button>Cadastrar</Button>
            </ContainerRight>
        </ContainerForm>
    )
}
