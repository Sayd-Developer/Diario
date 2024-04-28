import { InputCustomizado } from "./style";

interface InputProps {
    type: string;
    text: string;
    register: () => void;
    maxLength: number;
}

const Input: React.FC<InputProps> = ({ type, text, register, maxLength }) => {
    return (
        <InputCustomizado type={type} placeholder={text} ref={register} maxLength={maxLength} />
    );
};

export default Input;
