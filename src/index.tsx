import { render } from "react-dom";
import React from "react";

import Home from "./pages/Home/Home";

import "./index.scss";
import { ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router, Route } from "react-router-dom";

import apolloClient from "./lib/apolloClient";
import VideoDetails from "./pages/VideoDetails";


const rootElement = document.getElementById("root");

render(
	<Router>
		<ApolloProvider client={apolloClient}>
			<Route exact path='/'>
				<Home />
			</Route>
			<Route exact path='/videos/:videoID'>
				<VideoDetails />
			</Route>
		</ApolloProvider>
	</Router>,
	rootElement
);
