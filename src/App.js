import { Formik, Form } from "formik";
import TextInput from './components/TextInput'
import Checkbox from "./components/Checkbox";
import Select from "./components/Select";

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
  return (
    <Formik
      initialValues={{
        name: '',
        lastname: '',
        email: '',
        color: ''
      }}
      validate={validate}
      onSubmit={values => console.log(values)}
    >

      <Form>
        <TextInput name="name" label="Nombre" />
        <br />
        <TextInput name="lastname" label="Apellido" />
        <br />
        <TextInput name="email" label="Correo" />
        <br />
        <Select name="color" label="Color">
          <option value="">Seleccione color</option>
          <option value="rosa">Rosa</option>
          <option value="amarillo">Amarillo</option>
          <option value="blanco">Blanco</option>
        </Select>
        <br />
        <Checkbox name="accept">
          Aceptar términos y condiciones
        </Checkbox>
        <button type="submit">Enviar</button>
      </Form>

    </Formik>
  );
}

export default App;
