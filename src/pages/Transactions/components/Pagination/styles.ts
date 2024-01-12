import styled from "styled-components";
import { CaretLeft, CaretRight } from "phosphor-react";

export const PaginationContainer = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;

    width: 100%;
    margin: 0 auto;
    padding: 0 1.5rem;
    bottom: 1rem;
    gap: .5rem;

`

interface PageProps {
    active?: boolean;
}

export const Page = styled.div<PageProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    padding: 1rem;
    border-radius: 6px;
    background-color: ${props => props.active === true ?  props.theme['green-700'] : props.theme['gray-600']};
    color: ${props => props.active === true ?  props.theme['gray-100'] : props.theme['gray-400']};
    font-weight: bold;
`

export const NewPage = styled(CaretRight)<PageProps>`
    color: ${props => props.active === true ?  props.theme['green-500'] : props.theme['gray-600']};

`
export const LastPage = styled(CaretLeft)<PageProps>`
    color: ${props => props.active === true ?  props.theme['green-500'] : props.theme['gray-600']};
`