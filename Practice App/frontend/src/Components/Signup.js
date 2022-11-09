import {formik,useFormik} from 'formik'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import {AllData} from './Products'
import {useContext} from 'react'
function Signup()
{
    // const AllData=useContext(AllData)
    const navigate=useNavigate()
    const formik=useFormik({
        initialValues:{Username:"",Email:"",Password:""},
        onSubmit:values=>{
            axios.post(`http://localhost:8000/signup`,{Username:values.Username,Email:values.Email,Password:values.Password},{headers:{'Content-Type': 'application/json',
            'Authorization': localStorage.getItem("User")}}).then(res=>console.log(res.data))
            navigate('/signin')
        }
    })
    return<>
        <form  onSubmit={formik.handleSubmit}>
        <ul>
        </ul>
        <div class="row">
            <div class="col-4 offset-4">
                <input type="text" class="form-control" value={formik.values.Username} name="Username" placeholder="Username" onChange={formik.handleChange} />
                <br/>
            </div>

            <div class="col-4 offset-4">
                <input type="email" class="form-control" value={formik.values.Email} name="Email" placeholder="Email" onChange={formik.handleChange} />
                <br/>
            </div>

            <div class="col-4 offset-4">
                <input type="password" class="form-control" name="Password" value={formik.values.Password} placeholder="Password" onChange={formik.handleChange} />
                <br/>
            </div>

            <div class="col-4 offset-4">
                <input type="submit" class="form-control btn-success" value="submit"/>
            </div>
        </div>
        
    </form>

    
    </>
}
export default Signup