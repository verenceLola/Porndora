import React, { ReactElement } from "react";
import { Container, Image } from "react-bootstrap";
import { useHistory } from "react-router";

import "./index.css";

const VideosSection = (props: VideosSection) : ReactElement => {
	const {videos = [], title} = props;
	const {push} = useHistory();

	const onClick = (id: number) => {
		push("videos/" + id);
	};

	return (
		<Container className='d-flex flex-column'>
			<Container className='text-start text-capitalize'>
				<p className='h6 mt-2' style={{color: "white"}}>{title}</p>
			</Container>
			<Container className='d-flex overflow-auto px-2 mx-2'>
				{videos.map(({muxPlaybackID, id}) => <Image role='button' onClick={() => onClick(id)} key={id} className='video-thumbnail me-3 pt-2' width='200' height='200' fluid src={`https://image.mux.com/${muxPlaybackID}/thumbnail.jpg`} />)}
			</Container>
		</Container>
	);
};


export default VideosSection;
