import { createLocalVue, shallowMount, mount } from '@vue/test-utils'
import App from '../../src/App.vue'
describe('<App/>', () => {
    let localVue: any
    beforeEach(() => {
        localVue = createLocalVue()

    })


    test('Display all FanCams', () => {
        const wrapper = shallowMount(App, { localVue })
        wrapper.setData({
            getFanCams: [
                {
                    ID: '23434343434',
                    title: 'Wenger left us in a mess',
                    url: '/wertyirtrtid=23'
                },
                {
                    ID: '54545454545',
                    title: 'Chambers will be missed',
                    url: '/eererfid=23'
                },
                {
                    ID: '36567445',
                    title: 'The board are deliousional',
                    url: '/tgdfdfdfdid=23'
                }
            ]
        })
    })
})