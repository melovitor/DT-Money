import { HeaderContainer, HeaderContent, NewTransition } from "./styles";
import logoImg from "../../assets/logoExtended.svg"
import * as Dialog from '@radix-ui/react-dialog'
import { NewTrasactionModal } from "../NewTransactionModal";

export function Header(){
    return(
        <HeaderContainer>
            <HeaderContent>
                <img src={logoImg} alt="" />
                <Dialog.Root>
                    <Dialog.Trigger asChild>
                        <NewTransition>Nova transação</NewTransition>
                    </Dialog.Trigger>
                    <NewTrasactionModal/>
                </Dialog.Root>
            </HeaderContent>
        </HeaderContainer>
    )
}