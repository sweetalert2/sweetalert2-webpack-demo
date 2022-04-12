import React from 'react'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import withReactContent from 'sweetalert2-react-content'
import { Formik, Form, Field, FormikProps, FormikBag, FormikErrors } from 'formik'

const swal2Formik = async () => {
  const ReactSwal = withReactContent(Swal)

  type FormValues = { location: string }
  let formikRef: FormikProps<FormValues>

  const { value: location } = await ReactSwal.fire({
    title: 'Where are you from?',
    html: (
      <Formik<FormValues>
        innerRef={(ref) => (formikRef = ref)}
        initialValues={{ location: '' }}
        validate={(values) => {
          const errors: FormikErrors<FormValues> = {}
          if (!values.location) {
            errors.location = 'Required'
          }
          return errors
        }}
        onSubmit={() => {}}
      >
        <Form>
          <Field
            type="text"
            className="swal2-input"
            name="location"
            onKeyPress={(event: React.KeyboardEvent<HTMLInputElement>) =>
              event.key === 'Enter' && ReactSwal.clickConfirm()
            }
          />
        </Form>
      </Formik>
    ),
    didOpen: () => {
      Swal.getPopup().querySelector('input')?.focus()
    },
    preConfirm: async () => {
      await formikRef.submitForm()
      if (formikRef.isValid) {
        return formikRef.values.location
      } else {
        Swal.showValidationMessage(JSON.stringify(formikRef.errors))
      }
    },
  })

  return location
}

export default swal2Formik
