import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { CalendarIcon, PriceHighLight, TagIcon, TransactionsContainer, TransactionsTable } from "./styles";

export function Transactions(){
    return (
        <div>
            <Header/>
            <Summary/>
        
            <TransactionsContainer>
                <TransactionsTable>
                    <tbody>
                        
                        <tr>
                            <td>Alimentação</td>
                            <td><PriceHighLight variant="outcome">-R$10.00</PriceHighLight></td>
                            <td><TagIcon weight="bold" /> Venda</td>
                            <td><CalendarIcon  weight="bold" /> 11/01/2024</td>
                        </tr>
                        <tr>
                            <td>Alimentação</td>
                            <td><PriceHighLight variant="income">R$10.00</PriceHighLight></td>
                            <td><TagIcon weight="bold" /> Venda</td>
                            <td><CalendarIcon  weight="bold" /> 11/01/2024</td>
                        </tr>
                    </tbody>
                </TransactionsTable>
            </TransactionsContainer>
        </div>
    )
}