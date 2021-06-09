interface VideosSection {
    title: string,
    videos?: Video[]
}

interface Video {
    muxPlaybackID: string,
    id: number,
}
