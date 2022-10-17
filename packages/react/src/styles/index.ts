import { createStitches, defaultThemeMap } from '@stitches/react'
import {
  colors,
  fontSizes,
  lineHeights,
  spacing,
  fonts,
  radii,
  shadows,
} from '@twooni-ui/tokens'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: 'space',
    width: 'space',
    outline: 'space',
  },
  theme: {
    colors,
    fontSizes,
    lineHeights,
    space: spacing,
    fonts,
    radii,
    shadows,
  },
})
