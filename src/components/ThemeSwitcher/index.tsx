import { Button } from './style'

import ThemeSwicher from "../../assets/icon/ThemeSwitcher.svg"

interface ThemeSwitcherProps {
    onClick: () => void;
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ onClick }) => {
    return (
        <Button onClick={onClick}>
            <img src={ThemeSwicher} width={20} />
        </Button>
    );
};

export default ThemeSwitcher;
