import s from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import { nanoid } from "nanoid";

export default function ContactForm({ onAdd }) {
  const fieldId = useId();

  const initialValues = {
    name: '',
    number: '',   
  };
  const onlyLetters = /^[A-Za-zА-Яа-яЄєІіЇїҐґ-\s]+$/;

  const applySchema = Yup.object().shape({
    name: Yup.string()
      .required('Required')
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .matches(onlyLetters, 'Only Letters')
      .trim(),
    number: Yup.number()
      .required('Required')
  });

  const handleSubmit = (values, actions) => {
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
          <label htmlFor={`${fieldId}-name`}>Name</label>
          <Field
            className={s.input}
            type="text"
            name="name"
            id={`${fieldId}-name`}
          />
          <ErrorMessage className={s.error} name="name" component="div" />
        </div>

        <div className={s.formFields}>
          <label htmlFor={`${fieldId}-number`}>Number</label>
          <Field
            className={s.input}
            type="tel"
            name="number"
            id={`${fieldId}-number`}
          />
          <ErrorMessage className={s.error} name="number" component="div" />
        </div>
          <button className={s.btnAdd} type="submit">
          Add contact
        </button>
      </Form>
    )}
    </Formik>
    </section>
  );
}
