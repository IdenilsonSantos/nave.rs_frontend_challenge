import styled from 'styled-components';

export const HeaderComponent = styled.div`
    width: 100%;
    height: 85px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Logo = styled.img`
    width: 140px;
    height: 40px;
`;

export const LogoutButton = styled.button`
    background: transparent;
    border: none;
    text-align: center;
    color: var(--gray);
    font-weight: 600;
    cursor: pointer
`;

