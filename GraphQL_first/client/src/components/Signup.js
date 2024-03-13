import { useMutation } from '@apollo/client'
import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import {SIGNUP_USER} from '../graphqlOpe/mutations'

export default function Signup() {
    // const navigate = useNavigate()
    const [formData,setFormData] = useState({})
    const [signupUser,{data,loading,error}] = useMutation(SIGNUP_USER)
    
    if(loading) return <h1>Loading</h1>
    const handleChange = (e)=>{
        setFormData({
         ...formData,
         [e.target.name]:e.target.value
        })
    
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        // console.log(formData)
        signupUser({
            variables:{
                userNew:formData
            }
        })
        // navigate('/login')
    }
    return (
        <div className="container my-container">

            {
                error && 
                <div className="red card-panel">{error.message}</div>
            }
            {
                data && data.user &&
                <div className="green card-panel">{data.user.firstName} is SignedUp. Now login</div>
            }
            <h5>Signup!!</h5>
            <form onSubmit={handleSubmit}>
                <input
                 type="text"
                 placeholder="FirstName"
                 name="firstName"
                 onChange={handleChange}
                 required
                 />
                <input
                 type="text"
                 placeholder="LastName"
                 name="lastName"
                 onChange={handleChange}
                 required
                 />
                <input
                 type="email"
                 placeholder="email"
                 name="email"
                 onChange={handleChange}
                //  onChange={(e)=>handleChange(e)} non-optmize way
                 required
                 />
                <input
                 type="password"
                 placeholder="password"
                 name="password"
                 onChange={handleChange}
                 required
                 />
                  <Link to="/login"><p>Already have account ?</p></Link>
                 <button className="btn #673ab7 deep-purple" type="submit">Signup</button>
            </form>
        </div>
    )
}