// jab bhi hum koi modal popup tooltip create karte hein to jab yai open ho to un k pechay k jitne bhi elements hein access able nahi hon un par tab se focus nahi jana chahiyay. hamesha body k immediate child mein usko add karn chahiyay. is liyay hum ko createPortal use karna chahiyay jo humaray comp ko teleport kardeta hai from deep nested child from current position to the body immediate body closing or opening tag or any where we want.
import { useState, React, useEffect, useRef, memo, useMemo, useCallback } from 'react'
import { createPortal } from 'react-dom';
const CustomModal = ()=> {
    const [showDialog, setShowDialog] = useState(false);
    const handleClose = ()=> {
        setShowDialog(false);
    };
    const handleShow = ()=> {
        setShowDialog(true);
    };
    return (
        <>
        <button className="btn btn-primary" onClick={handleShow}>
            Launch demo modal
        </button>
        {/* its need two arg 1 is what is want to teleport and 2nd where to teleport and 3rd is optional ID jo id hum is mein dete hein wo uski key banjati hai*/}
        {showDialog && createPortal(<div onClick={handleClose} style={{position:'fixed', background:'rgb(0 0 0 / 0.2)',color:'#fff', inset:'0',height:'100%', width: '100%',display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column', zIndex: '9999999'}}>
            <div style={{background:'#fff',color:'#000', inset:'0',height:'50vh', width: '50vw',display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
                <h1>my modal box</h1>
            </div>
        </div>,document.body)}
        </>
    )
}