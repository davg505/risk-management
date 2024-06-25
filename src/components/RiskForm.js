import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

const RiskForm = ({ onSubmit }) => {
  const validationSchema = Yup.object({
    riskName: Yup.string().required('Required'),
    probability: Yup.number().min(0).max(1).required('Required'),
    impact: Yup.number().min(1).max(5).required('Required')
  });

  return (
    <Formik
      initialValues={{ riskName: '', probability: '', impact: '' }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <div>
        <label htmlFor="riskName">Nome do risco</label>
          <Field name="riskName" type="text" />
          <ErrorMessage name="riskName" component="div" />
        </div>
        <div>
        <label htmlFor="probability">Probabilidade (0 to 1)</label>
        <p>Probabilidade é a probabilidade de o risco ocorrer, variando de 0 (impossível) a 1 (certo).</p>
          <Field name="probability" type="number" step="0.01" />
          <ErrorMessage name="probability" component="div" />
        </div>
        <div>
        <label htmlFor="impact">Impacto (1 to 5)</label>
        <p>Impacto é a gravidade potencial do risco, variando de 1 (baixo) a 5 (alto).</p>
          <Field name="impact" type="number" />
          <ErrorMessage name="impact" component="div" />
        </div>
        <button type="submit">Add Risk</button>
      </Form>
    </Formik>
  );
};

export default RiskForm;















