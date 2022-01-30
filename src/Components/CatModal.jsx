import React,{ useState } from 'react' 
import Modal from 'react-modal';
import CatContainer from './CatContainer';

function CatModal (){

    const [modalIsOpen,setModalIsOpen] = useState(false);

    const setModalIsOpenToTrue =()=>{
        setModalIsOpen(true)
    }

    const setModalIsOpenToFalse =()=>{
        setModalIsOpen(false)
    }

    return(
        <div className='CatModal'>
            <button onClick={setModalIsOpenToTrue}>Click to Open Modal</button>

            <Modal isOpen={modalIsOpen}>
                <button onClick={setModalIsOpenToFalse}>x</button>
                <CatContainer/>

            </Modal>
        </div>
    )
}

export default CatModal;