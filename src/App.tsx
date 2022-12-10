import { ThemeProvider } from "styled-components";

import theme from "./theme";
import GlobalStyle from "./theme/GlobalStyle";
import Home from "./pages/Home";

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  );
}

export default App;
