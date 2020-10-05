import React, { useState, useEffect } from 'react';
import { Edit, Delete } from '@material-ui/icons';
import { Link, useHistory } from 'react-router-dom';

import { ContainerGlobal } from '../../styles/GlobalStyles';
import {
    SubHeader, TitlePage, ButtonAdd, CardsNaversShow, CardItem,
    CardItemImage, CardItemDetails, CardItemDetailsInfo, InfoName,
    InfoFunction, InfoActions, DeleteEditAction, NoData, TextDesc
} from './styles';

import Header from '../../components/Header';
import ModalShow from '../../components/ModalShow';

import api from '../../services/api';
import configHeaders from '../../services/configHeaders';
import ModalConfirm from '../../components/ModalConfirm';

function Home() {

    const [users, setUsers] = useState([]);
    const [userSelected, setUserSelected] = useState([]);
    const [userIdSelect, setUserIdSelect] = useState();
    const [modalOpen, setModalOpen] = useState(false);
    const [modalOpenConfirm, setModalOpenConfirm] = useState(false);

    const history = useHistory();

    useEffect(() => {
        getUsers();
    });

    const getUsers = async () => {
        try {
            const { data } = await api.get("navers", configHeaders);
            setUsers(data)
        } catch (error) {
            console.log('error')
        }
    }

    const getUserId = async (id) => {
        try {
            const { data } = await api.get(`navers/${id}`, configHeaders);
            setUserSelected(data)
        } catch (error) {
            console.log('error')
        }
    }

    const openModal = (id) => {
        getUserId(id);
        setModalOpen(true);
    }

    const closeModal = () => {
        setModalOpen(false)
    }

    const openModalConfirm = (id) => {
        setModalOpenConfirm(true);
        setUserIdSelect(id)
    }

    const closeModalConfirm = () => {
        setModalOpenConfirm(false)
    }

    const handleDeleteEdit = ({ action }, id) => {
        if (action === 'edit') {
            history.push({ pathname: '/edit', id })
        }
        else {
            openModalConfirm(id);
        }
    }

    return (
        <>
            <Header />
            <ModalShow openmodal={modalOpen} closemodal={closeModal} user={userSelected} />
            <ModalConfirm openmodalconfirm={modalOpenConfirm} userid={userIdSelect} closemodalconfirm={closeModalConfirm} />
            <ContainerGlobal>
                <SubHeader>
                    <TitlePage>Navers</TitlePage>
                    <Link to="/add">
                        <ButtonAdd>Adicionar Naver</ButtonAdd>
                    </Link>
                </SubHeader>
                {
                    users.length !== 0 ?
                        <CardsNaversShow>
                            {
                                users.map((user) => (

                                    <CardItem key={user.id}>
                                        <CardItemImage onClick={() => openModal(user.id)} src={user.url} />
                                        <CardItemDetails>
                                            <CardItemDetailsInfo>
                                                <InfoName>
                                                    {user.name}
                                                </InfoName>
                                                <InfoFunction>
                                                    {user.job_role}
                                                </InfoFunction>
                                                <InfoActions>
                                                    <DeleteEditAction><Delete onClick={() => handleDeleteEdit({ action: 'delete' }, user.id)} /></DeleteEditAction>
                                                    <DeleteEditAction><Edit onClick={() => handleDeleteEdit({ action: 'edit' }, user.id)} /></DeleteEditAction>
                                                </InfoActions>
                                            </CardItemDetailsInfo>
                                        </CardItemDetails>
                                    </CardItem>

                                ))
                            }
                        </CardsNaversShow>
                        : <NoData>
                            <TextDesc>Não há usuários cadastrados</TextDesc>
                        </NoData>
                }
            </ContainerGlobal>
        </>
    )
        ;
}

export default Home;