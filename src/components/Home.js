import { Link } from "react-router-dom";

// Home Page 
const Home = () => {
    return (
       <div className="container-fluid text-center mt-4">
        <div className="d-flex flex-column justify-content-center align-items-center">
            <div className="col-sm-6 m-4">
                <Link to="/books">
                    <div className="p-4 m-4 border border-success-subtle bg-success-subtle">
                        <h4>Book Management</h4>
                    </div>              
                </Link>
            </div>
            <div className="col-sm-6 m-4">
                <Link to="/author">
                    <div className="p-4 m-4 border border-success-subtle bg-success-subtle">
                        <h4>Author Management</h4>
                    </div>                
                </Link>
            </div>
        </div>
       </div>
    )
}

export default Home;