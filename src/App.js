import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { Home, Services } from "./pages";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./Global";

const theme = {
	colors: {
		orange: "#ff695f",
		orangeGrad:
			"linear-gradient(105deg, rgba(255,104,95,1) 0%, rgba(255,144,104,1) 100%)",
		blue: "#03a4ed",
		dark: "#2a2a2a",
		white: "#fff",
		lightGrey: "#fafafa",
	},
};

function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			{/* <Router> */}
				<Navbar />
				<Home />
				<Services />
				{/* <Routes>
					<Route />
				</Routes>
			</Router> */}
		</ThemeProvider>
	);
}

export default App;
