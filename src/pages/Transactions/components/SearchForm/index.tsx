import { MagnifyingGlassIcon, SearchFormContainer } from "./styles";

export function SearchForm(){
    return(
        <SearchFormContainer>
            <input type="text" placeholder="Busque por transações"/>
            <button type="submit">
                <MagnifyingGlassIcon size={20}/>
                <span>
                    Buscar
                </span>
            </button>
        </SearchFormContainer>
    )
}