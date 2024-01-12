
import { LastPage, NewPage, Page, PaginationContainer } from "./styles";

export function Pagination(){
    return(
        <PaginationContainer>
            <LastPage size={24} weight="bold"/>
            <Page>1</Page>
            <Page active>2</Page>
            <Page>3</Page>
            <NewPage size={24} weight="bold" active/>
        </PaginationContainer>

    )
}