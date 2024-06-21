import { NavLink, Outlet } from "react-router-dom";


// Side Navigation Bar for Dashboard
const SideNavBar = () => {


    return ( 
        <>
            <div className="container-fluid">
                <div className="row flex-no-wrap">
                    <div className="col-md-3 col-xl-2 bg-dark">
                        <div className="d-flex flex-column align-items-center text-white min-vh-100">
                            <h4>Library Dashboard</h4>
                            <ul className="nav flex-column align-items-center">
                                <li className="nav-item">
                                    <NavLink to="/" className="nav-link" style={({ isActive }) => ({color: isActive? "greenyellow": "white"})}>Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/books" className="nav-link" style={({ isActive }) => ({color: isActive? "greenyellow": "white"})}>Books</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/author" className="nav-link" style={({ isActive }) => ({color: isActive? "greenyellow": "white"})}>Author</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-auto col-md-9 col-xl-10 min-vh-100">
                        <Outlet />
                    </div>
                </div>                    
            </div>        
        </>
    )
}

export default SideNavBar;