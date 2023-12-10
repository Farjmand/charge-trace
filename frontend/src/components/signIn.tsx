// Render Prop
import { Formik, Form, Field, ErrorMessage } from 'formik';

const Basic = () => (
<div className='bg-pink'>
    <h1>Sign In</h1>
    <Formik
        initialValues={{ email: '', password: '' }}
        validate={values => {
            const errors = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
                errors.email = 'Invalid email address' as string;
            }
            return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
            }, 400);
        }}
    >
        {({ isSubmitting }) => (
            <Form>
                <div>
                    <Field className="input-field" type="email" name="email" style={{ padding: '10px' }} />
                    <ErrorMessage name="email" component="div" />
                </div>
                <div>
                    <Field className="input-field" type="password" name="password" style={{ padding: '10px' }} />
                    <ErrorMessage name="password" component="div" />
                </div>
                <button type="submit" disabled={isSubmitting}>
                    Submit
                </button>
            </Form>
        )}
    </Formik>
</div>
);

export default Basic;