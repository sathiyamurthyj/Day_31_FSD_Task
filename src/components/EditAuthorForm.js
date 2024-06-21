import { Formik } from "formik";
import * as Yup from "yup";
import { useContext } from "react";
import { GlobalContext } from "../globalContext";
import { useNavigate } from "react-router-dom";

// yup form validation
const addAuthorSchema = Yup.object().shape({
    authorName: Yup.string().required("Author Name is Required").min(3,"Author Name must be atleast 3 characters"),
    dob: Yup.date().required("Date of Birth is required"),
    bio: Yup.string().required("Biography of Author required").min(20,"Bio must be atleast 20 characters").max(100, "Bio must not exceed 100 characters")
});

// formik form handling for edit author
const EditAuthorForm = () => {
    const {authors,editAuthor,updateAuthor} = useContext(GlobalContext);
    const data = authors[editAuthor];
    const history = useNavigate();
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <Formik
                        initialValues={
                            data
                    }
                    validationSchema={addAuthorSchema}
                    onSubmit={(values,{setSubmitting,resetForm}) => {
                        updateAuthor(values);
                        setSubmitting(false)
                        resetForm()
                        history("/author")
                        }
                    }
                    >
                        {({ values, errors, touched, handleChange,handleSubmit,handleBlur, isSubmitting }) => (
                            <div className="row">
                                <div className="col-auto">
                                    <h1>Edit Author Form</h1>
                                    <form onSubmit={handleSubmit}>
                                        <div className="mb-3">
                                            <label htmlFor="authorName" className="form-label">Author Name</label>
                                            <input 
                                            type="text" 
                                            name="authorName" 
                                            placeholder="Enter Author Name" className="form-control"
                                            value={values.authorName}
                                            onChange={handleChange}
                                            onBlur={handleBlur} />
                                            {errors.authorName&&touched.authorName&&<div className="text-danger">{errors.authorName}</div>}
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="dob" className="form-label">Date of Birth</label>
                                            <input 
                                            type="date" 
                                            name="dob" 
                                            placeholder="Enter Date of Birth" className="form-control"
                                            value={values.dob}
                                            onChange={handleChange}
                                            onBlur={handleBlur} />
                                            {errors.dob&&touched.dob&&<div className="text-danger">{errors.dob}</div>}
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="bio" className="form-label">Author Biography</label>
                                            <textarea
                                            rows="3"
                                            name="bio" 
                                            placeholder="Enter Author Biography" className="form-control"
                                            value={values.bio}
                                            onChange={handleChange}
                                            onBlur={handleBlur} />
                                            {errors.bio&&touched.bio&&<div className="text-danger">{errors.bio}</div>}
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

export default EditAuthorForm;