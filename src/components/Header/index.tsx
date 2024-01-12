import { HeaderContainer, HeaderContent, NewTransition } from "./styles";
import logoImg from "../../assets/logoExtended.svg"
import * as Dialog from '@radix-ui/react-dialog'

export function Header(){
    return(
        <HeaderContainer>
            <HeaderContent>
                <img src={logoImg} alt="" />
                <Dialog.Root>
                    <Dialog.Trigger asChild>
                        <NewTransition>Nova transação</NewTransition>
                    </Dialog.Trigger>
                    <Dialog.Portal>
                        <Dialog.Overlay/>
                        <Dialog.Content>
                            <Dialog.Title>Nova Transação</Dialog.Title>
                            <Dialog.Close/>
                        </Dialog.Content>
                    </Dialog.Portal>
                </Dialog.Root>
            </HeaderContent>
        </HeaderContainer>
    )
}