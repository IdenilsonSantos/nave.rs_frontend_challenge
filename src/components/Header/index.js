import React from 'react';
import { Link } from 'react-router-dom';

import { ContainerGlobal } from '../../styles/GlobalStyles';
import { HeaderComponent, Logo, LogoutButton } from './styles';

import logoNavers from '../../assets/logo-navers.svg';

function Header() {
    return (
        <ContainerGlobal>
            <HeaderComponent>
                <Link to="/home">
                    <Logo src={logoNavers} />
                </Link>
                <LogoutButton>Sair</LogoutButton>
            </HeaderComponent>
        </ContainerGlobal>
    );
}

export default Header;