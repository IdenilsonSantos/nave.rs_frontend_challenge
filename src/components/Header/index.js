import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import { ContainerGlobal } from '../../styles/GlobalStyles';
import { HeaderComponent, Logo, LogoutButton } from './styles';

import logoNavers from '../../assets/logo-navers.svg';

import { logout } from '../../services/auth';

function Header() {

    const history = useHistory();

    const handleLogout = async () => {
        logout();
        history.push('/');
    }

    return (
        <ContainerGlobal>
            <HeaderComponent>
                <Link to="/home">
                    <Logo src={logoNavers} />
                </Link>
                <LogoutButton onClick={handleLogout}>Sair</LogoutButton>
            </HeaderComponent>
        </ContainerGlobal>
    );
}

export default Header;