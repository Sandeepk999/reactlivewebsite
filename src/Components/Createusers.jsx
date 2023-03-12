import axios from "axios"
import React, { useState } from 'react'
import style from "./homepage.module.css"
import {useNavigate} from "react-router-dom"

const Createusers = () => {
    let[name,setName]=useState("")
    let[salary,setSalary]=useState("")
    let[company,setCompany]=useState("")

    let navigate= useNavigate()

    let nameData=(e)=>{
        setName(e.target.value)
    }
    let salaryData=(e)=>{
        setSalary(e.target.value)
    }
    let companyData=(e)=>{
        setCompany(e.target.value)
    }
    let formHandle=(e)=>{
        e.preventDefault()
        console.log(name,salary,company);
        let playload={name,salary,company}
        axios.post("http://localhost:3000/content",playload)
        .then(()=>{
            console.log("data has been added")
        })
        .catch(()=>{
            console.log("something is wrong")
        })
        navigate("/users")
        
    }
    return (
        <div id={style.myForm} >
            <table>
                <tr>
                    <th colspan="2"><h4>User Details</h4></th>
                </tr>
                <tr>
                    <td><label>Name</label></td>
                    <td><input type="text" value={name} onChange={nameData}/></td>
                </tr>
                <tr>
                    <td><label>Salary</label></td>
                    <td><input type="text" value={salary} onChange={salaryData} /></td>
                </tr>
                <tr>
                    <td><label>Company</label></td>
                    <td><input type="text" value={company} onChange={companyData} /></td>
                </tr>
                <tr>
                    <th colspan="2"><button onClick={formHandle}>Submit</button></th>
                </tr>
            </table>

        </div>
    )
}

export default Createusers
