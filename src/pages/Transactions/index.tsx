import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { PriceHighLight, TransactionsContainer, TransactionsTable } from "./styles";

export function Transactions(){
    return (
        <div>
            <Header/>
            <Summary/>
        
            <TransactionsContainer>
                <TransactionsTable>
                    <tbody>
                        <tr>
                            <td width='40%'>Desenvolvimento de site</td>
                            <td><PriceHighLight variant="income">R$10.00</PriceHighLight></td>
                            <td>venda</td>
                            <td>11/01/2024</td>
                        </tr>
                        <tr>
                            <td width='40%'>Alimentação</td>
                            <td><PriceHighLight variant="outcome">-R$10.00</PriceHighLight></td>
                            <td>venda</td>
                            <td>11/01/2024</td>
                        </tr>
                    </tbody>
                </TransactionsTable>
            </TransactionsContainer>
        </div>
    )
}