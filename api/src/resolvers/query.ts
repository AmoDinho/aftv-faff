import { resolvers } from "."
const { google } = require('googleapis')
require('dotenv').config()

export const hello = (args: any, context: any) => {
    return "Your GraphQL API is now LIVE!🎈 "
}

export const getFanCams = async (args: any, context: any) => {
    const PATH_BASE: string = 'https://www.googleapis.com/youtube/v3/search?part=snippet&'
    const CHANNEL_ID: string = 'channelId=UCBTy8j2cPy6zw68godcE7MQ'


    const youtube = google.youtube({
        version: 'v3',
        auth: process.env.YOUTUBE_API_KEY
    })



    try {

        const res = await youtube.playlistItems.list({
            part: 'id,snippet,contentDetails',
            playlistId: 'PLub7sJmces1Q5DyKuroUilmXe5GXsuTBE'
        })

        console.log(res.data.items.id)

        /*

        */
        return res.data.items.map((item) => ({
            ID: item.id,
            title: item.snippet.title,
            url: item.contentDetails.videoId
        }))

    } catch (e) {
        return e
    }




}