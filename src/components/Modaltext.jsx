import React, { useState } from 'react'
import Modal from './Modal';
import "./modal.css";

const Modaltext = () => {
    const[showmodelpopup,setshowmodelpopup]=useState(false);
    const handletoggle=()=>{
        setshowmodelpopup(!showmodelpopup);
    }
  return (
    <>
        <div>
            <button onClick={handletoggle} style={{padding:"10px",marginTop:"12px",borderRadius:"10px",cursor:"pointer"}}>Open modal popup</button>
            {
                showmodelpopup && <Modal body={<div>Hello modak,this is our body</div>} footer={<h1>This is our customize footer</h1>}/>
            }
        </div>
    </>
  )
}

export default Modaltext