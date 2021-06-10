import React, { ReactElement } from "react";
import { useHistory } from "react-router";

import "./index.css";

const VideosSection = (props: VideosSection) : ReactElement => {
	const {videos = [], title} = props;
	const {push} = useHistory();

	const onClick = (id: number) => {
		push("videos/" + id);
	};

	return (
		<div className='d-flex flex-column'>
			<div className='text-start text-capitalize'>
				<p className='h6 mt-2' style={{color: "white"}}>{title}</p>
			</div>
			<div className='d-flex overflow-auto px-2 mx-2'>
				{videos.map(({muxPlaybackID, id}) => <img role='button' onClick={() => onClick(id)} key={id} className='video-thumbnail me-3 pt-2' width='200' height='200' src={`https://image.mux.com/${muxPlaybackID}/thumbnail.jpg`} />)}
			</div>
		</div>
	);
};


export default VideosSection;
