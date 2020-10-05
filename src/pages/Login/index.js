import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { ContainerGlobal } from '../../styles/GlobalStyles';

import {
    FormContainer, Form, SubHeader, Logo, FormGroup,
    FormContent, Label, Input, ButtonSaveContainer, ButtonSave
} from './styles';

import logoNavers from '../../assets/logo-navers.svg';

import { login } from '../../services/auth';
import api from '../../services/api';

function Login() {

    const history = useHistory();

    const [userLogin, setUserLogin] = useState({
        email: "",
        password: "",
        error: ""
    });

    const { email, password } = userLogin;

    const handleSign = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            setUserLogin({ error: "Por favor, preencha seus dados corretamente" });
        }
        else {
            try {
                const response = await api.post("users/login", { email, password });
                login(response.data.token);
                history.push("/home");
            } catch (err) {
                setUserLogin({
                    error: "Houve um problema com o login, verifique suas credenciais."
                });
            }
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserLogin(userLogin => ({ ...userLogin, [name]: value }));
    }

    return (
        <>
            <ContainerGlobal>
                <FormContainer>
                    <Form onSubmit={handleSign}>
                        <SubHeader>
                            <Link to="/home">
                                <Logo src={logoNavers} />
                            </Link>
                        </SubHeader>
                        <FormContent>
                            <FormGroup>
                                <Label for="email">Email</Label>
                                <Input id="email" name="email" value={email} type="text" placeholder="Email"
                                    onChange={handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="password">Senha</Label>
                                <Input id="password" name="password" value={password} type="password" placeholder="Senha"
                                    onChange={handleChange} />
                            </FormGroup>
                            <ButtonSaveContainer>
                                <ButtonSave type="submit">Entrar</ButtonSave>
                            </ButtonSaveContainer>
                        </FormContent>
                        {userLogin.error && <p>{userLogin.error}</p>}
                    </Form>
                </FormContainer>
            </ContainerGlobal>
        </>
    )
        ;
}

export default Login;