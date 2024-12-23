import React from 'react'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import withReactContent from 'sweetalert2-react-content'
import './styles.scss'

const ReactSwal = withReactContent(Swal)

const ReactSwalWithInput = ReactSwal.mixin({
  input: 'text',
  confirmButtonText: <i>OK</i>,
})

async function sayHi() {
  await ReactSwal.fire(<i>Hi from webpack! 🙂</i>, `SweetAlert2 version: ${Swal.version}`)

  const { value: name } = await ReactSwalWithInput.fire({
    text: 'What is your name?',
  })

  const { value: location } = await ReactSwalWithInput.fire({
    html: <strong>Where are you from?</strong>,
  })

  await Swal.fire(`Hi ${name} from ${location}!`, '', 'success')
}

sayHi()
