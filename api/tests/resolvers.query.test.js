const resolvers = require('../resolvers')

describe('[Query.getFanCams]', () => {
    const mockContext = {
        dataSources: {
            youtubeAPI: { getFanCams: jest.fn() }
        }
    }

    const { getFanCams } = mockContext.dataSources.youtubeAPI
})