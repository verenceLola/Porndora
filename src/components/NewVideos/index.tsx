import { gql, useQuery } from "@apollo/client";
import React, { ReactElement } from "react";
import VideosSection from "../VideosSection";

const NEW_VIDEOS = gql`
    query newVideos {
        newVideos(orientation: 0) {
            id
            muxPlaybackID
          }
    }`;

const TITLE = "New Videos";

const NewVideos = () : ReactElement => {
	const {data, loading, error} = useQuery<NewVideosData>(NEW_VIDEOS);

	return <VideosSection title={TITLE} videos={data?.newVideos} />;
};


export default NewVideos;
