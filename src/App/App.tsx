import React, { ReactElement } from "react";

import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Container } from "react-bootstrap";
import PopularVideos from "../components/PopularVideos";
import NewVideos from "../NewVideos";

const App = () : ReactElement => (
	<div className="App d-flex flex-column h-100 bg-dark">
		<Header />
		<main className='flex-shrink-0'>
			<Container style={{height: "500px"}} className='mx-0 px-0 w-100'>
				<Container className='overflow-auto h-100 w-100'>
					<PopularVideos />
					<NewVideos />
				</Container>
			</Container>
		</main>
		<Footer />
	</div>
);


export default App;
