import { useEffect, useState } from 'react'
import API_KEY from './Keys'
const CONTEXT_KEY = "0c7a694f8f4e0baa4";


const UseGoogleSearch = (payload) => {

    const[data,setData] =useState();

    
    useEffect(()=>{
        
        const fetchData = async () => {

        fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${payload}`)
            .then(result=>result.json())
            .then((res)=>setData(res))
        }

            fetchData()
            .then((responce)=>console.log(responce))
            .catch((err)=>console.log(err))
        
    },[payload])
    return {data};
}

export default UseGoogleSearch
