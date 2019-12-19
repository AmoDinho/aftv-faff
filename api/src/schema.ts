const schema = `



type FanCams {
    ID
    title
    views
    
   
}


type FanCamPost {
     ID
     fanCamAsset
     caption 
}

type Query {
    hello: String
   getFanCams: [FanCams]!
   getFanCamPosts: [FanCamPost]! 
} 

type Mutation {
  createFanCamPost(fanCamAsset: String!, caption: String!): FanCamPost 
}

`

export { schema }
