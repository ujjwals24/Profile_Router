import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/ujjwals24')
    //  .then(response => response.json())
    //  .then(data => {
    //     console.log(data);
    //     setData(data)
    //  })
    // }, [])
    
  return (
    <div className=' flex justify-center '>
      <div className='text-center m-4 bg-transparent-600 text-black p-4 text-3xl pb-9	'>
    <img src={data.avatar_url}  alt="Git picture" width={1000} />
    </div>
    <div>
      
      <h4 className= ' m-4 bg-transparent-600 text-black p-4 text-3xl mt-9	 '> amet consectetur adipisicing elit. Repudiandae beatae laborum hic sequi reprehenderit labore quae, odio exercitationem, alias tempore velit dolor, facilis itaque praesentium ducimus excepturi ab. Illum, illo.</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, molestiae.</p>
      </div>

      </div>
    
   
    
  )
}

export default Github;

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/ujjwals24')
    return response.json()
}
