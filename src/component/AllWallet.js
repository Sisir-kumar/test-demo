import React, { useEffect ,useState} from 'react'
import {Layout} from './Element'
import Axios from "axios"
import UserList from './UserList';
import UserProfile from './UserProfile'
function AllWallet() {
    const [row, setRow] = useState([])
    useEffect(()=>{
        Axios.get("https://reqres.in/api/users")
             .then(res=>
                setRow(res.data.data))
      },[])
      console.log(row)
    return (
        <Layout>
            <div className="px-5 py-2">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">UserList</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">UserProfile</a>
                    </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab"><UserList data={row} /></div>
                    <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab"><UserProfile /></div>
                </div>
            </div>
        </Layout>
    )
}

export default AllWallet


