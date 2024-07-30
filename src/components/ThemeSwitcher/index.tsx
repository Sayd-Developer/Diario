import { Button } from './style'
import { useState } from 'react';

import ThemeSwicher from "../../assets/icon/ThemeSwitcher.svg"

interface ThemeSwitcherProps {
    onClick: () => void;
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ onClick }) => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
        onClick();
    };

    return (
        <Button onClick={handleClick}>
            <img
                src={ThemeSwicher}
                width={20}
                style={{
                    filter: isClicked
                        ? 'invert(50%) sepia(100%) saturate(1000%) hue-rotate(180deg) brightness(100%) contrast(100%)'
                        : 'none'
                }}
            />
        </Button>
    )
}
export default ThemeSwitcher;
