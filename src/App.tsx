import React from "react";
import { store } from "./store";
import { Provider } from "react-redux";
import MeteoPage from "./pages/MeteoPage";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={createTheme()}>
        <CssBaseline />
        <MeteoPage />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
