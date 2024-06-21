import { Formik } from "formik";
import * as Yup from "yup";
import { useContext } from "react";
import { GlobalContext } from "../globalContext";
import { useNavigate } from "react-router-dom";

// yup validation schema
const addBookSchema = Yup.object().shape({
    title: Yup.string().required("Title is Required").min(6,"Title must be atleast 6 characters"),
    author: Yup.string().required("Author Name is Required").min(3,"Author Name must be atleast 3 characters"),
    isbn: Yup.string().required("ISBN Number required without hyphen").length(13,"ISBN must be 13 digit number"),
    publicationDate: Yup.date().required("Date is required"),
});

// Formik form handling for edit book
const EditBookForm = () => {
    const {books,editBook,updateBook} = useContext(GlobalContext);
    const data = books[editBook];
    const history = useNavigate();

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <Formik
                        initialValues={
                            data
                        }                        
                        validationSchema={addBookSchema}
                        onSubmit={(values,{setSubmitting,resetForm}) => {
                            updateBook(values);
                            setSubmitting(false)
                            resetForm()
                            history("/books")
                            }
                    }
                    >
                        {({ values, errors, touched, handleChange,handleSubmit,handleBlur, isSubmitting }) => (
                            <div className="row">
                                <div className="col-auto">
                                    <h1>Edit Book Form</h1>
                                    <form onSubmit={handleSubmit}>
                                        <div className="mb-3">
                                            <label htmlFor="title" className="form-label">Title</label>
                                            <input 
                                            type="text" 
                                            name="title" 
                                            placeholder="Enter Title" className="form-control"
                                            value={values.title}
                                            onChange={handleChange}
                                            onBlur={handleBlur} />
                                            {errors.title&&touched.title&&<div className="text-danger">{errors.title}</div>}
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="author" className="form-label">Author Name</label>
                                            <input 
                                            type="text" 
                                            name="author" 
                                            placeholder="Enter Author Name" className="form-control"
                                            value={values.author}
                                            onChange={handleChange}
                                            onBlur={handleBlur} />
                                            {errors.author&&touched.author&&<div className="text-danger">{errors.author}</div>}
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="isbn" className="form-label">ISBN</label>
                                            <input 
                                            type="text" 
                                            name="isbn" 
                                            placeholder="Enter ISBN" className="form-control"
                                            value={values.isbn}
                                            onChange={handleChange}
                                            onBlur={handleBlur} />
                                            {errors.isbn&&touched.isbn&&<div className="text-danger">{errors.isbn}</div>}
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="publicationDate" className="form-label">Publication Date</label>
                                            <input 
                                            type="date" 
                                            name="publicationDate" 
                                            placeholder="Enter Publication Date" className="form-control"
                                            value={values.publicationDate}
                                            onChange={handleChange}
                                            onBlur={handleBlur} />
                                            {errors.publicationDate&&touched.publicationDate&&<div className="text-danger">{errors.publicationDate}</div>}
                                        </div>
                                        <button type="submit" className="btn btn-primary">Update</button>
                                    </form>                     
                                </div>
                            </div>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    )
}

export default EditBookForm;