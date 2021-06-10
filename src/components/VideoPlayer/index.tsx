import React, { ReactElement, useEffect, useRef } from "react";
import Hls from "hls.js";

import "./VideoPlayer.scss";


const VideoPlayer = (props: VideoDetail): ReactElement => {
	const {muxPlaybackID} = props;
	const videoRef = useRef<HTMLVideoElement>(null);

	const src = `https://stream.mux.com/${muxPlaybackID}.m3u8`;

	useEffect(() => {
		let hls: Hls;
		if (videoRef.current) {
			const video = videoRef.current;
      
			if (video.canPlayType("application/vnd.apple.mpegurl")) {
				video.src = src;
			} else if (Hls.isSupported()) {
				hls = new Hls();
				hls.loadSource(src);
				hls.attachMedia(video);
			} else {
				console.error("Unable to play video");
			}
		}

		return () => {
			if (hls) {
				hls.destroy();
			}
		};
	}, [videoRef]);

	return (
		<video
			controls
			autoPlay
			ref={videoRef}
			className='player'
			preload='metadata'
			poster={`https://image.mux.com/${muxPlaybackID}/thumbnail.jpg`}
		/>
	);
};

export default VideoPlayer;
