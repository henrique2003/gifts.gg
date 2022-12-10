import { ThemeProvider } from "styled-components";

// Packages
import theme from "./theme";
import GlobalStyle from "./theme/GlobalStyle";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Components
import { Home, Store } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/loja",
    element: <Store />,
  },
]);

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
