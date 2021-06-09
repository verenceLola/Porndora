import { render } from "react-dom";
import React from "react";

import App from "./App/App";

import "./index.css";
import { ApolloProvider } from "@apollo/client";
import apolloClient from "./lib/apolloClient";

const rootElement = document.getElementById("root");

render(
	<ApolloProvider client={apolloClient}>
		<App />
	</ApolloProvider>,
	rootElement
);
