import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import s from './ContactForm.module.css'

const ContactForm = ({ addContact }) => {
    const initialValues = { name: '', number: '' };

    const validationSchema = Yup.object({
        name: Yup.string()
            .min(3, 'Must be at least 3 characters')
            .max(50, 'Must be 50 characters or less')
            .required('Required'),
        number: Yup.string()
            .min(3, 'Must be at least 3 characters')
            .max(50, 'Must be 50 characters or less')
            .required('Required')
    });

    const handleSubmit = (values, { resetForm }) => {
        addContact(values);
        resetForm();
    };

    return (
        <div className={s.form}>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                <Form>
                    <label htmlFor="name">Name
                        <Field name="name" type="text" />
                    </label>
                    <ErrorMessage name="name" component="div" className={s.error} />

                    <label htmlFor="number">Number
                        <Field name="number" type="text" />
                    </label>
                    <ErrorMessage name="number" component="div" className={s.error} />

                    <button type="submit">Add contact</button>
                </Form>
            </Formik>
        </div>
    );
};

export default ContactForm;

