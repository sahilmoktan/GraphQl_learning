import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Signup() {
    const navigate = useNavigate()
    const [formData,setFormData] = useState({})
    
    const handleChange = (e)=>{
        setFormData({
         ...formData,
         [e.target.name]:e.target.value
        })
    
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(formData)
        navigate("/")
    }
    return (
        <div className="container my-container">
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