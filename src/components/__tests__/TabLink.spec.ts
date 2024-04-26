import { describe, expect, it } from 'vitest'

import { shallowMount } from '@vue/test-utils'
import { RouterLink } from 'vue-router'
import TabLink from '../TabLink.vue'

describe('tabLink', () => {
  it('not throw error', () => {
    expect(() => shallowMount(TabLink)).not.toThrowError()
  })
  it('renders properly', () => {
    const wrapper = shallowMount(TabLink, { props: { to: '/' } })
    const link = wrapper.findComponent(RouterLink)
    expect(link.props('to')).toBe('/')
  })
})
