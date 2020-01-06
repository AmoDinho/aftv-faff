const resolvers = require('../resolvers/index')

describe('[Query.getFanCams]', () => {
    const mockContext = {
        dataSources: {
            youtubeAPI: { getFanCams: jest.fn() }
        }
    }

    const { getFanCams } = mockContext.dataSources.youtubeAPI

    it('returns fanCams', async () => {
        const res = await resolvers.Query.getFanCams(null, {}, mockContext)

        expect(res).toHaveProperty(['ID', 'title', 'url'])
    })
})