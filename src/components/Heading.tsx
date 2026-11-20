import { formatBelterFont } from '../utils/index.js'

interface HeadingProps {
  children: string
}

export function Heading({ children }: HeadingProps) {
  return (
    <h1 className="text-4xl font-title text-center">
      <span className="belta-title">{formatBelterFont(children)}</span>
    </h1>
  )
}
