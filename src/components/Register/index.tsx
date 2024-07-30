import { ContainerRegister, Registers } from "./style"


interface CustomRegisterProps {

}

const CustomRegister: React.FC<CustomRegisterProps> = () => {
    return (
        <ContainerRegister>
            <Registers>
                <h1>Title:</h1>
                <h1>Data:</h1>
                <button>Ver conteúdo</button>
            </Registers>
        </ContainerRegister>
    )
}

export default CustomRegister