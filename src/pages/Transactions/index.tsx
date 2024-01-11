import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./SearchForm";
import { CalendarIcon, PriceHighLight, TagIcon, TransactionsContainer, TransactionsTable } from "./styles";

export function Transactions(){
    return (
        <div>
            <Header/>
            <Summary/>
        
            <TransactionsContainer>
                <SearchForm/>
                <TransactionsTable>
                    <tbody>
                        <tr>
                            <td>Desenvolvimento de site</td>
                            <td><PriceHighLight variant="income">R$ 12.000,00</PriceHighLight></td>
                            <td><TagIcon weight="bold" /> Venda</td>
                            <td><CalendarIcon  weight="bold" /> 11/01/2024</td>
                        </tr>
                        <tr>
                            <td>Hamburger</td>
                            <td><PriceHighLight variant="outcome">-R$59,00</PriceHighLight></td>
                            <td><TagIcon weight="bold" /> Alimentação</td>
                            <td><CalendarIcon  weight="bold" /> 11/01/2024</td>
                        </tr>
                    </tbody>
                </TransactionsTable>
            </TransactionsContainer>
        </div>
    )
}