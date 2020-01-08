import { createLocalVue, shallowMount, mount } from '@vue/test-utils'
import App from '../../src/App.vue'
describe('<App/>', () => {
    let localVue: any
    beforeEach(() => {
        localVue = createLocalVue()

    })


    test('Display all FanCams', () => {
        const wrapper = shallowMount(App, { localVue })
        wrapper
    })
})