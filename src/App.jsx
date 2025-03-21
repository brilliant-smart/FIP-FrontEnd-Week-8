import React, { useContext } from "react";
import { Container, CssBaseline, IconButton, Grid } from "@mui/material";
import { ThemeContext } from "./context/ThemeContext";
import Board from "./pages/Board";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import "../src/App.css";

function App() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <CssBaseline />
      <Container className="mt-3">
        <h2>Task Management App Using Material UI</h2>
        {/* Theme Toggle */}
        <div className="d-flex justify-content-end mb-3">
          <IconButton onClick={toggleTheme} color="inherit">
            <FontAwesomeIcon icon={darkMode ? faSun : faMoon} size="lg" />
          </IconButton>
        </div>

        {/* Task Board with Responsive Grid */}
        <Grid container spacing={3}>
          <Board />
        </Grid>
      </Container>
    </>
  );
}

export default App;
