import { describe, it, expect, vi } from 'vitest'
import RandomPassword from '@/modules/GenerateRandomPassword/RandomPassword.vue'
import { mount } from '@vue/test-utils'

//Component Rendering Text
describe('RandomPassword', () => {
  const wrapper = mount(RandomPassword)
  it('matches the snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
  it('reders correctly', () => {
    expect(wrapper.find('h2').text()).toContain('Crear Contraseña Aleatoria')
    expect(wrapper.find('button').text()).toBe('Generar Contraseña')
  })
})

// Password Generation Test

describe('Password Generator', () => {
  const wrapper = mount(RandomPassword)

  it('generates a password when clicking the button', async () => {
    const button = wrapper.find('button')
    await button.trigger('click')
    const input = wrapper.find('input')
    expect(input.element.value).toHaveLength(36)
  })
})

//Clipboard Copy Test

describe('PasswordGenerator', () => {
  it('Copies de password to the clipboard', async () => {
    const wrapper = mount(RandomPassword)

    const button = wrapper.find('button')
    await button.trigger('click')

    Object.assign(navigator, {
      clipboard: {
        writeText: vi.fn(() => Promise.resolve())
      }
    })
    const copyIcon = wrapper.find('svg')
    await copyIcon.trigger('click')
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(wrapper.vm.passwordBox)
  })
})

describe('PasswordGenerator', () => {
    it('shows an error if unable to copy password', async () => {
      const wrapper = mount(RandomPassword)
  
      Object.assign(navigator, {
        clipboard: {
          writeText: vi.fn(() => Promise.reject('Copy Error')) 
        }
      })
  
      const consoleSpy = vi.spyOn(console, 'error')
  
      const button = wrapper.find('button')
      await button.trigger('click')
  
      const copyIcon = wrapper.find('svg')
      await copyIcon.trigger('click')
  
      expect(consoleSpy).toHaveBeenCalledWith('Error al copiar la contraseña: ', 'Copy Error')
  
      consoleSpy.mockRestore()
    })
  })
  