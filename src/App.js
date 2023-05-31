import { useFormik } from "formik";

const validate = (values) => {
  const errors = {}
  if (!values.name) {
    errors.name = 'Requerido'
  } else if (values.name.length < 5) {
    errors.name = 'El nombre es muy corto'
  }
  if (!values.lastname) {
    errors.lastname = 'Requerido'
  } else if (values.lastname.length < 5) {
    errors.lastname = 'El apellido es muy corto'
  }

  return errors
}
function App() {
  const formik = useFormik({
    initialValues: {
      name: '',
      lastname: '',
      email: ''
    },
    validate,
    onSubmit: values => console.log(values)
  })
  return (
    <form onSubmit={formik.handleSubmit}>
      <label>Nombre</label>
      <input name="name" type="text" onChange={formik.handleChange} value={formik.values.name} onBlur={formik.handleBlur} />
      {formik.touched.name && formik.errors.name ? <div>{formik.errors.name}</div> : null}
      <br />
      <label>Apellido</label>
      <input name="lastname" type="text" onChange={formik.handleChange} value={formik.values.lastname} onBlur={formik.handleBlur}/>
      {formik.touched.lastname && formik.errors.lastname ? <div>{formik.errors.lastname}</div> : null}
      <br />
      <label>Correo</label>
      <input name="email" type="email" onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur}/>
      {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
      <br />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default App;
