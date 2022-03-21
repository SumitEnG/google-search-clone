import React from 'react'
import LeftNav from './left-side-nav/LeftNav'
import RightNav from './right-side-nav/RightNav'
import AppsIcon from '@material-ui/icons/Apps';
import  Avatar  from '@material-ui/core/Avatar';
import './Nav.css'
function Nav() {
  return (
    <div className='nav'>
        <div className="left-side-nav">
          <LeftNav title='About' />
          <LeftNav title='Store' />
        </div>
        <div className="right-side-nav">
            <RightNav title='Gmail' />
            <RightNav title='Images' />
            <AppsIcon style={{marginRight:"20px"}}/>
            <Avatar style={{marginRight:"20px",border:" 1px solid blue"}} />
        </div>
    </div>
  )
}

export default Nav
