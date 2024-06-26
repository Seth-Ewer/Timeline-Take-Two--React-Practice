import './NodeDetails.css';

function NodeDetails(props) {

    const del = () => {
        props.deleteNode();
    }
    const upd = () => {
        props.updateNode();
    }
    
    return(
        <div>
            <input name="name" value={props.targetName} onChange={e => props.setTargetName(e.target.value)}></input>
            <input name="date" value={props.targetDate} onChange={e => props.setTargetDate(e.target.value)}></input>
            <input name="desc" value={props.targetDesc} onChange={e => props.setTargetDesc(e.target.value)}></input>
            <button onClick={upd}>Save</button>
            <button onClick={del}>Delete</button>
            
        </div>
    );
}

export default NodeDetails;