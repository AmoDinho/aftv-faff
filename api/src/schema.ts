const schema = `



type FanCams {
    ID: Int
    title: String
    views: Int
    
   
}


type FanCamPost {
     ID: Int
     fanCamAsset: String
     caption : String
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
