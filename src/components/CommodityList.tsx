import { useState, useEffect } from 'react'
import { ReactSVG } from 'react-svg'

import { pickRandomSet } from '../utils/index.js'
import { CommodityItem } from './CommodityItem.js'
import downarrow from '../assets/arrow-down.svg'

interface CommodityDetails {
  label: string
  amount: number
  target: number
  pulse: boolean
}

const ITEMS = [
  'Fertilizer',
  'Poppy Seed',
  'Rhodium',
  'Vanadium',
  'FTL Drives',
  'Dried Fruit',
  'Mustard Seed',
  'owkwa kaka',
  'Beet Seed',
  'Flax',
  'Flax Seed',
  'Soy Protein',
  'Salt',
  'Vodka',
  'Synth Cheese',
  'Platinum',
  'Cabbage Seed',
  'Titanium',
  'Soil',
  'Insecticide',
  'botong',
  'unobtanium',
]

function generateItems(quantity: number) {
  return pickRandomSet(ITEMS, quantity)
}

function generateValues(labels: string[]): CommodityDetails[] {
  return labels.map((label): CommodityDetails => {
    const obj: CommodityDetails = {
      label,
      pulse: false,
      amount: 0,
      target: 0,
    }

    // 25% chance of pulsing text
    if (Math.random() < 0.25) {
      obj.pulse = true
    }

    // Generate inventory numbers, 25% chance of being equal
    if (Math.random() > 0.75) {
      const amount = Math.floor(Math.random() * 999)
      obj.amount = amount
      obj.target = amount
    } else {
      obj.amount = Math.floor(Math.random() * 999)
      obj.target = Math.floor(Math.random() * 999)
    }

    return obj
  })
}

export function CommodityList() {
  const [values, setValues] = useState<CommodityDetails[]>([])

  useEffect(() => {
    // TODO: get 4 random labels too
    setValues(generateValues(generateItems(4)))
  }, [])

  // prevent flash of layout
  if (values.length === 0) {
    return null
  }

  return (
    <div className="w-full h-full flex flex-col justify-between">
      {values.map(({ label, amount, target, pulse }, i) => (
        <CommodityItem
          key={label}
          label={label}
          show={false}
          offset={i}
          amount={amount}
          target={target}
          pulse={pulse}
        />
      ))}
      <div className="w-full h-8 flex justify-center items-center text-center">
        <ReactSVG
          src={downarrow}
          className="text-yellow h-8 w-14 flex items-center"
        />
      </div>
    </div>
  )
}
