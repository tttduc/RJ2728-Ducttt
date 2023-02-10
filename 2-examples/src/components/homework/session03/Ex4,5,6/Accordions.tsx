import React, { useState } from 'react'


type Props = {}

const Accordions = (props: Props) => {
    const [show, setShow] = useState(false);

    const handleOpen = () =>{
      setShow(!show);
    }
    
  return (
    <>
    <div className="app">   
    <div className="accordion"> 
    <div className='accordion-header' onClick={handleOpen}>
    <div>Accordion Header</div>
    <div className='sign'>{show ? '-' : '+'}</div>
    </div>
    {show && (
      <div className='accordion-body'>
        Content.... Xiên chai gủa hấn cao xing bing chiu ling
      </div>
    )}
    </div>
    </div>
    </>
  )
}

export default Accordions;