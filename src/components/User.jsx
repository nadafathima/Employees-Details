import React from 'react'

function User({ user }) {

  return ( 
    <>
    <button data-bs-toggle="collapse" type="button" className="btn btn-primary" data-bs-target={"#d"+user.id}>View More</button>

    <div id={"d"+user.id} className='collapse'>
      <h6>{user.name}</h6>
      <h6>{user.username}</h6>
      <h6>{user.website}</h6>
      <h6>{user.address.city},{user.address.street},{user.address.zipcode}</h6>
    </div>

    </>
  )
}

export default User
