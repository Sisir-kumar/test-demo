import React,{useState} from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import useForm from './useForm';
const UserProfile = () => {
    const {inputs, handleInputChange, handleSubmit} = useForm({firstname:'',lastname:'',email:'',addressone:'',addresstwo:'',city:''});
  
    return (
        <div>
            <form className="d-flex row col-md-12 mt-4" onSubmit={handleSubmit}>
               <div  className="col-md-4 mb-3">
                <TextField 
                type="string"
                label="First Name"
                value={inputs.firstname}
                onChange={handleInputChange}
                name="firstname"
                />
               </div>
               <div className="col-md-4 mb-3">
               <TextField
               type="string"
               label="Name Name"
               value={inputs.lastname}
               onChange={handleInputChange}
               name="lastname"
                />
               </div>
               <div className="col-md-4 mb-3">
                <TextField
                type="email"
                label="Email"
                value={inputs.email}
                onChange={handleInputChange}
                name="email"
                    />
               </div>
               <div className="col-md-4 mb-3">
               <TextField
               type="string"
               label="Adress1"
               value={inputs.addressone}
               onChange={handleInputChange}
               name="addressone"
                />
               </div>
               <div className="col-md-4 mb-3">
               <TextField 
               type="string"
               label="Adress2"
               value={inputs.addresstwo}
               onChange={handleInputChange}
               name="addresstwo"
               />
               </div>
               <div className="col-md-4 mb-4">
               <TextField 
               type="string"
               label="City"
               value={inputs.city}
               onChange={handleInputChange}
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
