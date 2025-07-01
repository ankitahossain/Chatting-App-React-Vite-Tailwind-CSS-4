import React from 'react'

const Button = ({btnContent, btnDesign}) => {
  return (
    <div>
      <button className ={btnDesign}>
        {btnContent}
      </button>
    </div>
  )
}

export default Button;
