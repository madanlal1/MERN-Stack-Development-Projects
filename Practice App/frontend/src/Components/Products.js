import { useEffect,useState } from "react"
import axios from "axios"
import {Navigate, useNavigate} from 'react-router-dom';
import { createContext } from "react";
const AllData=createContext()
function Products()
{
    
    const [data,setData]=useState([])
    const [data1,setData1]=useState([])
    const navigate=useNavigate()
    useEffect(()=>{
        axios.get(`http://localhost:8000/products`,{headers:{'Content-Type': 'application/json',
        'Authorization': localStorage.getItem("User")}}).then(res=>setData(res.data))
    },[])
    return<>
        <div class="row d-flex justify-content-center mt-5">
    <div class="col-6">
    <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Operation</th>
          </tr>
        </thead>
        <tbody>
            {data.map((itm,index)=>{
                return(
                <tr>
                    <th>{index+1}</th>
                    <td>{itm.Username}</td>
                    <td>{itm.Email}</td>
                    <td>
                         <button class="btn btn-danger me-2" onClick={()=>{
                            console.log("hello")
                            axios.get(`http://localhost:8000/delete/${itm._id}`,{headers:{'Content-Type': 'application/json',
                            'Authorization': localStorage.getItem("User")}}).then(res=>setData(res.data))

                         }}>  Delete</button>
                         <button class="btn btn-warning" onClick={()=>{
                            
                            navigate('/update/'+itm._id)
                         }}>  Update</button>
                     </td>
                </tr>
                )
            })}
        </tbody>
      </table>
      </div>
      </div>
    </>
}
export default Products
export {AllData}