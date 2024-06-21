import React, { useState } from 'react'
import css from './EditableInput.module.scss';
import PropTypes from 'prop-types'
import ButtonIcon from '../buttons/button-icon/ButtonIcon';
import { mdiPencil } from '@mdi/js';
import { useRef } from 'react';

function EditableInput({value, type = '', ...props}) {

  const [isEditMode, setIsEditMode] = useState(false);
  const inputRef = useRef(null);
  function turnOnEditMode(){
    setIsEditMode(true);
    // autofocus the input field
    inputRef.current.focus();
  }

  return (
    <div 
    style={props.style}
    className={`flex justify-between relative items-center ${css.wrapper}`}>

      <span className={css.input}>
        {/* text */}
        <input 
          ref={inputRef}
          type={type}
          autoFocus
          value={value}
          readOnly={!isEditMode}
          onClick={turnOnEditMode}
          onBlur={() => setIsEditMode(false)}
          {...props}
         />
      </span>

      {!isEditMode && (
        <ButtonIcon
          onClick={turnOnEditMode}
          className={`hover:bg-gray-200 rounded-full ${css.button}`}
          path={mdiPencil}
          size={0.65}
          color="grey"
        />
      )}
      <button>
        {/* edit button */}
      </button>


    </div>
  )
}

EditableInput.propTypes = {
  value: PropTypes.string
}

export default EditableInput
