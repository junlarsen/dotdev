import { createStitches } from '@stitches/react';
import * as RadixColors from '@radix-ui/colors';

export const { styled, globalCss, css, getCssText, keyframes, createTheme, config } = createStitches({
  theme: {
    colors: {
      ...RadixColors.orangeA,
      ...RadixColors.slate,
      ...RadixColors.red,
      ...RadixColors.grass,
      ...RadixColors.yellow,
      ...RadixColors.blue,
      ...RadixColors.whiteA,
      ...RadixColors.blackA,
    },
    space: {
      1: '4px',
      2: '8px',
      3: '16px',
      4: '32px',
      5: '64px',
      6: '128px',
    },
    sizes: {
      1: '4px',
      2: '8px',
      3: '16px',
      4: '32px',
      5: '64px',
      6: '128px',
    },
    radii: {
      1: '2px',
      2: '4px',
      3: '8px',
      round: '9999px',
    },
    fontWeights: {
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      ultra: '900',
    },
    fontSizes: {
      xxl: '2.25rem',
      xl: '1.875rem',
      lg: '1.5rem',
      md: '1em',
    },
    lineHeights: {
      xxl: '2.5rem',
      xl: '2.25rem',
      lg: '2rem',
      md: '1.5em',
    },
    fonts: {
      display: 'Noto Sans JP, Noto Sans, sans-serif',
    },
    letterSpacings: {
      tighter: '-0.094em',
      tight: '-0.031em',
      normal: '0em',
      wide: '0.006em',
      wider: '0.016em',
    },
  },
  media: {
    sm: '(min-width: 640px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 1024px)',
  },
});

export const reset = globalCss({
  'html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, main, menu, nav, output, ruby, section, summary, time, mark, audio, video':
    {
      margin: '0',
      padding: '0',
      border: '0',
      fontSize: '100%',
      font: 'inherit',
      verticalAlign: 'baseline',
    },
  'article, aside, details, figcaption, figure, footer, header, hgroup, main, menu, nav, section': {
    display: 'block',
  },
  '*[hidden]': {
    display: 'none',
  },
  body: {
    lineHeight: '1',
  },
  'ol, ul': {
    listStyle: 'none',
  },
  'blockquote, q': {
    quotes: 'none',
  },
  'blockquote:before, blockquote:after, q:before, q:after': {
    content: 'none',
  },
  table: {
    borderSpacing: '0',
  },
});

export const global = globalCss({
  'html body': {
    backgroundColor: '$orangeA1',
  },
});
