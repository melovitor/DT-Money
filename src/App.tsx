import { ThemeProvider } from "styled-components";
import { dark } from "./styles/themes/dark";
import { GlobalStyle } from "./styles/global";
import { Transactions } from "./pages/Transactions";

export function App() {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyle/> 
      <Transactions/>

    </ThemeProvider>
  )
}
