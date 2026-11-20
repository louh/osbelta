import { formatBelterFont } from '../utils/index.js'

interface HeadingProps {
  children: string
}

export function Heading({ children }: HeadingProps) {
  return (
    <h1 class="text-4xl font-title text-center">
      <span class="belta-title">{formatBelterFont(children)}</span>
    </h1>
  )
}
