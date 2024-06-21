import { useContext } from "react";
import { GlobalContext } from "../globalContext";
import { Link } from "react-router-dom";

// Books Home page to manage CRUD operations
const Books = () => {
    const {books, editedBook, removeBook} = useContext(GlobalContext);
    return (
        <div style={{margin:"5rem"}}>
        <h1 className="text-center mb-2">Book Management</h1>
        <table className="table table-striped bordered mt-4">
        {books.length===0?<h2 className="text-center text-warning">No Books in Library</h2>:
        <>
            <thead>
            <tr>
                <th scope="col">Title</th>
                <th scope="col">Author</th>
                <th scope="col">ISBN</th>
                <th scope="col">Publication Date</th>
                <th scope="col">Actions</th>
            </tr>
            </thead>
            <tbody>
            {books.map((book,index) => (
                <tr key={index}>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.isbn}</td>
                <td>{book.publicationDate}</td>
                <td>
                    <div className="d-flex">
                    <Link to={`/books/editBook`}>
                        <button type="button" className = "btn btn-info" onClick={()=>editedBook(index)}>Update</button>
                    </Link>
                    <button type="button" className = "btn btn-danger ms-2" onClick={()=>removeBook(index)}>Delete</button>
                    </div>
                </td>
                </tr>
            ))}          
            </tbody>
        </>
        }
        </table>

        <Link to="/books/addBook" className="d-grid gap-2">
            <button className="btn btn-large btn-warning fs-4">Add Book</button>
        </Link>
        </div>
    );
}

export default Books;