import { describe, expect, it } from 'vitest'

import { shallowMount } from '@vue/test-utils'
import SectionNavigation from '../homepage/SectionNavigation.vue'
import TabLink from '../TabLink.vue'

describe('sectionNavigation', () => {
  it('not throw error', () => {
    expect(() => shallowMount(SectionNavigation)).not.toThrowError()
  })
  it('renders properly', () => {
    const wrapper = shallowMount(SectionNavigation)
    const links = wrapper.findAllComponents(TabLink)
    expect(links).toHaveLength(5)
  })
})
