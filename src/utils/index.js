/**
 * Make letters reliably appear the way it does on the show by
 * changing the case where necessary.
 * @param {String} string
 */
export function formatBelterFont(string = '') {
  // s -> S, g -> G, a -> A, t -> T (at least for SHOWXATING)
  // not sure about other letters yet, trying N for now.
  return string
    .toLowerCase()
    .replaceAll('s', 'S')
    .replaceAll('n', 'N')
    .replaceAll('r', 'R')
    .replaceAll('g', 'G')
    .replaceAll('a', 'A')
    .replaceAll('t', 'T')
}

export function classNames(one = '', two = '') {
  return [one, two].join(' ').trim()
}

export function pickRandom (array) {
  return array[Math.floor(Math.random() * array.length)]
}

/**
 * from array, choose `quantity` number of items, make sure they're unique
 * @param {Array} array
 * @param {number} quantity
 * @returns array
 */
export function pickRandomSet (origArray, quantity = 0) {
  const array = [...origArray]
  const list = []
  for (let i = 0; i < quantity; i++) {
    const choice = pickRandom(array)
    const index = array.indexOf(choice)
    array.splice(index, 1) // Modifies the copied array
    list.push(choice)
  }
  return list
}
