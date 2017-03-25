import React from 'react'

import {
  Paragraph,
} from '../components/BasicComponents/index'

const _capitalizeFirst = (string) => {
  return string.slice(0, 1).toUpperCase() + string.slice(1)
}

const _humanizeCountries = (country) => {
  const trimCountry = country.trim().toUpperCase()
  switch (trimCountry) {
    case 'USA':
    case 'UNITED STATES':
      return 'USA'
    case 'HONGKONG':
    case 'HKG':
      return 'Hong Kong'
    case 'CANADA':
    case 'CA':
    case 'CAN':
      return 'Canada'
    case 'GBR':
      return 'Great Britain'
    case 'MYS':
      return 'Malaysia'
    case 'IND':
      return 'India'
    case 'SGP':
      return 'Singapore'
    case 'IDN':
      return 'Indonesia'
    case 'PHL':
      return 'Philippines'
    case 'THA':
      return 'Thailand'
    case 'AUS':
      return 'Australia'
    case 'TWN':
      return 'Taiwan'
    case 'JPN':
      return 'Japan'
    default:
      return null
  }
}

const _humanizePublisher = (publisher) => {
  const trimPublisher = publisher.trim().toUpperCase()

  switch (trimPublisher) {
    case 'APP': {
      return 'Mobile Apps'
    }
    case 'SITE': {
      return 'Web'
    }
    default: {
      return null
    }
  }
}

// ['hello', 'world'] , '/' , 'boop ' => 'boop hello / world'
const delimitText = (textArray, delimiter, initialString = '') => {
  return textArray.reduce((textString, text) => {
    return textString + `${textString} ${delimiter} `
  }, initialString).slice(0, -3)  // Remove delimiter at the end
}

// Usually map a code to something more readable
const humanize = (text) => {
  return _humanizeCountries(text) || _humanizePublisher(text) || _capitalizeFirst(text)
}

// Given some string, creates a list of paragraphs based on delimiter
const paragraphizeText = (text, delimiter = '\n\n', opts = {}) => {
  return text.split(delimiter).map((textBlock, index) => {
    return (<Paragraph {...opts.style}>{textBlock}</Paragraph>)
  })
}

export {
  humanize,
  delimitText,
  paragraphizeText,
}
