import React from 'react'
import PropTypes from 'prop-types'

function ButtonOutlined({children, ...props}) {
  return (
    <button 
      className="
        py-2.5
        px-5
        mx-2

        text-sm
        font-medium
        text-gray-900

        focus:outline-none
        bg-white
        rounded-lg
        border
        border-gray-200
        hover:bg-gray-100
        hover:text-blue-700
        focus:z-10
        focus:ring-4
        focus:ring-gray-200
      "
      {...props}
    >{children}</button>
  )
}

ButtonOutlined.propTypes = {}

export default ButtonOutlined
