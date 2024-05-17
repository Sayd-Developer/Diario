import { InputPersonalizado } from "./style"

interface InputPersonalizadoProps {
    type: string;
    placeholder?: string;
    color: string;
    maxLength?: number;
}

const InputRegister: React.FC<InputPersonalizadoProps> = ({ type, placeholder, color, maxLength, }) => {
    return (
        <InputPersonalizado type={type} placeholder={placeholder} color={color} maxLength={maxLength} />
    )
}

export default InputRegister