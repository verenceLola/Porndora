interface queryParams {
    videoID: string
}

interface videoDetailsVars {
    videoid: number
}


interface videoDetailsData {
    video: Video
}


interface Video {
    id: number,
    format: string,
    title: string,
    muxPlaybackID: string,
    numLikes: number,
    createdAt: string,
    videoTags: videoTag[]
}

type videoTag = {
    id: string,
    tag: Tag
}

type Tag = {
    id: string,
    text: string,
    numLikes: number,
}
