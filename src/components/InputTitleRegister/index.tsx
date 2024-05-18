import { InputPersonalizado } from "./style"

interface InputTitleNewRegisterProps {
    type: string;
    placeholder?: string;
    maxLength?: number;
    width: number;
    height: number;
}

const InputTitleNewRegister: React.FC<InputTitleNewRegisterProps> = ({ type, placeholder, maxLength, width, height }) => {
    return (
        <InputPersonalizado type={type} placeholder={placeholder} maxLength={maxLength} width={width} height={height} />
    )
}

export default InputTitleNewRegister