import React, { useState } from 'react';
import { Edit, Delete } from '@material-ui/icons';
import { Link } from 'react-router-dom';

import { ContainerGlobal } from '../../styles/GlobalStyles';
import {
    SubHeader, TitlePage, ButtonAdd, CardsNaversShow, CardItem,
    CardItemImage, CardItemDetails, CardItemDetailsInfo, InfoName,
    InfoFunction, InfoActions, DeleteEditAction
} from './styles';

import Images from '../../assets/img/IMG_9945.png';

import Header from '../../components/Header';
import ModalShow from '../../components/ModalShow';

function Home() {

    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true)
    }

    const closeModal = () => {
        setModalOpen(false)
    }
    return (
        <>
            <Header />
            <ModalShow openmodal={modalOpen} closemodal={closeModal} />
            <ContainerGlobal>
                <SubHeader>
                    <TitlePage>Navers</TitlePage>
                    <Link to="/add">
                        <ButtonAdd>Adicionar Naver</ButtonAdd>
                    </Link>
                </SubHeader>
                <CardsNaversShow>
                    <CardItem onClick={() => openModal()}>
                        <CardItemImage src={Images} />
                        <CardItemDetails>
                            <CardItemDetailsInfo>
                                <InfoName>
                                    Juliano Reis
                                </InfoName>
                                <InfoFunction>
                                    Front-end Developer
                                </InfoFunction>
                                <InfoActions>
                                    <DeleteEditAction><Delete /></DeleteEditAction>
                                    <DeleteEditAction><Edit /></DeleteEditAction>
                                </InfoActions>
                            </CardItemDetailsInfo>
                        </CardItemDetails>
                    </CardItem>
                </CardsNaversShow>
            </ContainerGlobal>
        </>
    )
        ;
}

export default Home;