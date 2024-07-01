import { useState, useEffect } from 'react';

function NodeDetails(props) {



    const [targetName, setTargetName] = useState("");
    const [targetDate, setTargetDate] = useState("");
    const [targetDesc, setTargetDesc] = useState("");

    useEffect(() => {
        if(props.activeNode != null){
            setTargetName(props.activeNode.name);
            setTargetDate(props.activeNode.date);
            setTargetDesc(props.activeNode.desc);
        }
    }, [props.activeNode]);

    return(
    <div className='modal is-active'>
        <div className='modal-background'></div>
        <div className='card'>
            <div className='card-content'>
                <div className='content'>
                    <label className='label'>Name</label>
                    <input className='input has-background-light has-text-black' name="name" value={targetName} onChange={e => setTargetName(e.target.value)}></input>
                    <label className='label'>Date</label>
                    <input className='input has-background-light has-text-black' type="date" name="date" value={targetDate} onChange={e => setTargetDate(e.target.value)}></input>
                    <label className='label'>Description</label>
                    <textarea className='textarea has-background-light has-text-black' name="desc" value={targetDesc} onChange={e => setTargetDesc(e.target.value)}></textarea>
                    <footer className='card-footer'>
                        <button className='card-footer-item has-text-danger' onClick={() => props.deleteNode(props.activeNode.id)}>Delete</button>
                        <button className='card-footer-item' onClick={e => props.setActiveNode (null)}>Close</button>
                        <button className='card-footer-item has-text-success' onClick={() => props.updateNode(props.activeNode.id, targetName, targetDate, targetDesc)}>Save</button>
                    </footer>
                </div>
            </div>
        </div>
    </div>
    );
}

export default NodeDetails;