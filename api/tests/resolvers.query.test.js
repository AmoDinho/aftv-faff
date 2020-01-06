//const resolvers = require('../src/resolvers/index')
import { resolvers } from '../src/resolvers/index'
describe('[Query.getFanCams]', () => {
    const mockContext = {
        dataSources: {
            youtubeAPI: { getFanCams: jest.fn() }
        }
    }

    const { getFanCams } = mockContext.dataSources.youtubeAPI

    it('returns fanCams', async () => {
        const res = await getFanCams(null, {}, mockContext)

        expect(res).toHaveProperty(['ID', 'title', 'url'])
    })
})