import styled from 'styled-components';

export const Modal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width:100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    z-index: 1;
`;

export const ModalContainer = styled.div`
    position:fixed;
    width: 44%;
    height: 200px;
    top: 50%;
    left: 49%;
    transform: translate(-50%,-50%);
`;

export const Message = styled.div`
    width: 100%;
    height: 100%;
    padding: 20px;
    background-color: var(--white);
    display: flex;
    flex-direction: column;
`;

export const MessageHeader = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export const MessageInfo = styled.div`
`;

export const MessageInfoContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between
`;

export const ButtonClose = styled.button`
    width: 20px;
    height: 30px;
    align-items: center;
    background: none;
    cursor: pointer
`;


export const InfoTitle = styled.h3`
    font-size: 24px;
    color: var(--gray);
    font-weight: 600;
    margin-bottom: 10px;
`;

export const InfoDescription = styled.div`
    font-size: 16px;
    color: var(--gray);
    font-weight: 400;
    opacity: 0.9
`;

export const ModalActions = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    margin-top: 20px;
`;

export const ConfirmAction = styled.button`
    width: 140px;
    height: 40px;
    margin-left: 20px;
    align-items: center;
    cursor: pointer;
    color: var(--white);
    font-weight: 600;
    font-size: 14px;
    background-color: var(--gray);
`;

export const NoConfirmAction = styled.button`
    width: 140px;
    height: 40px;
    align-items: center;
    cursor: pointer;
    border: 1px solid var(--gray);
    color: var(--gray);
    font-weight: 600;
    font-size: 14px;
    background: none;
`;