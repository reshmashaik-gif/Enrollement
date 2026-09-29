import React from "react";
import Navbar from "../components/Navbar";
import { useState ,useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const UpdateStudent=()=>{
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [mobile,setMobile]=useState("")
    const [department,setDepartment]=useState("")
    const [course,setCourse]=useState("")
    let {id}=useParams()
    const navigate=useNavigate()
    useEffect(()=>{
        axios(`http://localhost:3000/users/${id}`)
        .then((x)=>{
            setName(x.data.name)
            setEmail(x.data.email)
            setMobile(x.data.mobile)
            setDepartment(x.data.department)
            setCourse(x.data.course)

        })

    },[])
    function handleupdate(e){
        e.preventDefault()
        const newData={name,email,mobile,department,course}
        axios.put(`http://localhost:3000/users/${id}`,newData)
        .then(()=>{
            toast.success("updated successfully")
            console.log("hiiii")
            navigate("/viewstudent")
        })
        .catch(err=>toast.error("cannot update"))
    }
    return(
        <>
        <Navbar/>
        <center><h1>Update Student</h1></center>
        <center>
             <form>
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
            <button onClick={handleupdate}>Update</button>
            
            </form>
        </center>
        </>
    )
}
export default UpdateStudent