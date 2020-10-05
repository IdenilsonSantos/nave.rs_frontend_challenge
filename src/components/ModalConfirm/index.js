import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import {
    Modal, ModalContainer, Message, MessageHeader,
    ButtonClose, MessageInfoContainer, MessageInfo,
    InfoTitle, InfoDescription, ModalActions, ConfirmAction, NoConfirmAction
} from './styles';

import api from '../../services/api';
import configHeaders from '../../services/configHeaders';
import ModalInfo from '../ModalInfo';

function ModalConfirm({ openmodalconfirm, closemodalconfirm, userid }) {

    const [modalOpen, setModalOpen] = useState(false);

    const history = useHistory();

    const openModal = () => {
        setModalOpen(true);
    }

    const closeModal = () => {
        setModalOpen(false);
        history.push('/home');
    }

    const handleConfirm = async () => {
        try {
            const response = await api.delete(`navers/${userid}`, configHeaders);
            if (response.status === 200) {
                closemodalconfirm();
                openModal();
            }
        } catch (error) {
            console.log('error')
        }
    }

    return (
        <>
            <ModalInfo openmodal={modalOpen} closemodal={closeModal} info={'excluído'} />
            {
                openmodalconfirm ?
                    <Modal>
                        <ModalContainer>
                            <Message>
                                <MessageHeader>
                                    <ButtonClose onClick={closemodalconfirm}>X</ButtonClose>
                                </MessageHeader>
                                <MessageInfoContainer>
                                    <MessageInfo>
                                        <InfoTitle>Excluir Naver</InfoTitle>
                                        <InfoDescription>Tem certeza que deseja excluir este Naver?</InfoDescription>
                                    </MessageInfo>
                                    <ModalActions>
                                        <NoConfirmAction onClick={closemodalconfirm}>Cancelar</NoConfirmAction>
                                        <ConfirmAction onClick={handleConfirm}>Excluir</ConfirmAction>
                                    </ModalActions>
                                </MessageInfoContainer>
                            </Message>
                        </ModalContainer>
                    </Modal> : ''
            }
        </>);
}

export default ModalConfirm;