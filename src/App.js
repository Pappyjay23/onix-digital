import React from "react";
import Navbar from "./components/Navbar/Navbar";
import {
	About,
	Contact,
	Footer,
	Home,
	MailSub,
	Plans,
	Portfolio,
	Project,
	Services,
} from "./pages";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./Global";

const theme = {
	colors: {
		orange: "#ff695f",
		orangeGrad:
			"linear-gradient(105deg, rgba(255,104,95,1) 0%, rgba(255,144,104,1) 100%)",
		blue: "#03a4ed",
		lightBlue: "#9bdbf8",
		dark: "#2a2a2a",
		white: "#fff",
		lightGrey: "#fafafa",
	},
};

function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Navbar />
			<Home />
			<Services />
			<About />
			<Portfolio />
			<Plans />
			<MailSub />
			<Project />
			<Contact />
			<Footer />
		</ThemeProvider>
	);
}

export default App;
