import React, { ReactElement } from "react";

import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const App = () : ReactElement => (
	<div className="App d-flex flex-column h-100">
		<Header />
		<Footer />
	</div>
);


export default App;
