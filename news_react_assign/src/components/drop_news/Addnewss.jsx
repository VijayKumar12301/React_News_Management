import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './AddNewss.css'; // Import the custom styles
import { addNews } from '../../service/news';

const AddNewss = () => {
    const initialValues = {
        category: '',
        title: '',
        content: '',
        source: ''
    };

    const validationSchema = Yup.object({
        category: Yup.string().required('Category is required'),
        title: Yup.string().required('Title is required'),
        content: Yup.string().required('Content is required'),
        source: Yup.string().required('Source is required')
    });

    const handleSubmit = (values) =>{
        // Handle form submission logic here
        console.log(values);
        addNews(values)
            .then((response) => {
                console.log(response);
                alert('News added successfully');
            })
            .catch((error) => {
                console.error(error);
                alert('Failed to add news');
            });
        
    };

    return (
        <div className="container d-flex justify-content-center">
            <div className="table-responsive p-3">
                <h2 className="text-center mb-4">Add News</h2>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    <Form>
                        <table className="table table-bordered">
                            <tbody>
                                <tr>
                                    <td><label htmlFor="category">News Category</label></td>
                                    <td>
                                        <Field
                                            type="text"
                                            id="category"
                                            name="category"
                                            className="form-control"
                                        />
                                        <ErrorMessage name="category" component="div" className="error" />
                                    </td>
                                </tr>

                                <tr>
                                    <td><label htmlFor="title">News Title</label></td>
                                    <td>
                                        <Field
                                            type="text"
                                            id="title"
                                            name="title"
                                            className="form-control"
                                        />
                                        <ErrorMessage name="title" component="div" className="error" />
                                    </td>
                                </tr>

                                <tr>
                                    <td><label htmlFor="content">News Content</label></td>
                                    <td>
                                        <Field
                                            as="textarea"
                                            id="content"
                                            name="content"
                                            className="form-control"
                                            rows="4"
                                        />
                                        <ErrorMessage name="content" component="div" className="error" />
                                    </td>
                                </tr>

                                <tr>
                                    <td><label htmlFor="source">News Source</label></td>
                                    <td>
                                        <Field
                                            type="text"
                                            id="source"
                                            name="source"
                                            className="form-control"
                                        />
                                        <ErrorMessage name="source" component="div" className="error" />
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <button type="submit" className="btn btn-primary w-100 mt-3">
                            Submit
                        </button>
                    </Form>
                </Formik>
            </div>
        </div>
    );
};

export default AddNewss;
