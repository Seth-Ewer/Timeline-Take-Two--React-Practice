import './Timenode.css';

function Timenode(props) {
    return (
        <div className='Main'>
            <h3>{props.name}</h3>
            <h4>{props.date}</h4>
            <p>{props.desc}</p>
            <p>{props.id}</p>
            <button onClick={props.selectNode(props.id)}>select</button>
        </div>
    );
}

export default Timenode;