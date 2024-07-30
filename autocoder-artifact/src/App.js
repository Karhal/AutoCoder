import React, { useState } from 'react';
import Button from './components/Button';
import Modal from './components/Modal';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button text='Open Modal' onClick={() => setIsOpen(true)} />
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2>This is a modal</h2>
      </Modal>
    </div>
  );
};

export default App;
