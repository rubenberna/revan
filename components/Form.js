import { useState, useEffect } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { server } from '../config/server';
import { useScreenSize } from '../utils/useScreenSize';
import formStyles from '../styles/Form.module.css';

const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const LeadForm = ({ position, visible }) => {
  const { width } = useScreenSize()

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
  const [loading, setLoading] = useState(false)
  const [showMsg, setShowMsg] = useState({
    type: undefined,
    message: undefined
  });

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
    setLoading(true)
    const res = await fetch(`${server}/api/leads/create`, {
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

    setLoading(false)

    if (res.status === 200) {
      setShowMsg({
        type: 'success',
        message: `Dank u ${formState.firstName}! We nemen spoedig contact op.`
      })
    } else {
      setShowMsg({
        type: 'error',
        message: `Er is iets fout gegaan`
      })
    }
  }

  useEffect(() => {
    if (submitted) {
      if (canSubmit(errors)) {
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

  const formClasses = () => {
    return position === 'right' ? formStyles.floatRight : ''
  }

  return (
    <>
      {
        visible &&
        <div className={`${formStyles.paper} ${formClasses()}` }>
          <Form className={formStyles.form}>
            {
              width > 768 ?
                <Form.Group widths="equal">
                  <Form.Input label="Voornaam" placeholder="Voornaam" {...getAttributes('firstName')}/>
                  <Form.Input label="Achternaam" placeholder="Achternaam" {...getAttributes('lastName')}/>
                </Form.Group>
                :
                <>
                  <Form.Input label="Voornaam" placeholder="Voornaam" {...getAttributes('firstName')}/>
                  <Form.Input label="Achternaam" placeholder="Achternaam" {...getAttributes('lastName')}/>
                </>
            }
            <Form.Input label="Telefoon" placeholder="Telefoon" type={'number'} {...getAttributes('phone')}/>
            <Form.Input fluid label="Email" error={errors.email && {
              content: 'Gelieve een geldig e-mailadres in te geven',
              pointing: 'below',
            }} name="email" placeholder="Email" onChange={handleChange}
                        onBlur={validateEmail}/>
            <Form.TextArea label="Mijn project" placeholder="Vertel ons meer over uw project..." {...getAttributes('description')}/>
            <div>
              <Button onClick={handleSubmit} id={formStyles.formButton} loading={loading}>
                Neem contact met mij op
              </Button>
              <div>
                {showMsg.message && <span className={formStyles[showMsg.type]}>{showMsg.message}</span>}
              </div>
            </div>
          </Form>
        </div>
      }
    </>
  );
};

export default LeadForm;