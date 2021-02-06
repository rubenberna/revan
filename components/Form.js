import { useState, useEffect } from 'react';
import { Form } from 'semantic-ui-react';
import formStyles from '../styles/Form.module.css';

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const LeadForm = () => {
  const [formState, setFormState] = useState({
    firstName: undefined,
    lastName: undefined,
    phone: undefined,
    email: undefined,
    description: undefined
  });

  const [errors, setErrors] = useState({
    email: false,
    firstName: false,
    lastName: false
  });

  const [submitted, setSubmitted] = useState(false);
  const [showMsg, setShowMsg] = useState(false);

  const handleChange = (evt) => {
    const value = evt.target.value;
    setFormState({
      ...formState,
      [evt.target.name]: value
    });
  };

  const validateEmail = () => {
    const valid = emailRegex.test(String(formState.email).toLowerCase());
    setErrors({
      ...errors,
      email: !valid
    });
  };

  const checkRequiredFields = (formData) => {
    const required = ['firstName', 'email', 'lastName'];
    const errorsObj = {};
    required.forEach(field => {
      if (!formData[field]) {
        errorsObj[field] = true;
      }
      if (field === 'email' && formState.email) {
        const valid = emailRegex.test(String(formData[field]).toLowerCase());
        errorsObj.email = !valid;
      }
    });
    setErrors(errorsObj);
  };

  const handleFocus = (field) => {
    setErrors({
      ...errors,
      [field]: false
    });
  };

  const canSubmit = (errorsState) => {
    return Object.values(errorsState).every(field => field === false);
  };

  useEffect(() => {
    if (submitted) {
      if (canSubmit(errors)) {
        setShowMsg(true)
      } else {
        setSubmitted(false)
      }
    }
  }, [submitted, errors])

  const handleSubmit = () => {
    checkRequiredFields(formState);
    setSubmitted(true);
  };

  return (
    <div className={formStyles.paper}>
      <Form className={formStyles.form}>
        <Form.Group widths="equal">
          <Form.Input fluid label="Voornaam" error={errors.firstName} onFocus={() => handleFocus('firstName')}
                      name="firstName" placeholder="Voornaam" onChange={handleChange}/>
          <Form.Input fluid label="Achternaam" error={errors.lastName} onFocus={() => handleFocus('lastName')}
                      name="lastName" placeholder="Achternaam" onChange={handleChange}/>
        </Form.Group>
        <Form.Input fluid label="Telefoon" name="phone" placeholder="Telefoon" onChange={handleChange}/>
        <Form.Input fluid label="Email" error={errors.email} name="email" placeholder="Email" onChange={handleChange}
                    onBlur={validateEmail}/>
        <Form.TextArea label="Mijn project" name="description" placeholder="Tell us more about you..."
                       onChange={handleChange}/>
        <div>
          <Form.Button color="green" onClick={handleSubmit}>Neem contact met mij op</Form.Button>
          {showMsg && <span>Dank u {formState.firstName}! We nemen spoedig contact op.</span>}
        </div>
      </Form>
    </div>
  );

};

export default LeadForm;