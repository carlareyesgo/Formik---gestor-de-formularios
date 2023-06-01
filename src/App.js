import { Formik, Form, ErrorMessage } from "formik";
import TextInput from './components/TextInput'
import Checkbox from "./components/Checkbox";
import Select from "./components/Select";
import Radio from "./components/Radio";

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
  if(!values.radio){
    errors.radio = 'Requerido'
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
        color: '',
        radio: ''
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
        <br />
        <Radio name="radio" label="Opción 1" value="opcion1" />
        <Radio name="radio" label="Opción 2" value="opcion2" />
        <Radio name="radio" label="Opción 3" value="opcion3" />
        <ErrorMessage name="radio"/>
        <br />
        <button type="submit">Enviar</button>
      </Form>

    </Formik>
  );
}

export default App;
