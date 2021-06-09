interface MostPopularVideosData {
    mostPopularVideos : Video[],
}

interface Video {
    muxPlaybackID: string,
    id: number
}
