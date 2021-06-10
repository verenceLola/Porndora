import React, { ReactElement } from "react";

import "./styles.scss";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PopularVideos from "../../components/PopularVideos";
import NewVideos from "../../components/NewVideos";

const Home = () : ReactElement => (
	<div className="App d-flex flex-column h-100 bg-dark">
		<Header loggedIn={false}/>
		{/* <main className='flex-shrink-0'>
			<div style={{height: "500px"}} className='mx-0 px-0 w-100'>
				<div className='overflow-auto h-100 w-100'>
					<PopularVideos />
					<NewVideos />
				</div>
			</div>
		</main> */}
		<Footer />
	</div>
);


export default Home;
