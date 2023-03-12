import React, { useEffect } from 'react'
import style from "./homepage.module.css"
import { useNavigate, useParams } from 'react-router-dom'
import axios from "axios"
import { useState } from 'react'

const Editusers = () => {
    let[name,setName]=useState("")
    let[salary,setSalary]=useState("")
    let[company,setCompany]=useState("")

    let {index}=useParams()
    let navigate=useNavigate()
    console.log(index)
    useEffect(()=>{
    axios.get(`http://localhost:3000/content/${index}`)
    .then((resp)=>{
   console.log(resp.data)
   setName(resp.data.name)
   setSalary(resp.data.salary)
   setCompany(resp.data.company)
    })
    },[])
    let nameData=(e)=>{
        e.preventDefault()
        setName(e.target.value)
    }
    let salaryData=(e)=>{
        e.preventDefault()
      setSalary(e.target.value)
    }
    let companyData=(e)=>{
        e.preventDefault()
        setCompany(e.target.value)
    }
    
    let formHandle=()=>{
        let payload={name,salary,company}
        axios.put(`http://localhost:3000/content/${index}`,payload)
        .then(()=>{
            console.log("data has been updated")
        })
        navigate("/users")
    }
  return (
    <div id={style.myForm} >
    <table>
        <tr>
            <th colspan="2"><h4>Update User Details</h4></th>
        </tr>
        <tr>
            <td><label>Name</label></td>
            <td><input type="text" value={name} onChange={nameData} /></td>
        </tr>
        <tr>
            <td><label>Salary</label></td>
            <td><input type="text" value={salary} onChange={salaryData}/></td>
        </tr>
        <tr>
            <td><label>Company</label></td>
            <td><input type="text" value={company} onChange={companyData}/></td>
        </tr>
        <tr>
            <th colspan="2"><button onClick={formHandle}>Update</button></th>
        </tr>
    </table>
    </div>

  )
}

export default Editusers
