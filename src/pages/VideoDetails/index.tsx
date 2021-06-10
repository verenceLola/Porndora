import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import React, { ReactElement } from "react";
import { useParams } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faThumbsDown, faPlusCircle, faThumbsUp, faShare, faFlag } from "@fortawesome/free-solid-svg-icons";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import VideoPlayer from "../../components/VideoPlayer";


import "./VideoDetails.scss";
import formatDate from "../../lib/formatDate";

const VIDEO_DETAILS = gql`
    query videoDetails($videoid: Int!) {
        video(videoId: $videoid){
            id
            format
            title
            muxPlaybackID
            numLikes
            createdAt
            videoTags {
              id
              tag {
                id
				text
				numLikes
              }
            }
            flags {
              id
              reason
              note
            }
          }
    }`;

interface IDetailsProps {
    video: Video,
}

interface ITitleProps {
	title: string,
}

const Title = ({title}: ITitleProps) : ReactElement => (
	<div className='title'>
		<FontAwesomeIcon icon={faHeart} />
		<p>{title}</p>
	</div>
);

interface IVideoActionsProps {
	id: number,
}

const VideoActions = ({id}: IVideoActionsProps) : ReactElement => (
	<div className='buttons'>
		<FontAwesomeIcon icon={faThumbsUp}/>
		<FontAwesomeIcon icon={faThumbsDown}/>
		<FontAwesomeIcon icon={faShare}/>
	</div>
);

interface IVideoStatsProps {
	numLikes: number,
	publishedAt: string,
}

const VideoStats = ({numLikes, publishedAt}: IVideoStatsProps) : ReactElement => (
	<div className='video-stats'>
		<div>
			<p>13.6K Views</p>
			<span>|</span>
		</div>
		<div>
			<p>{numLikes} Likes</p>
			<span>|</span>
		</div>
		<div>
			<p>Published {formatDate(publishedAt)}</p>
		</div>
		<div>
			<FontAwesomeIcon icon={faFlag} />
		</div>
	</div>
);

interface IVideoTagsProps {
	tags: videoTag[],
}

const VideoTags = ({tags}: IVideoTagsProps) : ReactElement =>(
	<div className='tags-container'>
		<div>
			<span className='title'>Tags</span>
			<span className='btn-view-all'>View all</span>
		</div>
		<div className='tags'>
			{
				tags.map(tag => <span key={tag.id} className="">{tag.tag.text}{" "}{tag.tag.numLikes}</span>)
			}
		</div>
		<div>
			<FontAwesomeIcon icon={faPlusCircle} />
		</div>
	</div>
);

const Details =({video}: IDetailsProps) : ReactElement => {
	const {id, title, videoTags, numLikes,createdAt} = video;
	console.log({videoTags});
	return (
		<div className='details'>
			<Title title={title}/>
			<VideoActions id={id}/>
			<hr />
			<VideoStats numLikes={numLikes} publishedAt={createdAt} />
			<VideoTags tags={videoTags} />
		</div>
	);
};

const VideoDetails = () : ReactElement =>{
	const {videoID} = useParams<queryParams>();
	const {data, error, loading} = useQuery<videoDetailsData, videoDetailsVars>(
		VIDEO_DETAILS,
		{variables: {videoid: parseInt(videoID,10)}}
	);

	if (!data){
		return <div></div>;
	}

	const { muxPlaybackID } = data.video;

	return (
		<div className=''>
			<Header loggedIn/>
			<main>
				<div className='container'>
					<div className='video-content'>
						<VideoPlayer muxPlaybackID={muxPlaybackID} />
						<Details video={data.video} />
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
};

export default VideoDetails;
