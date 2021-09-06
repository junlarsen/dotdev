export function isPreviewMode(): boolean {
  return (!process.env.NODE_ENV || process.env.NODE_ENV === 'development')
    || (typeof window !== 'undefined' && window.location.host === 'preview.supergrecko.dev')
}
