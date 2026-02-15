import React from 'react'

function Logo({width = '100px'}) {
  return (
    <div>
    <img
    src="https://images.pexels.com/photos/17357682/pexels-photo-17357682.jpeg?_gl=1*12a7ry4*_ga*NDk3NTQ1MTM5LjE3NjY5MTQzNjQ.*_ga_8JE65Q40S6*czE3NzExNDc3NTUkbzUkZzEkdDE3NzExNDgzOTIkajMyJGwwJGgw" alt="logo"
    className={`${width} h-auto object-contain rounded-lg`}
         />
    </div>
  )
}

export default Logo