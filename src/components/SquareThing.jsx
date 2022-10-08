import React from 'react'
import PropTypes from 'prop-types'

function SquareThing({
  label = '',
  isActive = false,
  isNotify = false,
  onClick = () => {},
}) {
  return (
    <div className="w-10" onClick={onClick}>
      {label && (
        <p className="text-2xs text-center uppercase whitespace-nowrap text-clip overflow-hidden">
          {label}
        </p>
      )}
      <div
        className={`w-10 h-10 border border-yellow-t border-4 flex items-center justify-center ${
          isActive ? 'bg-yellow' : ''
        }`}
      >
        <div
          className={`w-6 h-6 border border-yellow-t border-4 ${
            isActive ? 'bg-yellow' : ''
          } ${isNotify ? 'bg-blue' : ''}`}
        />
      </div>
    </div>
  )
}

SquareThing.propTypes = {
  label: PropTypes.string,
  isActive: PropTypes.bool,
  isNotify: PropTypes.bool,
  onClick: PropTypes.func,
}

export default SquareThing
