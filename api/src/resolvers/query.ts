import { resolvers } from "."
const { google } = require('googleapis')
require('dotenv').config()

export const hello = (args: any, context: any) => {
    return "Your GraphQL API is now LIVE!🎈 "
}

export const getFanCams = (args: any, context: any) => {
    const PATH_BASE: string = 'https://www.googleapis.com/youtube/v3/search?part=snippet&'
    const CHANNEL_ID: string = 'channelId=UCBTy8j2cPy6zw68godcE7MQ'



    const youtube = google.youtube({
        version: 'v3',
        auth: process.env.YOUTUBE_API_KEY
    })

    async function getCams() {
        const res = await youtube.search.list({
            part: "snippet",
            channelId: "UCBTy8j2cPy6zw68godcE7MQ",
            maxResults: 20
        }).then(response => console.log(response.json))
            .catch(error => console.log(error))
    }



    try {

        getCams()

    } catch (e) {
        return e
    }




}