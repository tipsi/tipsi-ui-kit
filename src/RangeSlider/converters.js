export function valueToPosition(value, valuesArray, sliderLength) {
  const index = valuesArray.indexOf(value)
  if (index === -1) {
    throw new Error(`Slider: Invalid value, array does not contain: ${value}`)
  }
  const arrLength = valuesArray.length - 1
  return (sliderLength * index) / arrLength
}

export function positionToValue(position, valuesArray, sliderLength) {
  if (position < 0 || sliderLength < position) {
    throw new Error(`Slider: Invalid position: ${position}`)
  }
  const arrLength = valuesArray.length - 1
  const index = (arrLength * position) / sliderLength
  return valuesArray[Math.round(index)]
}

export function createArray(start, end, step) {
  if (!step) {
    throw new Error(`Slider: Invalid step: ${step}`)
  }
  const length = Math.abs((start - end) / step) + 1
  const direction = start - end > 0 ? -1 : 1
  const result = []
  for (let i = 0; i < length; i++) { // eslint-disable-line no-plusplus
    result.push(start + (i * Math.abs(step) * direction))
  }
  return result
}
