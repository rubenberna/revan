import { useState, useEffect } from 'react';
import { Form } from 'semantic-ui-react';
import formStyles from '../styles/Form.module.css';
import { server } from '../config/server';

const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const LeadForm = ({ position }) => {
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
    lastName: false,
    phone: false,
    description: false
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
    const valid = EMAIL_REGEX.test(String(formState.email).toLowerCase());
    setErrors({
      ...errors,
      email: !valid
    });
  };

  const checkRequiredFields = (formData) => {
    const required = Object.keys(formData);
    const errorsObj = {};
    required.forEach(field => {
      if (!formData[field]) {
        errorsObj[field] = true;
      }
      if (field === 'email' && formState.email) {
        const valid = EMAIL_REGEX.test(String(formData[field]).toLowerCase());
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

  const createLead = async (formState) => {
    return fetch(`${server}/api/leads/create`, {
      method: 'POST',
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(formState)
    })
  }

  useEffect(() => {
    if (submitted) {
      if (canSubmit(errors)) {
        setShowMsg(true)
        createLead(formState)
      } else {
        setSubmitted(false)
      }
    }
  }, [submitted, errors, formState])

  const handleSubmit = async () => {
    checkRequiredFields(formState);
    setSubmitted(true);
  };

  const getAttributes = (name) => {
    return {
      error: errors[name],
      onFocus: () => handleFocus(name),
      name,
      onChange: handleChange
    }
  }

  const formPosition = position === 'right' ?
    {
      position: 'absolute',
      right: '50px',
      bottom: '5px'
    } : {};


  return (
    <div className={formStyles.paper} style={formPosition}>
      <Form className={formStyles.form}>
        <Form.Group widths="equal">
          <Form.Input label="Voornaam" placeholder="Voornaam" fluid {...getAttributes('firstName')}/>
          <Form.Input label="Achternaam" placeholder="Achternaam" fluid {...getAttributes('lastName')}/>
        </Form.Group>
        <Form.Input label="Telefoon" placeholder="Telefoon" fluid {...getAttributes('phone')}/>
        <Form.Input fluid label="Email" error={errors.email && {
          content: 'Gelieve een geldig e-mailadres in te geven',
          pointing: 'below',
        }} name="email" placeholder="Email" onChange={handleChange}
                    onBlur={validateEmail}/>
        <Form.TextArea label="Mijn project" placeholder="Vertel ons meer over uw project..." fluid {...getAttributes('description')}/>
        <div>
          <Form.Button color="green" onClick={handleSubmit}>Neem contact met mij op</Form.Button>
          {showMsg && <span>Dank u {formState.firstName}! We nemen spoedig contact op.</span>}
        </div>
      </Form>
    </div>
  );
};

export default LeadForm;