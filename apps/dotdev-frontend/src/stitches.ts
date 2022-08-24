import { createStitches } from '@stitches/react';

export const { styled, css, globalCss, getCssText } = createStitches({
  theme: {
    fonts: {
      noto: 'Noto Sans JP, Noto Sans, sans-serif',
      jetbrains: 'JetBrains Mono, monospace',
      icons: 'Material Icons, sans-serif',
    },
    colors: {
      danger: '#F44336',
      warning: '#FF9800',
      success: '#4CAF50',
      background: '#FFFFFE',
      black: '#000000',
      stroke: '#F2F4F6',
      primary: '#DA1B5E',
    },
    fontSizes: {
      headline: '2.25rem',
      heading1: '1.875rem',
      heading2: '1.5rem',
      heading3: '1.25rem',
      heading4: '1.125rem',
      heading5: '$body',
      icons: '$heading3',
      body: '1rem',
    },
  },
  media: {
    sm: '(max-width: 639px)',
    md: '(min-width: 640px)',
    lg: '(min-width: 1024px)',
  },
});

export const applyCssReset = globalCss({
  'html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, main, menu, nav, output, ruby, section, summary, time, mark, audio, video':
    {
      margin: '0',
      padding: '0',
      border: '0',
      fontSize: '100%',
      font: 'inherit',
      verticalAlign: 'baseline',
    },
  a: {
    cursor: 'pointer',
    textDecoration: 'none',
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
