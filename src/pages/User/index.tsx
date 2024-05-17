import { Container } from "./style"

interface UserProps {
    placeholder?: string;
    color: string;
    maxLength?: number;
}

const User: React.FC<UserProps> = ({ placeholder, color, maxLength, }) => {
    return (
        <Container placeholder={placeholder} color={color} maxLength={maxLength} />
    )
}

export default User