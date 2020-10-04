import React from 'react';
import { ArrowBackIos } from '@material-ui/icons';
import { Link } from 'react-router-dom';

import { ContainerGlobal } from '../../styles/GlobalStyles';
import {
    FormContainer, SubHeader, TitlePage, ButtonBack, ButtonSaveContainer,
    ButtonSave, Form, FormGroup, Label, Input
} from './styles';

import Header from '../../components/Header';

function AddUser() {

    return (
        <>
            <Header />
            <ContainerGlobal>
                <FormContainer>
                    <SubHeader>
                        <Link to="/">
                            <ButtonBack><ArrowBackIos /></ButtonBack>
                        </Link>
                        <TitlePage>Adicionar Naver</TitlePage>
                    </SubHeader>
                    <Form>
                        <FormGroup>
                            <Label for="name">Nome</Label>
                            <Input id="name" name="name" type="text" placeholder="Nome" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="role">Cargo</Label>
                            <Input id="role" name="role" type="text" placeholder="Cargo" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="age">Idade</Label>
                            <Input id="age" name="age" type="text" placeholder="Idade" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="time_company">Tempo de Empresa</Label>
                            <Input id="time_company" name="time_company" type="text" placeholder="Tempo de Empresa" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="projects_part">Projetos que Participou</Label>
                            <Input id="projects_part" name="projects_part" type="text" placeholder="Projetos que Participou" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="url_user">URL da foto do Naver</Label>
                            <Input id="url_user" name="url_user" type="text" placeholder="URL da foto do Naver" />
                        </FormGroup>
                        <ButtonSaveContainer>
                            <ButtonSave>Salvar</ButtonSave>
                        </ButtonSaveContainer>
                    </Form>
                </FormContainer>
            </ContainerGlobal>
        </>
    )
        ;
}

export default AddUser;