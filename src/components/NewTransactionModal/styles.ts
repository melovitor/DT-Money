import * as Dialog from '@radix-ui/react-dialog'
import styled from "styled-components";

export const Overlay = styled(Dialog.Overlay)`
    position: fixed;
    width: 100vw;
    height: 100vh;
    inset: 0;
    background: rgba(0, 0, 0, .75);
    
`
export const Content = styled(Dialog.Content)`
    min-width: 32rem;
    border-radius: 6px;
    padding: 2.5rem 3rem;
    background-color: ${props => props.theme['gray-800']};
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    form {
        margin-top: 2rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    input{
        border-radius: 6px;
        border: 0;
        background-color: ${props => props.theme['gray-900']};
        color: ${props => props.theme['gray-300']};
        padding: 1rem;
        &::placeholder{
            color: ${props => props.theme['gray-500']};
        }
    }

    button[type="submit"] {
        height: 58px;
        border: 0;
        background-color: ${props => props.theme['green-500']};
        color: ${props => props.theme['white']};
        font-weight: bold;
        padding: 0 1.25rem;
        border-radius: 6px;
        margin-top: 1.5rem;
        cursor: pointer;

        &:hover {
            background-color: ${props => props.theme['green-700']};
            transition: 0.2s;
        }

    }

    @media (max-width: 768px) {
        min-width: 0;
        width: 100%;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        top: 80%;
    }
`

export const CloseButton = styled(Dialog.Close)`
    position: absolute;
    background: transparent;
    border: 0;
    top: 1.5rem;
    right: 1.5rem;
    line-height: 0;
    cursor: pointer;
    color: ${props => props.theme['gray-500']};

    @media (max-width: 768px) {
        top: 2.5rem;
        right: 1.5rem;
    }

`