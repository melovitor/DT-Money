import { ThemeProvider } from "styled-components";
import { dark } from "./styles/themes/dark";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyle/> 
      <h1>DT Money</h1>

    </ThemeProvider>
  )
}
