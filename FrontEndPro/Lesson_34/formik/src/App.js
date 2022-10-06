import { Formik, Form as FormikForm, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import SaveButton from "./SaveButton";

const FORM_VALIDATION_SCHEMA = {
  name: Yup.string()
    .required('Name required')
    .min(3, 'Name lenth must be > 2 symbols.'),
  email: Yup.string().required('Email required').email('Email format required'),
  telNumber: Yup.string().required('Telephone required').matches(/^[0-9]{12}$/, '12 symbols required')
};

export default function App() {

  function onSubmit(values) {
    alert(JSON.stringify(values, null, 2));
  }
    
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        telNumber: '',
      }}
      validationSchema={Yup.object(FORM_VALIDATION_SCHEMA)}
      onSubmit={onSubmit}
    >
      <FormikForm>
        <label htmlFor="name">Имя<br/>
        <Field type="text" name="name" id='name' placeholder="Name" />
        <ErrorMessage name="name" /><br/>
        </label> <br/>

        <label htmlFor="email">Email<br/>
        <Field type="email" name="email" id='email' placeholder="Example123@gmail.com" />
        <ErrorMessage name="email" /><br/>
        </label> <br/>

        <label htmlFor="telNumber">Tel Number<br/>
        <Field type="tel" name="telNumber" id='telNumber' placeholder="123456123456" />
        <ErrorMessage name="telNumber" /><br/>
        </label> <br/><br/>
        
        <SaveButton />
      </FormikForm>
    </Formik>
  )
}