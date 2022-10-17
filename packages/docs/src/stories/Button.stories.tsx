import type { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from '@twooni-ui/react'

export default {
  type: 'Button',
  component: Button,
  args: {
    children: 'Button CTA',
    variant: 'primary',
    size: 'md',
    disabled: false,
  },
  argTypes: {
    variant: {
      options: ['primary', 'primary-gray', 'secondary-color', 'tertiary-gray'],
      control: { type: 'inline-radio' },
    },
    size: {
      options: ['sm', 'md', 'lg', 'xl', '2xl'],
      control: { type: 'inline-radio' },
    },
    onClick: {
      action: 'click',
    },
  },
} as Meta<ButtonProps>

export const Primary: StoryObj = {}
export const Secondary: StoryObj = {
  args: {
    variant: 'secondary-color',
  },
}
export const PrimaryGray: StoryObj = {
  args: {
    variant: 'primary-gray',
  },
}
export const Tertiary: StoryObj = {
  args: {
    variant: 'tertiary-gray',
  },
}
