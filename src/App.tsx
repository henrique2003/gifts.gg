import { ThemeProvider } from "styled-components";
import { AlertTemplateProps, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

// Packages
import theme from "./theme";
import GlobalStyle from "./theme/GlobalStyle";

// Components
import { Router } from "./Router";
import { ComponentType } from "react";
import { UserProvider } from "./context/user/user";

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <UserProvider>
        <>
          <GlobalStyle />
          <AlertProvider
            template={AlertTemplate as ComponentType<AlertTemplateProps>}
          >
            <Router />
          </AlertProvider>
        </>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
