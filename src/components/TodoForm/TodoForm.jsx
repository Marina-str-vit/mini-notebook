import s from "./TodoForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import { nanoid } from "nanoid";

export default function TodoForm({ onAdd }) {
  const fieldId = useId();

  const initialValues = {
    text: '',
  };

  const applySchema = Yup.object().shape({
    text: Yup.string()
      .min(3, 'Too Short!')
      .max(250, 'Too Long!'),
  });
  
  const handleSubmit = (values, actions) => {
    if (!values.text.trim()) {
      return;
    }
    onAdd({ id: nanoid(), ...values }, {actions});
    actions.resetForm();   
  };

  return (
    <section className={s.formWrapper}>
    <Formik
      initialValues={initialValues}
      validationSchema={applySchema}
      onSubmit={handleSubmit}
    >{() => (
      <Form className={s.form}>
        <div className={s.formFields}>
          <label htmlFor={`${fieldId}-text`}></label>
          <Field
            className={s.input}
            type="text"
            name="text"
            id={`${fieldId}-text`}
            autoFocus
            placeholder="What do you want to write?"
          />
          <ErrorMessage className={s.error} name="text" component="div" />
        </div>
          <button className={s.btnAdd} type="submit">
            Add todo
          </button>
      </Form>
    )}
    </Formik>
    </section>
  );
}
