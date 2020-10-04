import React, { useState } from 'react';

import {
    Modal, ModalContainer, Image, Details, DetailsHeader, DetailsActions,
    ButtonClose, DetailsInfoContainer, DetailsInfo, NameFunction, Name, Function,
    Info, Label, InfoText, DeleteEditAction
} from './styles';

import { Edit, Delete } from '@material-ui/icons';

function ModalShow({ openmodal, closemodal }) {

    const [displayBlock, setDisplayBlock] = useState('display-block')

    return (
        <>
            {
                openmodal ?
                    <Modal>
                        <ModalContainer>
                            <Image />
                            <Details>
                                <DetailsHeader>
                                    <ButtonClose onClick={closemodal}>X</ButtonClose>
                                </DetailsHeader>
                                <DetailsInfoContainer>
                                    <DetailsInfo>
                                        <NameFunction>
                                            <Name>Juliano Reis</Name>
                                            <Function>Front-end Developer</Function>
                                        </NameFunction>
                                        <Info>
                                            <Label>Idade</Label>
                                            <InfoText>Lorem ipsum</InfoText>
                                        </Info>
                                        <Info>
                                            <Label>Tempo de empresa</Label>
                                            <InfoText>Lorem ipsum</InfoText>
                                        </Info>
                                        <Info>
                                            <Label>Projetos que participou</Label>
                                            <InfoText>Lorem ipsum</InfoText>
                                        </Info>
                                    </DetailsInfo>
                                    <DetailsActions>
                                        <DeleteEditAction><Delete /></DeleteEditAction>
                                        <DeleteEditAction><Edit /></DeleteEditAction>
                                    </DetailsActions>
                                </DetailsInfoContainer>
                            </Details>
                        </ModalContainer>
                    </Modal> : ''
            }
        </>);
}

export default ModalShow;