import React, { ReactElement } from "react";
import { Container, Image } from "react-bootstrap";

import "./index.css";

const VideosSection = (props: VideosSection) : ReactElement => {
	const {videos = [], title} = props;

	return (
		<Container className='d-flex flex-column'>
			<Container className='text-start text-capitalize'>
				<p className='h6 mt-2' style={{color: "white"}}>{title}</p>
			</Container>
			<Container className='d-flex overflow-auto px-2 mx-2'>
				{videos.map(({muxPlaybackID, id}) => <Image role='button' key={id} className='video-thumbnail me-3 pt-2' width='200' height='200' fluid src={`https://image.mux.com/${muxPlaybackID}/thumbnail.jpg`} />)}
			</Container>
		</Container>
	);
};


export default VideosSection;
