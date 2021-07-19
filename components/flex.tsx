import { CSSProperties, PropsWithChildren } from 'react'
import clsx from 'clsx'

export function Container({
  children,
  className,
  alignItems,
  flexDirection,
  justifyContent,
  flexWrap,
  alignContent,
  ...rest
}: PropsWithChildren<{
  className?: string
}> &
  Pick<CSSProperties, 'justifyContent' | 'flexDirection' | 'flexWrap' | 'alignItems' | 'alignContent'>) {
  const classes = clsx('flex', className)
  const style: CSSProperties = {
    alignItems,
    flexDirection,
    justifyContent,
    flexWrap,
    alignContent
  }
  return (
    <div className={classes} style={style} {...rest}>
      {children}
    </div>
  )
}

export function Box({
  children,
  className,
  alignSelf,
  flex,
  flexBasis,
  flexGrow,
  flexShrink,
  order,
  ...rest
}: PropsWithChildren<{
  className?: string
}> &
  Pick<CSSProperties, 'order' | 'flexGrow' | 'flexShrink' | 'flexBasis' | 'flex' | 'alignSelf'>) {
  const styles: CSSProperties = {
    alignSelf,
    flex,
    flexBasis,
    flexGrow,
    flexShrink,
    order
  }
  return (
    <div className={className} style={styles} {...rest}>
      {children}
    </div>
  )
}
