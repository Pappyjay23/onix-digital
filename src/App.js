import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { Home } from "./pages";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./Global";

const theme = {
  colors:{
    orange: '#ff695f',
    blue: '03a4ed',
    dark: "#2a2a2a",
    white: "#fff"
  },
}

function App() {
	return (
		<ThemeProvider theme={theme}>
    <GlobalStyle />
			<Router>
				<Navbar />
				<Routes>
					<Route path='/' element={<Home />} />
				</Routes>
			</Router>
		</ThemeProvider>
	);
}

export default App;
