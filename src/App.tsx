import { ThemeProvider } from "styled-components";

// Packages
import theme from "./theme";
import GlobalStyle from "./theme/GlobalStyle";

// Components
import { Home, Store } from "./pages";
import Routes from "./Routes";

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
