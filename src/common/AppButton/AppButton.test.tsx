import { render } from '@testing-library/react'
import { describe, expect, test } from 'vitest'

import { AppButton } from '@/common'
import i18n from '@/localization'

describe('AppButton tests', () => {
  test('Render test', () => {
    const wrapper = render(
      <AppButton className='test__button' text={i18n.t('ui-kit.some-label')} />,
    )

    expect(wrapper.findAllByText('label')).toBeTruthy()
  })
})
