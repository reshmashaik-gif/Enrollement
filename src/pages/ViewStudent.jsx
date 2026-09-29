import React from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const ViewStudent=()=>{
    const navigate=useNavigate()
    const [student,setStudent]=useState([])
    function handleUpdate(id){
        navigate(`/updatestudent/${id}`)
    }
    function handleDelete(id){
        axios.delete(`http://localhost:3000/users/${id}`)
        .then(()=>{
            toast.success("successfully deleted")
            fetchdata()
        })
        .catch(err=>toast.error("cannot delete"))
    }
    function fetchdata(){
        axios.get("http://localhost:3000/users")
        .then(x=>setStudent(x.data))
        .catch(err=>console.log(err))
    }
    useEffect(()=>{
        fetchdata()
    },[])
    return(

        <>
        <Navbar/>
          <center><h2 style={{margin:"30px"}}>Student list</h2></center>
          <div className="parent">
                      {
            student.map((item) => {
              return (
                <div className="card" key={item.id}>
                    <h3>{item.name}</h3>
                    <h3>{item.email}</h3>
                    <h3>{item.mobile}</h3>
                    <h3>{item.department}</h3>
                    <h3>{item.course}</h3>
                    <div>
                        <button onClick={()=>{
                        handleUpdate(item.id)
                       }}>Edit</button>
                    <button onClick={()=>{
                        handleDelete(item.id)
                    }}>Delete</button>
                    </div>
                </div>
               )
           })}
          </div>
        </>
    )
}
export default ViewStudent