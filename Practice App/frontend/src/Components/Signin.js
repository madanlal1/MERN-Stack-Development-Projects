import {formik,useFormik} from 'formik'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
function Signin()
{

    const navigate=useNavigate()
    const formik=useFormik({
        initialValues:{Username:"",Password:""},
        onSubmit:values=>{
            axios.post(`http://localhost:8000/signin`,{Username:values.Username,Password:values.Password}).then(res=>localStorage.setItem("User",res.data))
            navigate('/products')
        }
    })
    return<>
        <form  class="form mt-5" onSubmit={formik.handleSubmit}>
        <div className="row">
            <div className="col-4 offset-4">
            <input type="text" className="form-control" name="Username" value={formik.values.Username} placeholder="Username" onChange={formik.handleChange} />
             <br/>
             </div>

            <div className="col-4 offset-4">
                <input type="password" className="form-control" name="Password" value={formik.values.Password} placeholder="Password" onChange={formik.handleChange} />
            <br/>
            </div>
            
            <div className="col-4 offset-4">
                <input type="submit" className="form-control btn-primary" value="Login"/>
            </div>
        </div>
    </form>
    </>
}
export default Signin