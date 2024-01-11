import { CalendarBlank, TagSimple } from "phosphor-react";
import styled from "styled-components";

export const TransactionsContainer = styled.main`
    width: 100%;
    max-width: 1120px;
    margin: 4rem auto 0;
    padding: 0 1.5rem;
    
`

export const TransactionsTable = styled.table`
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 0.5rem;
    margin-top: 1.5rem;
        
    td{
        padding: 1.25rem 2rem;
        background-color: ${props => props.theme['gray-700']};

        &:first-child {
            width: 40%;
            border-top-left-radius: 6px;
            border-bottom-left-radius: 6px;
        }

        &:last-child {
            border-top-right-radius: 6px;
            border-bottom-right-radius: 6px;
        }
    }

    @media (max-width: 768px) {
            border-spacing: 0 1rem;
        td{
            width: 100%;
            display: flex;
            padding: 1rem 1.25rem;

            &:first-child {
                width: 100%;
                border-top-left-radius: 6px;
                border-bottom-left-radius: 0;
                border-top-right-radius: 6px;
                border-bottom-right-radius: 0;
            }

            &:nth-child(3) {
                width: 50%;
                float: left;
                border-bottom-left-radius: 6px;
                color: ${props => props.theme['gray-500']};
                align-items: center;
                gap: 4px;
            }
            &:nth-child(4) {
                width: 50%;
                border-bottom-right-radius: 6px;
                border-top-right-radius: 0;
                color: ${props => props.theme['gray-500']};
                align-items: center;
                gap: 4px;
            }

        }

    }


`

interface PriceHighLightProps {
    variant: 'income' | 'outcome'
}

export const PriceHighLight = styled.span<PriceHighLightProps>`
    color: ${props => props.variant === 'income' ? props.theme['green-300'] : props.theme['red-300']};
    font-weight: bold;
    @media (max-width: 768px) {
        font-size: 20px;
    }
`

export const CalendarIcon = styled(CalendarBlank)`
    display: none;
    @media (max-width: 768px) {
        display: flex;
        color: ${props => props.theme['gray-500']};
        size: 16px;
    }
`
export const TagIcon = styled(TagSimple)`
    display: none;
    @media (max-width: 768px) {
        display: flex;
        color: ${props => props.theme['gray-500']};
        size: 16px;
    }
`