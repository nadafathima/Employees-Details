import React, {useState,useEffect} from 'react'
import User from './User'

function Home() {

const [users,setUsers]=useState([])
useEffect(()=>{
  getData()
},[])

const opt=true

const getData=()=>{
    const res=fetch("https://jsonplaceholder.typicode.com/users")
    res.then(resolve=>resolve.json()).then(resolve=>{
        // console.log(resolve);

        setUsers(resolve)

    })
    
}
// getData()
console.log(users);

  return (
    <>
    {
      users.length>0 ?
      <div>
        <table className='table table-bordered'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Phone</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map(item=>(
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.phone}</td>
                <td>
                  <User user={item}/>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      :
      <div>No users available</div>
    }

    {/* {
      opt &&
      <h1>OPT is true</h1>
    }

    {
      opt?
      <div>True Case</div>
      :
      <div>Flase case</div>
    } */}
    </>
  )
}

export default Home
