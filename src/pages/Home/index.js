import React from 'react';
import { Edit, Delete } from '@material-ui/icons';

import { ContainerGlobal } from '../../styles/GlobalStyles';
import {
    SubHeader, TitlePage, ButtonAdd, CardsNaversShow, CardItem,
    CardItemImage, CardItemDetails, CardItemDetailsInfo, InfoName,
    InfoFunction, InfoActions, DeleteEditAction
} from './styles';

import Images from '../../assets/img/IMG_9945.png';

import Header from '../../components/Header';

function Home() {
    return (
        <>
            <Header />
            <ContainerGlobal>
                <SubHeader>
                    <TitlePage>Navers</TitlePage>
                    <ButtonAdd>Adicionar Navers</ButtonAdd>
                </SubHeader>
                <CardsNaversShow>
                    <CardItem>
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