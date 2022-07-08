import React from "react";
import Box from "@mui/material/Box";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./features/NavBar";
import { SideBar } from "./features/SideBar";
import { createTheme, ThemeProvider } from "@mui/material";
import { cyan } from "@mui/material/colors";
import { Home } from "./features/home/Home";
import { CssBaseline } from "@mui/material";
import "./App.css";
import { Weights } from "./features/weights/Weights";

const theme = createTheme({
  palette: {
    primary: {
      main: cyan[500],
    },
    secondary: {
      main: "#8884d8", //purple
    },
  },
  typography: {
    fontFamily: "Nunito",
  },
});

function App() {

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavBar />
        <SideBar />
        <Box
          sx={{
            pt: 10,
            pr: 3,
            pl: { xs: 3, sm: 3, md: 25 },
            bgcolor: "#E3F2FD",
          }}
        >
          <Routes>
            <Route path="/health-track/" element={<Home />} />

            <Route path="/health-track/weight" element={<Weights />} />
          </Routes>
        </Box>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
