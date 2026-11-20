interface SquareThingProps {
  label: string
  isActive: boolean
  isNotify: boolean
  onClick: () => void
}

export function SquareThing({
  label = '',
  isActive = false,
  isNotify = false,
  onClick = () => {},
}: SquareThingProps) {
  return (
    <div class="w-10" onClick={onClick}>
      {label && (
        <p class="text-2xs text-center uppercase whitespace-nowrap text-clip overflow-hidden">
          {label}
        </p>
      )}
      <div
        class={`w-10 h-10 border border-yellow-t border-4 flex items-center justify-center ${
          isActive ? 'bg-yellow' : ''
        }`}
      >
        <div
          class={`w-6 h-6 border border-yellow-t border-4 ${
            isActive ? 'bg-yellow' : ''
          } ${isNotify ? 'bg-blue' : ''}`}
        />
      </div>
    </div>
  )
}
