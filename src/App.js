import { useRef } from 'react';
import './App.css';
import Modal from './Modal';

function App() {
  const dialog = useRef();

  const handleModal = () => {
    dialog.current.open();
  }
  return (
    <>
      <Modal ref={dialog} />
      <div className="App">
        <h3>PLEASE CLICK THE BUTTON TO SEE THE MODAL</h3>
        <button onClick={handleModal}>OPEN THE MODAL</button>
      </div>
    </>
  );
}

export default App;
