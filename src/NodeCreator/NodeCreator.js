import {useState} from 'react';


function NodeCreator(props) {
    
    const [tempNodeName, setTempNodeName] = useState("nihil");
    const [tempNodeDate, setTempNodeDate] = useState("2000-01-01");
    const [tempNodeDesc, setTempNodeDesc] = useState("But there was nothing there...");

    return(

        <div className='modal is-active'>
        <div className='modal-background'></div>
        <div className='card'>
            <div className='card-content'>
                <div className='content'>
                    <label className='label'>Name</label>
                    <input className='input has-background-light has-text-black' name="name" value={tempNodeName} onChange={e => setTempNodeName(e.target.value)}></input>
                    <label className='label'>Date</label>
                    <input className='input has-background-light has-text-black' type="date" name="date" value={tempNodeDate} onChange={e => setTempNodeDate(e.target.value)}></input>
                    <label className='label'>Description</label>
                    <textarea className='textarea has-background-light has-text-black' name="desc" value={tempNodeDesc} onChange={e => setTempNodeDesc(e.target.value)}></textarea>
                    <footer className='card-footer'>    
                        <button className='card-footer-item' onClick={props.close}>Close</button>
                        <button className='card-footer-item has-text-success' onClick={e => props.addNode(tempNodeName, tempNodeDate, tempNodeDesc)}>Add</button>
                    </footer>
                </div>
            </div>
        </div>
    </div>
    );
}

export default NodeCreator;