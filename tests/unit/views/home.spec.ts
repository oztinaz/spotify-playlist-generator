import { mount } from '@vue/test-utils'
import Home from '@/views/Home.vue'
import store from '@/store'

describe('views/Home.vue', () => {
    it('renders hello message', () => {
        const wrapper = mount(Home, {
            global: {
                plugins: [
                    store
                ]
            }
        })

        expect(wrapper.find('#home').text()).toBe(store.state.message)
    })
})