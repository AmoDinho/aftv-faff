import { resolvers } from "."

export const hello = (args: any, context: any) => {
    return "Your GraphQL API is now LIVE!🎈 "
}

export const getFanCams = (args: any, context: any) => {
    const PATH_BASE: string = 'https://www.googleapis.com/youtube/v3/search?part=snippet&'
    const CHANNEL_ID: string = 'channelId=UCBTy8j2cPy6zw68godcE7MQ'
    const KEY = `&key=${process.env.YOUTUBE_API_KEY}`

    const fanCams: object = fetch(`${PATH_BASE}${CHANNEL_ID}${KEY}`)
        .then(response => console.log(response.json))
        .catch(error => console.log(error))


    return null
}