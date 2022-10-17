import React, { ComponentProps, ReactNode } from 'react'
import { styled } from './styles'

const ButtonStyled = styled('button', {
  fontFamily: '$default',
  fontWeight: '600',
  borderRadius: '$md',
  fontSize: '$md',
  padding: '$2 $4',
  color: 'white',
  lineHeight: '$md',
  height: '$8',
  display: 'flex',
  alignItems: 'center',
  textAlign: 'baseline',
  boxShadow: '$xs',
  cursor: 'pointer',

  variants: {
    size: {
      sm: { height: '$8' },
      md: { height: '$10' },
      lg: { height: '$12' },
      xl: { height: '$16' },
      '2xl': { height: '$20' },
    },
    variant: {
      primary: {
        background: '$primary600',
        border: '$px solid $primary600',
        '&:hover': {
          background: '$primary700',
        },

        '&:focus': {
          background: '$primary600',
          outline: '$1 solid',
          outlineColor: '$primary100',
        },
      },
      'primary-gray': {
        background: 'white',
        border: '1px solid',
        borderColor: '$gray300',
        color: '$gray700',
        '&:hover': {
          background: '$gray50',
        },

        '&:focus': {
          background: 'white',
          outline: '$1 solid',
          outlineColor: '$gray100',
        },
      },
      'secondary-color': {
        background: '$primary50',
        border: '1px solid',
        borderColor: '$primary50',
        color: '$primary700',
        '&:hover': {
          background: '$primary100',
          color: '$primary800',
        },

        '&:focus': {
          background: '$primary50',
          outline: '$1 solid',
          outlineColor: '$primary100',
        },
      },
      'tertiary-gray': {
        background: 'white',
        border: '1px solid',
        borderColor: 'white',
        boxShadow: 'none',
        color: '$gray600',
        '&:hover': {
          background: '$gray50',
          color: '$gray700',
        },

        '&:focus': {
          background: 'white',
          outline: '$1 solid',
          outlineColor: 'white',
        },
      },
    },
    disabled: {
      true: {
        background: '$primary200',
        pointerEvents: 'none',
        cursor: 'not-allowed',
        '&:hover': {
          background: '$primary200',
        },
      },
    },
  },
  compoundVariants: [
    {
      disabled: true,
      variant: 'primary-gray',
      css: {
        color: '$gray200',
        background: 'white',
        borderColor: '$gray200',
      },
    },
    {
      disabled: true,
      variant: 'secondary-color',
      css: {
        color: '$primary200',
        background: '$primary50',
        borderColor: '$primary50',
      },
    },
    {
      disabled: true,
      variant: 'tertiary-gray',
      css: {
        color: '$gray300',
        background: 'white',
      },
    },
  ],

  defaultVariants: {
    size: 'md',
    variant: 'primary',
  },
})

const LeftAdornment = styled('div', {
  width: '$5',
  height: '$5',
  // background: '$error100',
})
const RightAdornment = styled('div', {
  width: '$5',
  height: '$5',
  // background: '$error100',
})

export type ButtonProps = ComponentProps<typeof ButtonStyled>
export const Button: React.FC<ButtonProps> = (props) => {
  return (
    <ButtonStyled {...props}>
      <LeftAdornment />
      {props.children}
      <RightAdornment />
    </ButtonStyled>
  )
}
Button.displayName = 'Button'
