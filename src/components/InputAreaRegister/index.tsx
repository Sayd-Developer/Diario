import { InputAreaPersonalizado } from "./style"

interface InputAreaNewRegisterProps {
    placeholder?: string;
    maxLength?: number;
}

const InputAreaNewRegister: React.FC<InputAreaNewRegisterProps> = ({ placeholder, maxLength }) => {
    return (
        <InputAreaPersonalizado placeholder={placeholder} maxLength={maxLength} />
    )
}

export default InputAreaNewRegister