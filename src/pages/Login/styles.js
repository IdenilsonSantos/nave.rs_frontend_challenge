import styled from 'styled-components';

export const FormContainer = styled.div`
    width: 50%;
    height: 600px;
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
    justify-content: center;
`;

export const Form = styled.form`
    width: 65%;
    height: 60%;
    margin-top: 50px;
    border: 1px solid #000;
    display:flex;
    flex-wrap: wrap;

    > p {
        font-size: 12px;
        margin-left: 20px;
        margin-bottom: 10px;
        color: red;
        opacity: 0.9
    }
`;

export const Logo = styled.img`
    width: 170px;
    height: 70px;
`;

export const FormContent = styled.div`
    width: 100%;
    height: 65%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const FormGroup = styled.div`
    float: left;
    margin: 0 auto;
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
    margin-bottom: 20px;
    border: 1px solid var(--borders);
`;

export const ButtonSaveContainer = styled.div`
    margin: 0 auto;
`;

export const ButtonSave = styled.button`
    width: 280px;
    height: 40px;
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