import { ThemeProvider } from "styled-components";

// Packages
import theme from "./theme";
import GlobalStyle from "./theme/GlobalStyle";

// Components
import { Router } from "./Router";

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
}

export default App;
