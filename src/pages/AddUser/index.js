import React, { useState } from 'react';
import { ArrowBackIos } from '@material-ui/icons';
import { Link, useHistory } from 'react-router-dom';

import { ContainerGlobal } from '../../styles/GlobalStyles';
import {
    FormContainer, SubHeader, TitlePage, ButtonBack, ButtonSaveContainer,
    ButtonSave, Form, FormGroup, Label, Input
} from './styles';

import api from '../../services/api';
import configHeaders from '../../services/configHeaders';

import Header from '../../components/Header';
import ModalInfo from '../../components/ModalInfo';
import { convertDate } from '../../components/utils/convertDate';

function AddUser() {

    const [modalOpen, setModalOpen] = useState(false);
    const [userData, setUserData] = useState({
        name: '',
        job_role: '',
        birth: '',
        dateWork: '',
        project: '',
        url: '',
        error: ''
    });

    const history = useHistory();

    const { name, job_role, birth, dateWork, project, url } = userData;

    const openModal = () => {
        setModalOpen(true)
    }

    const closeModal = () => {
        setModalOpen(false);
        history.push('/home');
    }

    const handleUserData = async (e) => {
        e.preventDefault();

        if (!name || !job_role || !birth || !dateWork || !project || !url) {
            setUserData({ error: "Por favor, preencha seus dados corretamente" });
        }
        else {
            try {
                const admission_date = convertDate(dateWork);
                const birthdate = convertDate(birth);
                console.log(admission_date, birthdate);
                const response = await api.post("navers", {
                    job_role, admission_date, birthdate, project, name, url
                }, configHeaders);

                if (response.status === 200) {
                    openModal();
                }

            } catch (err) {
                setUserData({
                    error: "Houve um problema ao cadastrar seu usuário."
                });
            }
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData(userData => ({ ...userData, [name]: value }));
    }

    return (
        <>
            <Header />
            <ModalInfo openmodal={modalOpen} closemodal={closeModal} info={'criado'} />
            <ContainerGlobal>
                <FormContainer>
                    <SubHeader>
                        <Link to="/home">
                            <ButtonBack><ArrowBackIos /></ButtonBack>
                        </Link>
                        <TitlePage>Adicionar Naver</TitlePage>
                    </SubHeader>
                    <Form>
                        <FormGroup>
                            <Label htmlFor="name">Nome</Label>
                            <Input id="name" name="name" value={name} type="text" placeholder="Nome"
                                onChange={handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="job_role">Cargo</Label>
                            <Input id="job_role" name="job_role" value={job_role} type="text" placeholder="Cargo"
                                onChange={handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="birth">Idade</Label>
                            <Input id="birth" name="birth" value={birth} type="date" placeholder="Idade"
                                onChange={handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="dateWork">Data de Admissão</Label>
                            <Input id="dateWork" name="dateWork" value={dateWork} type="date" placeholder="Data de Admissão"
                                onChange={handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="project">Projetos que Participou</Label>
                            <Input id="project" name="project" value={project} type="text" placeholder="Projetos que Participou"
                                onChange={handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="url">URL da foto do Naver</Label>
                            <Input id="url" name="url" value={url} type="text" placeholder="URL da foto do Naver"
                                onChange={handleChange} />
                        </FormGroup>
                        <ButtonSaveContainer>
                            <ButtonSave onClick={(e) => handleUserData(e)}>Salvar</ButtonSave>
                        </ButtonSaveContainer>
                    </Form>
                </FormContainer>
            </ContainerGlobal>
        </>
    )
        ;
}

export default AddUser;