
import React from 'react'
import { Routes, Route } from "react-router-dom";
import SearchAppBar from './components/SearchAppBar';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import HomePage from './Pages/HomePage';



const theme = createTheme({
  palette: { mode: 'dark' },

});

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <SearchAppBar />
        <Routes>
          <Route path='/' element={<HomePage />}></Route>

        </Routes>
      </ThemeProvider>
    </div>


  )
}

export default App
