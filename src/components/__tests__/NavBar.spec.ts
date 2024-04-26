import { describe, expect, it } from 'vitest'

import { shallowMount } from '@vue/test-utils'
import { RouterLink } from 'vue-router'
import NavBar from '../NavBar.vue'

describe('navBar', () => {
  it('not throw error', () => {
    expect(() => shallowMount(NavBar)).not.toThrowError()
  })
  it('renders properly', () => {
    const wrapper = shallowMount(NavBar)
    const links = wrapper.findAllComponents(RouterLink)
    expect(links).toHaveLength(3)
  })
})
