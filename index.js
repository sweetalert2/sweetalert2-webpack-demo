import swal from 'sweetalert2'

async function sayHi() {
  await swal({
    title: 'Hi from webpack!',
    text: `SweetAlert2 version: ${swal.version}`,
    imageUrl: 'https://webpack.js.org/assets/icon-square-big.svg',
    imageWidth: 300
  })

  const {value: name} = await swal({text: 'What is your name?', input: 'text'})
  const {value: location} = await swal({text: 'Where are you from?', input: 'text'})
  await swal(`Hi ${name} from ${location}!`)
}

sayHi()
