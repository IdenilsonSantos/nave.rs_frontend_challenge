import React from 'react';

import {
    Modal, ModalContainer, Message, MessageHeader,
    ButtonClose, MessageInfoContainer, MessageInfo, InfoTitle, InfoDescription
} from './styles';

function ModalSuccess({ openmodal, message, description }) {
    return (
        <>
            {
                openmodal ?
                    <Modal>
                        <ModalContainer>
                            <Message>
                                <MessageHeader>
                                    <ButtonClose onClick={closemodal}>X</ButtonClose>
                                </MessageHeader>
                                <MessageInfoContainer>
                                    <MessageInfo>
                                        <InfoTitle>Naver criado</InfoTitle>
                                        <InfoDescription>Naver criado com sucesso!</InfoDescription>
                                    </MessageInfo>
                                </MessageInfoContainer>
                            </Message>
                        </ModalContainer>
                    </Modal> : ''
            }
        </>);
}

export default ModalSuccess;