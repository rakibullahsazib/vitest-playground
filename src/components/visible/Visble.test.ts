import { describe } from 'vitest'
import { mount, VueWrapper } from '@vue/test-utils'
import Visible from './Visible.vue'

describe('is visible should work', () => {
  let wrapper: VueWrapper
  beforeEach(() => {
    wrapper = mount(Visible)
  })
  test('visible element should be visible', () => {
    expect(wrapper.get('[data-testid=visible').isVisible()).toBe(true)
  })
  test('invisible element should not be visible', () => {
    // This is returning true, but should be false
    expect(wrapper.get('[data-testid=invisible').isVisible()).toBe(false)
  })
})