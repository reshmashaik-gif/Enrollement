import React from "react";
import Home from "./pages/Home";
import AddStudent from "./pages/AddStudent";
import { Route,Routes } from "react-router-dom";
import ViewStudent from "./pages/ViewStudent";
import UpdateStudent from "./pages/UpdateStudent";
const App=()=>{

  return(
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
    <Routes>
      <Route path="/addstudent" element={<AddStudent/>}/>
    </Routes>
   <Routes>
    <Route path="/viewstudent" element={<ViewStudent/>}/>
   </Routes>
   <Routes>
      <Route path="/updatestudent/:id" element={<UpdateStudent/>}/>
   </Routes>
    </>
  )
}
export default App