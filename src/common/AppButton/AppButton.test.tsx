import { render } from '@testing-library/react'
import { describe, expect, test } from 'vitest'

import i18n from '@/localization'

import AppButton from '.'

describe('AppButton tests', () => {
  test('Render test', () => {
    const wrapper = render(
      <AppButton
        className='test__button'
        text={i18n.t('inputs-overview.some-label')}
      />,
    )

    expect(wrapper.findAllByText('label')).toBeTruthy()
  })
})
