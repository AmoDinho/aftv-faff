//const resolvers = require('../src/resolvers/index')
import { resolvers } from '../src/resolvers/index'
import { slsInvoke } from '../utils/tests/invokeLocal'
import Body from '../utils/tests/body'
describe('[Query.getFanCams]', () => {
    /*
    const mockContext = {
        dataSources: {
            youtubeAPI: { getFanCams: jest.fn() }
        }
    }

    const { getFanCams } = mockContext.dataSources.youtubeAPI

    it('returns fanCams', async () => {
        const res = await getFanCams(null, {}, mockContext)

        expect(res).toHaveProperty(['ID', 'title', 'url'])
    })*/

    test('returns fanCams', async () => {
        const query = new Body(
            `
            query{
                getFanCams{
                    ID
                    title
                    url
                }
            }
            `
        ).getJson

        const res = await slsInvoke(query)
        expect(typeof res.body.data.getFanCams.title).toBe('string')
    })
})