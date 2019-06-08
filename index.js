import Swal from 'sweetalert2'
import 'core-js/stable'

async function sayHi() {
  await Swal.fire({
    title: 'Hi from webpack!',
    text: `SweetAlert2 version: ${Swal.version}`
  })

  const {value: name} = await Swal.fire({text: 'What is your name?', input: 'text'})
  const {value: location} = await Swal.fire({text: 'Where are you from?', input: 'text'})
  await Swal.fire(`Hi ${name} from ${location}!`)
}

sayHi()
