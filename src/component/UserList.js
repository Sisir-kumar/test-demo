import React,{useEffect,useState}from 'react'

import Table from 'react-bootstrap/Table';
const UserList = (props) => {
      
      const {data,handleChange} =props
    return (
        <div className="table_border mt-4 mx-5">
           <Table>
                  <thead>
                    <tr>
                        <td className="text-secondary">ID</td>
                        <td className="text-secondary">First Name</td>
                        <td className="text-secondary">Last Name</td>
                        <td className="text-secondary">Email</td>
                        <td className="text-secondary">Avatar</td>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map(a=><tr key={a.id} onClick={()=>handleChange(a)}>
                        <td >{a.id}</td>
                        <td>{a.first_name}</td>
                        <td>{a.last_name}</td>
                        <td>{a.email}</td>
                        <td><img src={a.avatar} width="40" className="rounded-circle" alt="avatar"/></td>
                        
                    </tr>)}
                    </tbody>
                </Table>
        </div>
    )
}

export default UserList

