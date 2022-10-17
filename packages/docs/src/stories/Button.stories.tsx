import type { Meta, StoryObj } from '@storybook/react'
import {
  Button,
  ButtonProps,
  LeftAdornment,
  RightAdornment,
} from '@twooni-ui/react'
import { RiHomeLine } from 'react-icons/ri'

export default {
  type: 'Button',
  component: Button,
  subcomponents: { LeftAdornment, RightAdornment },
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
export const PrimaryWithLeftIcon: StoryObj = {
  args: { variant: 'primary-gray' },
  render: (args) => (
    <Button {...args}>
      <LeftAdornment>
        <RiHomeLine />
      </LeftAdornment>
      opa
      <RightAdornment>
        <RiHomeLine />
      </RightAdornment>
    </Button>
  ),
}
