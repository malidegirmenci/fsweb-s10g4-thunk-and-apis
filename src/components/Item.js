import React from 'react'


function Item({ data }) {
  //console.log("data", data);
  const fullName = `${data.name.first} ${data.name.last}`
  return (
    <div className=' flex flex-row justify-center p-2 shadow-md bg-[#3b3b3b] text-center rounded'>
      <img className='rounded' src={data.picture.large} alt={`ProfileImgBy${data.name.first}`}></img>
      <div className='flex flex-col justify-center items-start text-center pl-10'>
        <p className='text-2xl'>{fullName}</p>
        <p className='text-l'><b>Location:</b>{` ${data.location.city} / ${data.location.country.toUpperCase()}`}</p>
        <p className='text-l'><b>Username:</b>{` ${data.login.username}`}</p>
        <p className='text-l'><b>Favorite Game:</b>{` ${data.favGame}`}</p>
        <p className='text-l'>{`playing games for ${data.registered.age} years`}</p>
      </div>
    </div>
  )
}

export default Item