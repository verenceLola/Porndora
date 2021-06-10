import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import React, { ReactElement } from "react";
import { Container, Image } from "react-bootstrap";
import { useParams } from "react-router";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import VideoPlayer from "../../components/Player";

import "./index.scss";

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

interface IProps {
    video: Video,
}

const Details =({video}: IProps) : ReactElement => {
	const {id, title, videoTags, numLikes,createdAt, format} = video;

	return (
		<Container className='d-flex flex-column' style={{height: 400}}>
			<p className='display-5' style={{color: "white"}}>{title}</p>
			<Container className='d-flex justify-content-around'>
				<Image src='example.com' />
				<Image src='www.another.com' />
				<Image src='example.com' />
			</Container>
			<div className='container'>
				<p className='display-6'>13.6K Views</p>
				<p className='display-6'>{numLikes}</p>
				<p className='display-6'>Published at {createdAt}</p>
				<img className='img-fluid' src='this.com' />
			</div>
			<div className='container'>
				<span className='h-6' style={{color: "white"}}>Tags</span>
				<div className='container d-flex flex-wrap'>
					{
						videoTags.map(tag => <span key={tag.id} className="badge rounded-pill bg-primary mx-2 mt-2">{tag.tag.text}{" "}{tag.tag.numLikes}</span>)
					}
				</div>
			</div>
		</Container>
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
		<div className='d-flex h-100 flex-column bg-dark'>
			<Header loggedIn/>
			<main className='flex-shrink-0'>
				<Container className='mx-0 px-0 w-100'>
					<Container className='d-flex flex-column overflow-auto h-100 w-100'>
						<Container>
							<VideoPlayer muxPlaybackID={muxPlaybackID} />
							<Details video={data.video} />
						</Container>
					</Container>
				</Container>
			</main>
			<Footer />
		</div>
	);
};

export default VideoDetails;
