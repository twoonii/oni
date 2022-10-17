import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps } from '@twooni-ui/react'
export default {
  type: 'Button',
  component: Box,
  args: {
    children: 'opa',
  },
} as Meta<BoxProps>

export const Default: StoryObj = {}
