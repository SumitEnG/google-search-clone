import React from 'react'
import './SearchComponent.css'
import { useStateValue } from '../../../../StateProvider'
import UseGoogleSearch from '../../../../useGoogleSearch'

function SearchComponent() {

  const[{payload}] =useStateValue()
console.log(payload)
  const {data} = UseGoogleSearch(payload)
     console.warn(data)
  return (

    <div className='search-container'>
      {payload && <>
      <div className='search-name'>About {data?.searchInformation.formattedTotalResults} results {data?.searchInformation.formattedSearchTime} seconds for {payload}</div>
      
      {data?.items.map(item=>(   
        <>
        <div className="container-image">

          {item?.pagemap?.cse_image?.length>0 && item.pagemap?.cse_image[0]?.src && ( <img className='search-image' src={item?.pagemap?.cse_image?.length>0 && item.pagemap?.cse_image[0]?.src}></img>
      )}
         
      <span className="link">
        <a href={item.link} target='_blank'>
        {item.link}
        </a>
      </span>
      </div>

    
        <a href='' target='_blank' className='title'>
        <h3>{item.title}</h3>
          </a>
     
      <div className="discription">
         {item.snippet}
      </div>
      </> ))}
      </>
    }
  
    </div>

  )
}

export default SearchComponent
