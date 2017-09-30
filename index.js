import swal from 'sweetalert2/dist/sweetalert2.all.min.js'

swal({
  title: 'Hi from webpack!',
  text: `SweetAlert2 version: ${swal.version}`,
  imageUrl: 'https://webpack.js.org/assets/icon-square-big.svg',
  imageWidth: 300
}).catch(swal.noop)
