import useTheme from '../../types/useTheme';
import { Button } from './style'


function ThemeSwitcher() {

    const { toggleTheme } = useTheme()

    return (
        <Button onClick={toggleTheme} type='button'>Mudar tema</Button>
    );
};

export default ThemeSwitcher;
