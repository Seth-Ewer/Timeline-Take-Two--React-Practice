import { useState } from "react";
import './NodeDetails.css';

function NodeDetails(props) {

    const [nodeName, setNodeName] = useState(props.targetNode.name);
    const [nodeDate, setNodeDate] = useState(props.targetNode.date);
    const [nodeDesc, setNodeDesc] = useState(props.targetNode.desc);

    const del = () => {
        props.deleteNode(props.targetNode.pos);
    }
    const upd = () => {
        props.updateNode(props.targetNode.pos, nodeName, nodeDate, nodeDesc);
    }
    
    return(
        <div>
            <input name="name" value={nodeName} onChange={e => setNodeName(e.target.value)}></input>
            <input name="date" value={nodeDate} onChange={e => setNodeDate(e.target.value)}></input>
            <input name="desc" value={nodeDesc} onChange={e => setNodeDesc(e.target.value)}></input>
            <button onClick={upd}>Save</button>
            <button onClick={del}>Delete</button>
            
        </div>
    );
}

export default NodeDetails;