import { useContext } from "react";
import { GlobalContext } from "../globalContext";
import { Link } from "react-router-dom";

// Author Home Page
const Author = () => {
    const {authors, editedAuthor, removeAuthor} = useContext(GlobalContext);
    return (
        <div style={{margin:"5rem"}}>
        <h1 className="text-center mb-2">Author Management</h1>
        <table className="table table-striped bordered">
        {authors.length===0?<h2 className="text-center text-warning">No Authors added Yet</h2>:
        <>
            <thead>
            <tr>
                <th scope="col">Author Name</th>
                <th scope="col">DOB</th>
                <th scope="col">Biography</th>
                <th scope="col">Actions</th>
            </tr>
            </thead>
            <tbody>
            {authors.map((author,index) => (
                <tr key={index}>
                <td>{author.authorName}</td>
                <td>{author.dob}</td>
                <td>{author.bio}</td>
                <td>
                    <div className="d-flex">
                    <Link to={`/author/editAuthor`}>
                        <button type="button" className = "btn btn-info" onClick={()=>editedAuthor(index)}>Update</button>
                    </Link>
                    <button type="button" className = "btn btn-danger ms-2" onClick={()=>removeAuthor(index)}>Delete</button>
                    </div>
                </td>
                </tr>
            ))}          
            </tbody>
        </>
        }
        </table>

        <Link to="/author/addAuthor" className="d-grid gap-2">
            <button className="btn btn-large btn-warning fs-4">Add Author</button>
        </Link>
        </div>
    );
}

export default Author;