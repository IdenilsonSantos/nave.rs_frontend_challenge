import React from 'react';

import { ContainerGlobal } from '../../styles/GlobalStyles';
import { HeaderComponent, Logo, LogoutButton } from './styles';

import logoNavers from '../../assets/logo-navers.svg';

function Header() {
    return (
        <ContainerGlobal>
            <HeaderComponent>
                <Logo src={logoNavers} />
                <LogoutButton>Sair</LogoutButton>
            </HeaderComponent>
        </ContainerGlobal>
    );
}

export default Header;