import React, { useEffect ,useState} from 'react'
import {Layout} from './sidebar/Element'
import Axios from "axios"
import UserList from './UserList';
import UserProfile from './UserProfile'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
function AllWallet() {
    const [row, setRow] = useState([])
    const [key, setKey] = useState('home');
    const [data, setdata] = useState([])
    useEffect(()=>{
        Axios.get("https://reqres.in/api/users")
             .then(res=>
                setRow(res.data.data))
      },[])
      const handleCleck = (a)=>{
        setdata(a)
         setKey("profile")
      }
    return (
        <Layout>
             <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                >
                <Tab eventKey="home" title="UserList">
                    <UserList data={row} handleChange={handleCleck}/>
                </Tab>
                <Tab eventKey="profile" title="UserProfile">
                   <UserProfile data={data} />
                </Tab>
            </Tabs>
        </Layout>
    )
}

export default AllWallet


