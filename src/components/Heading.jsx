import { formatBelterFont } from '../utils'

function Heading({ children }) {
  return (
    <h1 className="text-4xl font-title text-center">
      <span className="belta-title">{formatBelterFont(children)}</span>
    </h1>
  )
}

// Heading.propTypes = {
//   children: PropTypes.string,
// }

export default Heading
