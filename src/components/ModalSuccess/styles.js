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
    height: 160px;
    top: 50%;
    left: 49%;
    transform: translate(-50%,-50%);
    display: flex;
`;

export const Image = styled.div`
    width: 40%;
    height: 100%;
    background-color: blue
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