import { gql, useQuery } from "@apollo/client";
import React, { ReactElement } from "react";
import VideosSection from "../VideosSection";

const POPULAR_VIDEOS = gql`
    query mostPopularVideos{
        mostPopularVideos{
        muxPlaybackID
        id
        }
    }`;

const TITLE = "Popular Videos";
  

const PopularVideos = () : ReactElement => {
	const {loading, error, data} = useQuery<MostPopularVideosData>(POPULAR_VIDEOS);

	return <VideosSection title={TITLE} videos={data?.mostPopularVideos} />;
};

export default PopularVideos;
