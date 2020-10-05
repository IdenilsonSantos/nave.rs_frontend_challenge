import React from 'react';

import {
    Modal, ModalContainer, Message, MessageHeader,
    ButtonClose, MessageInfoContainer, MessageInfo, InfoTitle, InfoDescription
} from './styles';

function ModalInfo({ openmodal, closemodal, info }) {

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
                                        <InfoTitle>Naver {info}</InfoTitle>
                                        <InfoDescription>Naver {info} com sucesso!</InfoDescription>
                                    </MessageInfo>
                                </MessageInfoContainer>
                            </Message>
                        </ModalContainer>
                    </Modal> : ''
            }
        </>);
}

export default ModalInfo;