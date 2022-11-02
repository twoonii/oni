import { ComponentProps } from '@stitches/react'
import { styled } from '../styles'

export const Box = styled('div', {
  background: '$white',
  outline: '1px solid',
  outlineColor: '$gray200',
  padding: '$2 $4',
  borderRadius: '$md',
})
export type BoxProps = ComponentProps<typeof Box>
