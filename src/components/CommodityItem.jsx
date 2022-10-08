import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { ReactSVG } from 'react-svg'
import { formatBelterFont } from '../utils'
import leftarrow from '../assets/arrow-left.svg'
import rightarrow from '../assets/arrow-right.svg'
import commodityborder from '../assets/commodity-border.svg'

const OFFSET_BEGIN_AT = 300
const OFFSET_TIMING = 80

function CommodityItem({
  label,
  show = false,
  offset = 1,
  amount = 0,
  target = 0,
  pulse = false,
}) {
  const [readyShow, setReadyShow] = useState(show)
  const [readyPulse, setReadyPulse] = useState(false)
  const delta = target - amount

  useEffect(() => {
    const timer = setTimeout(() => {
      if (readyShow === false) {
        setReadyShow(true)
      }
    }, offset * OFFSET_TIMING + OFFSET_BEGIN_AT)

    return () => {
      clearTimeout(timer)
    }
  }, [offset])

  // at 3:50 of S05E02 "The Churn" pulses do not begin until after show animation
  // animation is hardcoded but it needs to wait until after all items are
  // shown so that pulses are timed the same.
  useEffect(() => {
    const timer = setTimeout(() => {
      if (pulse === true) {
        setReadyPulse(true)
      }
    }, 800)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <div className="w-full h-12 space-x-4 flex flex-row">
      <div className="h-12 flex-grow border border-yellow px-2 leading-none relative">
        <ReactSVG
          src={commodityborder}
          className="w-8 yellow absolute -left-1.5 -top-1.5"
        />
        <div
          className={`${
            readyShow ? 'opacity-100' : 'opacity-0'
          } h-full flex flex-row space-x-2 justify-between`}
        >
          <div
            className={`font-title text-2xl text-blue flex-grow overflow overflow-hidden text-clip ${
              readyPulse ? 'animate-pulse-1' : ''
            }`}
          >
            {formatBelterFont(label)}
          </div>
          <div className="flex-none flex flex-col justify-between text-right py-1">
            <div className="text-white">{target}kg</div>
            {delta < 0 ? (
              <div className="text-sm text-blue">
                [<span className="text-red">{amount}</span>kg]
              </div>
            ) : delta > 0 ? (
              <div className="text-sm text-blue">
                [<span className="text-green">{amount}</span>kg]
              </div>
            ) : (
              // Delta = 0 or undefined
              <div className="text-sm text-blue">
                [<span className="text-white">{amount}</span>kg]
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="h-9 space-x-2 flex flex-row">
        <div className="w-20 h-9 border border-yellow ">
          <div
            className={`${
              readyShow ? 'opacity-100' : 'opacity-0'
            } h-full flex items-center justify-center`}
          >
            {delta < 0 ? (
              <span className="text-sm text-green">{delta}kg</span>
            ) : delta > 0 ? (
              <span className="text-sm text-red">{delta}kg</span>
            ) : (
              // Delta = 0 or undefined
              <span className="text-sm text-white">{delta}kg</span>
            )}
          </div>
        </div>
        <div className="w-20 h-9 border border-yellow text-yellow">
          <div
            className={`${
              readyShow ? 'opacity-100' : 'opacity-0'
            } h-full flex flex-row items-center justify-center`}
          >
            {delta < 0 ? (
              <>
                <ReactSVG src={leftarrow} className="w-2 flex items-center" />
                <ReactSVG src={leftarrow} className="w-2 flex items-center" />
                <ReactSVG src={leftarrow} className="w-2 flex items-center" />
              </>
            ) : delta > 0 ? (
              <>
                <ReactSVG src={rightarrow} className="w-2 flex items-center" />
                <ReactSVG src={rightarrow} className="w-2 flex items-center" />
                <ReactSVG src={rightarrow} className="w-2 flex items-center" />
              </>
            ) : (
              // Delta = 0 or undefined
              <div className="h-0 w-10 border border-t-1 border-b-0 border-yellow" />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

CommodityItem.propTypes = {
  label: PropTypes.string,
  show: PropTypes.bool,
  offset: PropTypes.number,
  amount: PropTypes.number,
  target: PropTypes.number,
  pulse: PropTypes.bool,
}

export default CommodityItem
