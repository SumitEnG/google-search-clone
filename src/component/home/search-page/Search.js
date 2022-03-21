import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Search.css'
import FeedIcon from '@mui/icons-material/Feed';
import ImageIcon from '@mui/icons-material/Image';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchComponent from '../search-page/search-component/SearchComponent'
import SearchIcon from '@material-ui/icons/Search'
import MicIcon from '@material-ui/icons/Mic'
import { useStateValue } from '../../../StateProvider';
import { action } from '../../../reducer';

function Search() {
 
  const [input,setInput] = useState()
  const [{},dispatch] = useStateValue()
  const navigate=useNavigate()

  const search = (e) => {
    e.preventDefault()
     dispatch({
      type: action.SET_SEARCH_PAYLOAD,
      payload:input
     })
     setInput('')
     navigate('/search')
  }
  return (<>
    <div className='container'>
     <div className='main-container'>
       <div className="image">
         <Link to='/'>
          <img className='google-img' src='data:image/png;base64,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'/>
         </Link>
       </div>
      <div className="search_container">
       <form className="input">
           <SearchIcon />
           <input value={input} onChange={(e)=>setInput(e.target.value)} className='input-bar'/>
           <button type='submit' onClick={search} className="btn"></button>
           <MicIcon/>
       </form>
       <div className='option-container'>
      <div className="left-side-option">
        <p className='left-options'><SearchIcon/> All</p>
        <p className='left-options'><FeedIcon/> News</p>
        <p className='left-options'><ImageIcon/>Images</p>
        <p className='left-options'><LocalOfferIcon/>Shopping</p>
        <p className='left-options'><LocationOnIcon/>Map</p>
        <p className='left-options'><MoreVertIcon/>More</p>
      </div>
       <div className="right-side-option">
         <p className='right-options'>Setting</p>
         <p className='right-options'>Tools</p>
       </div>
      </div>
   </div>
   </div>
 </div>
 <br/>
    <div>
      <SearchComponent/>
    </div>
  </>
  )
}

export default Search
