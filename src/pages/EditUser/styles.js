import styled from 'styled-components';

export const FormContainer = styled.div`
    width: 50%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const SubHeader = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;

export const TitlePage = styled.h1`
    font-size: 24px;
    color: var(--gray);
`;

export const ButtonBack = styled.button`
    width: 30px;
    height: 40px;
    background: none;
    opacity: 0.9;
    border: none;
    text-align: center;
    color: var(--gray);
    font-weight: 600;
    cursor: pointer;
    align-items: center;
    display: flex;
`;

export const Form = styled.form`
    width: 100%;
    height: auto;
    display:flex;
    flex-wrap: wrap
`;

export const FormGroup = styled.div`
    float: left;
    width: 50%;
`;

export const Label = styled.label`
    display: block;
    font-size: 14px;
    font-weight: 600;
    color: var(--gray)
`;

export const Input = styled.input`
    width: 280px;
    height: 40px;
    color: var(--graylight);
    padding-left: 7px;
    margin-top: 5px;
    margin-bottom: 32px;
    border: 1px solid var(--borders);
`;

export const ButtonSaveContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`;

export const ButtonSave = styled.button`
    width: 176px;
    height: 40px;
    margin-right: 30px;
    background: var(--gray);
    opacity: 0.9;
    border: none;
    text-align: center;
    color: var(--white);
    font-weight: 600;
    cursor: pointer;

    &:hover {
        opacity: 0.9;
        transition: all ease 0.5s
    }
`;