import React,{useState,useEffect} from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const UserProfile = (props) => {
   
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [addressone, setAddressone] = useState("");
    const [addresstwo, setAddresstwo] = useState("");
    const [city, setCity] = useState("");
    const handleSubmit = (evt) => {
        evt.preventDefault();
        alert(`Submitting  ${firstname,lastname,email,addressone,addresstwo,city}`)
    }
    console.log(props.data)
    // useEffect(()=>{
        
    //    console.log(props.data)
         
    // },[])

    return (
        <div>
            <form className="d-flex row col-md-12 mt-4" onSubmit={handleSubmit}>
               <div  className="col-md-4 mb-3">
                <TextField 
                type="string"
                label="First Name"
                value={firstname}
                onChange={e => setFirstname(e.target.value)}
                name="firstname"
                />
               </div>
               <div className="col-md-4 mb-3">
               <TextField
               type="string"
               label="Name Name"
               value={lastname}
               onChange={e => setLastname(e.target.value)}
               name="lastname"
                />
               </div>
               <div className="col-md-4 mb-3">
                <TextField
                type="email"
                label="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                name="email"
                    />
               </div>
               <div className="col-md-4 mb-3">
               <TextField
               type="string"
               label="Adress1"
               value={addressone}
               onChange={e => setAddressone(e.target.value)}
               name="addressone"
                />
               </div>
               <div className="col-md-4 mb-3">
               <TextField 
               type="string"
               label="Adress2"
               value={addresstwo}
               onChange={e => setAddresstwo(e.target.value)}
               name="addresstwo"
               />
               </div>
               <div className="col-md-4 mb-4">
               <TextField 
               type="string"
               label="City"
               value={city}
               onChange={e => setCity(e.target.value)}
               name="city"
               />
               </div>
                <div className="col-md-12 d-flex justify-content-end">
                <Button type="submit" className="mr-5 mt-3" variant="contained" color="primary">
                    Submit
                </Button>
                </div>
            </form>
        </div>
    )
}

export default UserProfile
