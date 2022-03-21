import React from 'react'

function LeftNav({title}) {
  return (
    <div className='left-nav'  style={{marginLeft:"20px",color:"grey"}}>
        {title}
    </div>
  )
}

export default LeftNav;
