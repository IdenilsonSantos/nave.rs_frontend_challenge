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
    background: black;
    width: 80%;
    height: 503px;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    display: flex;
`;

export const Image = styled.div`
    width: 40%;
    height: 100%;
    background-color: blue
`;

export const Details = styled.div`
    width: 60%;
    height: 100%;
    padding: 20px;
    background-color: var(--white);
    display: flex;
    flex-direction: column;
`;

export const DetailsHeader = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export const DetailsInfo = styled.div`
`;

export const DetailsInfoContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between
`;

export const DetailsActions = styled.div`
    height: 10%;
`;

export const ButtonClose = styled.button`
    width: 20px;
    height: 30px;
    align-items: center;
    background: none;
    cursor: pointer
`;


export const NameFunction = styled.div`
`;

export const Name = styled.h3`
    font-size: 24px;
    color: var(--gray);
    font-weight: 600;
    margin-bottom: 10px;
`;

export const Function = styled.div`
    font-size: 16px;
    color: var(--gray);
    font-weight: 400;
    opacity: 0.9
`;

export const Info = styled.div`
`;

export const Label = styled.h6`
    font-size: 16px;
    color: var(--gray);
    font-weight: 600;
    opacity: 0.9;
    margin-top: 24px;
`;

export const InfoText = styled.p`
    font-size: 16px;
    color: var(--gray);
    font-weight: 400;
    opacity: 0.9;
    margin-top: 10px;
`;

export const DeleteEditAction = styled.button`
    width: 40px;
    height: 30px;
    margin-right: 10px;
    align-items: center;
    background: none;
    cursor: pointer
`;