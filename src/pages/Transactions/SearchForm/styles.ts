import { MagnifyingGlass } from "phosphor-react";
import styled from "styled-components";

export const SearchFormContainer = styled.form`
    display: flex;
    gap: 1rem;

    input{
        flex: 1;
        border-radius: 6px;
        border: 0;
        background-color: ${props => props.theme['gray-900']};
        color: ${props => props.theme['gray-300']};
        padding: 1rem;
        &::placeholder {
            color: ${props => props.theme['gray-600']};
        }
    }

    button{
            display: flex;
            align-items: center;
            justify-content: center;
            gap: .75rem;

            border: 0;
            padding: 1rem;
            background-color: transparent;
            border: 1px solid ${props => props.theme['green-300']};
            color: ${props => props.theme['green-300']};
            font-weight: bold;
            border-radius: 6px;  
            
            &:hover{
                background-color: ${props => props.theme['green-500']};
                border: 1px solid ${props => props.theme['green-500']};
                color: ${props => props.theme['white']};
                transition: .2s;
            }
        }

    @media (max-width: 768px) {
        margin-bottom: -1.5rem;
        
        span{
            display: none;
        }
    }
`

export const MagnifyingGlassIcon = styled(MagnifyingGlass)`
    color: ${props => props.theme['green-300']};
`