# Civilized Software Take Home Project

Your assignment is to show a list of videos and let the user click a video to show a video detail page where the video can play.

You must call our Porndora GraphQL API to get the list of videos and show a video with tags and other meta data. Our GraphQL API is partially (self) documented at https://porn-dora.herokuapp.com.

We host our videos in Mux so you'll need to make requests to Mux to show thumbnails and play the video (details below)

Please try to get to functionality first, and then try to make it look good, and please try to write production quality code. We want to see what type of code you will write if we're really working together!

## Requirements

1. Must call `videos()` to get some videos
2. Must display a thumbnail for each video. In order to display the thumbnail, you'll need to use the `muxPlaybackId` and call Mux. See docs here: https://docs.mux.com/guides/video/get-images-from-a-video#get-an-animated-gif-from-a-video
3. Video detail page should be a separate page
4. Video should automatically start playing. You can find docs on how to play the video on Mux as well: https://docs.mux.com/guides/video/stream-video-files#4-watch-your-video
5. Should show title of video
6. Should show number of likes on the video
7. Should show published date
8. Should show all the VideoTags
9. For each VideoTag, should show the number of likes

## Bonus

1. Unit test your components using enzyme
2. Add a header
3. Add a footer
4. Make it responsive
5. Style like Porndora
6. Add buttons for like, dislike, share, and flag
