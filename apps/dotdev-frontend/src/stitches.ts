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
