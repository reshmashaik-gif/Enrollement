import React from "react";
import Navbar from "../components/Navbar";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const AddStudent=()=>{
    const navigate=useNavigate()
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [mobile,setMobile]=useState("")
    const [department,setDepartment]=useState("")
    const [course,setCourse]=useState("")
    function handleform(e){
        e.preventDefault()
        const data={name,email,mobile,department,course}
        axios.post("http://localhost:3000/users",data)
        .then(()=>{
            toast.success("Added successfully")
            setName("")
            setEmail("")
            setMobile("")
            setDepartment("")
            setCourse("")
            navigate("/viewstudent")
        }
        )
        .catch((err)=>{
            toast.error("Failed to Add")
        })
    }
    return(
        <>
        <Navbar/>
        <center>
            <h2>Add Student</h2>
            <form onSubmit={handleform}>
            <input 
            type="text" 
            placeholder="Enter a name" 
            required 
            value={name}
            onChange={(e)=>{
                setName(e.target.value)
            }}
            />
            <br></br>
            <input 
            type="text" 
            placeholder="enter email" 
            required 
            value={email}
            onChange={(e)=>{
                setEmail(e.target.value)
            }}
            />
            <br></br>
            <input 
            type="text" 
            placeholder="enter a phone number" 
            required
             value={mobile}
             onChange={(e)=>{
                setMobile(e.target.value)
             }}
            />
            <br/>
            <input 
            type="text" 
            placeholder="enter a dept name" 
            required 
             value={department}
             onChange={(e)=>{
                setDepartment(e.target.value)
             }}
            />
            <br/>
            <input 
            type="text" 
            placeholder="enter a course" 
            required 
             value={course}
             onChange={(e)=>{
                setCourse(e.target.value)
             }}
            />
            <br/><br/>
            <button type="submit">Add</button>
            
            </form></center>
        </>
        
    )
}
export default AddStudent