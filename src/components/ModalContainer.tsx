import Modal from "./Modal/Modal";
import { useState } from "react";
const ModalContainer = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <button className="bg-blue-200" onClick={() => setOpen(true)}>
        Open
      </button>
      {isOpen && (
        <Modal onClose={() => setOpen(false)}>
          <div className="h-[300px]">This is cool1</div>
          <div className="h-[300px]">This is cool2</div>
          <div className="h-[300px]">This is cool3</div>
          <div className="h-[300px]">This is cool4</div>
          <div className="h-[300px]">This is cool5</div>
        </Modal>
      )}
    </>
  );
};

export default ModalContainer;
