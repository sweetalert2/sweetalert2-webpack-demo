import 'core-js/stable'
import React from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

async function sayHi() {
  await Swal.fire('Hi from webpack!', `SweetAlert2 version: ${Swal.version}`)

  const {value: name} = await MySwal.fire({
    text: 'What is your name?',
    input: 'text'
  })

  const {value: location} = await MySwal.fire({
    html: <strong>Where are you from?</strong>,
    input: 'text'
  })

  await Swal.fire(`Hi ${name} from ${location}!`, '', 'success')
}

sayHi()
