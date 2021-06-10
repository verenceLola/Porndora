import React, { ReactElement } from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PopularVideos from "../../components/PopularVideos";
import NewVideos from "../../components/NewVideos";

import "./Home.scss";

const Home = () : ReactElement => (
	<div className="App d-flex flex-column h-100 bg-dark">
		<Header loggedIn={false}/>
		<main>
			<div className='container'>
				<div className='content'>
					<PopularVideos />
					<NewVideos />
				</div>
			</div>
		</main>
		<Footer />
	</div>
);


export default Home;
