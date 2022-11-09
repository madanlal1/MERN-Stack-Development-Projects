import {Fragment} from 'react';
import {NavLink,Link} from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
function Navbar()
{
    return<>
        <nav class="navbar navbar-expand-sm navbar-dark bg-primary">
            <div class="container-fluid ">
                <div class="collapse navbar-collapse d-flex" id="navbarNav">
                    <ul class="navbar-nav">
                {ProtectedRoute() && (
                    <Fragment>
                    <li class="nav-item">
                        <NavLink to="/" style={{textDecoration:"none"}}  className="nav-link">Home</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink to="/signin" style={{textDecoration:"none"}} className="nav-link">Sign in</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink to="/signup" style={{textDecoration:"none"}} className="nav-link">Sign up</NavLink>
                    </li>
                    </Fragment>
                // </ul>
                )}
                {!ProtectedRoute() && (
                // <ul class="navbar-nav">
                    <Fragment>
                    <li class="nav-item">
                        <NavLink to="/" style={{textDecoration:"none"}}  className="nav-link">Home</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink to="/products" style={{textDecoration:"none"}} className="nav-link">Products</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink to="/logout" style={{textDecoration:"none"}} className="nav-link">Logout</NavLink>
                    </li>
                    </Fragment>
                )}
                </ul>
                </div>
            </div>
            </nav>
    </>
}
export default Navbar