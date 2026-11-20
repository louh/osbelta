export function BottomPiece() {
  return (
    <div class="h-6 flex flex-row justify-between space-x-2">
      <div class="flex flex-row space-x-2 leading-none text-xs text-white">
        <div class="flex items-center justify-center border border-yellow bg-yellow-t px-2 py-1 uppercase">meta</div>
        <div class="flex items-center justify-center border border-yellow bg-blue-t px-2 py-1 uppercase">inv</div>
        <div class="flex items-center justify-center border border-yellow bg-yellow-t px-2 py-1 uppercase">nav</div>
      </div>
      <div class="flex flex-row space-x-1">
        <div class="w-2.5 h-2.5 rounded-full border border-blue mt-0.5" />
        <div class="w-4 h-full border border-blue bg-yellow" />
        <div class="w-4 h-full border border-blue bg-yellow" />
        <div class="w-4 h-full border border-blue" />
        <div class="w-4 h-full border border-blue" />
        <div class="w-4 h-full border border-blue" />
      </div>
    </div>
  )
}
