import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Text = styled('p', {
  fontFamily: '$default',
  lineHeight: '$md',
  margin: 0,
  color: '$gray700',

  variants: {
    size: {
      xs: { fontSize: 'xs' },
      sm: { fontSize: 'sm' },
      md: { fontSize: 'md' },
      lg: { fontSize: 'lg' },
      xl: { fontSize: 'xl' },
      'display-xs': { fontSize: 'display-xs' },
      'display-sm': { fontSize: 'display-sm' },
      'display-md': { fontSize: 'display-md' },
      'display-lg': { fontSize: 'display-lg' },
      'display-xl': { fontSize: 'display-xl' },
      'display-2xl': { fontSize: 'display-2xl' },
    },
  },
  defaultVariants: {
    size: 'md',
  },
})
export interface TextProps extends ComponentProps<typeof Text> {
  as?: ElementType
}
