import React from 'react'
import css from './Toggle.module.scss';
import PropTypes from 'prop-types'
import { useId } from 'react';

function Toggle({children, value, ...props}) {

  const uniqueId = useId();

  return (
    // <label for="default-toggle" class="inline-flex relative items-center cursor-pointer">
    //   <input type="checkbox" value="" id="default-toggle" class="sr-only peer">
    //     <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
    //     <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Toggle me</span>
    // </label>
    <label htmlFor={uniqueId} className="inline-flex relative items-center cursor-pointer">

      <input className={'sibling:checked:bg-blue-600 sr-only ' + css.input} type="checkbox" checked={value} {...props} id={uniqueId} />

      <div className={"w-11 h-6 bg-gray-200 rounded-full " + css.toggle } ></div>
      <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">{children}</span>
    </label>
  )
}

Toggle.propTypes = {
  value: PropTypes.bool,
}

export default Toggle
