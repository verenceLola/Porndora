import React, { ReactElement } from "react";
import { useHistory } from "react-router";

import "./VideoSection.scss";

const VideosSection = (props: VideosSection) : ReactElement => {
	const {videos = [], title} = props;
	const {push} = useHistory();

	const onClick = (id: number) => {
		push("videos/" + id);
	};

	return (
		<div className='category-container'>
			<div className='category-name'>
				<p>{title}</p>
			</div>
			<div className='videos'>
				{videos.map(({muxPlaybackID, id}) => <img role='button' onClick={() => onClick(id)} key={id} width='200' height='200' src={`https://image.mux.com/${muxPlaybackID}/thumbnail.jpg`} />)}
			</div>
		</div>
	);
};


export default VideosSection;
