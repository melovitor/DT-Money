import { HeaderContainer, HeaderContent, NewTransition } from "./styles";
import logoImg from "../../assets/logoExtended.svg"

export function Header(){
    return(
        <HeaderContainer>
            <HeaderContent>
                <img src={logoImg} alt="" />
                <NewTransition>Nova transação</NewTransition>
            </HeaderContent>
        </HeaderContainer>
    )
}