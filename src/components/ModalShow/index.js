import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Edit, Delete } from '@material-ui/icons';

import {
    Modal, ModalContainer, Image, Details, DetailsHeader, DetailsActions,
    ButtonClose, DetailsInfoContainer, DetailsInfo, NameFunction, Name, Function,
    Info, Label, InfoText, DeleteEditAction
} from './styles';

import { dateCalculateYear } from '../utils/convertDate';

import ModalConfirm from '../ModalConfirm';

function ModalShow({ openmodal, closemodal, user }) {

    const [modalOpenConfirm, setModalOpenConfirm] = useState(false);
    const [userIdSelect, setUserIdSelect] = useState();

    const history = useHistory();

    const openModalConfirm = (id) => {
        setModalOpenConfirm(true);
        setUserIdSelect(id)
    }

    const closeModalConfirm = () => {
        setModalOpenConfirm(false)
    }

    const handleDeleteEdit = async ({ action }, id) => {
        if (action === 'edit') {
            history.push({ pathname: '/edit', id })
        }
        else {
            closemodal();
            openModalConfirm(id);
        }
    }

    return (
        <>
            <ModalConfirm openmodalconfirm={modalOpenConfirm} closemodalconfirm={closeModalConfirm} userid={userIdSelect} />
            {
                openmodal && user != null ?
                    <Modal>
                        <ModalContainer>
                            <Image src={user.url} />
                            <Details>
                                <DetailsHeader>
                                    <ButtonClose onClick={closemodal}>X</ButtonClose>
                                </DetailsHeader>
                                <DetailsInfoContainer>
                                    <DetailsInfo>
                                        <NameFunction>
                                            <Name>{user.name}</Name>
                                            <Function>{user.function}</Function>
                                        </NameFunction>
                                        <Info>
                                            <Label>Idade</Label>
                                            <InfoText>{dateCalculateYear(user.birthdate)}</InfoText>
                                        </Info>
                                        <Info>
                                            <Label>Tempo de empresa</Label>
                                            <InfoText>{dateCalculateYear(user.birthdate)} anos</InfoText>
                                        </Info>
                                        <Info>
                                            <Label>Projetos que participou</Label>
                                            <InfoText>{user.project}</InfoText>
                                        </Info>
                                    </DetailsInfo>
                                    <DetailsActions>
                                        <DeleteEditAction onClick={() => handleDeleteEdit({ action: 'delete' }, user.id)}><Delete /></DeleteEditAction>
                                        <DeleteEditAction onClick={() => handleDeleteEdit({ action: 'edit' }, user.id)}><Edit /></DeleteEditAction>
                                    </DetailsActions>
                                </DetailsInfoContainer>
                            </Details>
                        </ModalContainer>
                    </Modal> : ''
            }
        </>);
}

export default ModalShow;