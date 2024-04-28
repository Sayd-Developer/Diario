import { InputPersonalizado } from "./style"

interface InputPersonalizadoProps {
    type: string;
    placeholder?: string;
    color?: string;
    maxLenght?: number;
}

const InputRegister: React.FC<InputPersonalizadoProps> = ({ type, placeholder, color, maxLenght }) => {
    return (
        <InputPersonalizado type={type} placeholder={placeholder} color={color} maxLength={maxLenght} />
    )
}

export default InputRegister