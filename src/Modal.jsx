import {forwardRef, useImperativeHandle, useRef} from 'react'
// import './modal.css'

const Modal = forwardRef(function Modal({}, ref) {
  const reff = useRef();

  useImperativeHandle(ref, ()=>{
    return {
       open() {
         reff.current.showModal();
       }
    }
  })

  return (
    <dialog ref={reff}>
        <h2>Hello, I am the Modal</h2>
        <form method='dialog'>
            <button>Close</button>
        </form>
    </dialog>
  )
})

export default Modal