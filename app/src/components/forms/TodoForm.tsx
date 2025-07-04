import React from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";

interface IValue {
    description: string;
}

export const TodoForm: React.FC = () => {
    const initialValues: IValue = {
        description: ''
    };

    const onSubmit = (values: IValue) => {
        console.log('Form submitted with values:', values);
    }

    return (
        <div>
            <Formik initialValues={initialValues} onSubmit={onSubmit}>
                <Form>
                    <div>
                        <Field name='description' id='description' />
                        <ErrorMessage name='description' />
                    </div>
                    <button type="submit">Add Todo</button>
                </Form>
            </Formik>
        </div>
    );
};
