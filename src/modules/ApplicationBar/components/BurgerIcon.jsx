import { SvgIcon } from '@mui/material';
import { ReactComponent as BurgerSvg } from '../../../assets/logo.svg';

const BurgerIcon = (props) => {
    return (
        <SvgIcon {...props}>
            <BurgerSvg/>
        </SvgIcon>
    );
};

export default BurgerIcon;