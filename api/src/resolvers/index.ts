import { hello, getFanCams } from "./query";
import { IResolvers } from "graphql-tools/dist/Interfaces"
export const resolvers: IResolvers = {
    Query: {
        hello: (root: any, args: any, context: any) => hello(args, context),
        getFanCams: (root: any, args, any, context: any) => getFanCams(args, context)
    }
}
