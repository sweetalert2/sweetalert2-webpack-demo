import swal from 'sweetalert2'
import './styles.scss'

swal('Hi from webpack!', `SweetAlert2 version: ${swal.version}`)
  .catch(swal.noop)
